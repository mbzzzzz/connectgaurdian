import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import {
  getUserByEmail,
  recordLoginAttempt,
  incrementFailedLoginAttempts,
  resetFailedLoginAttempts,
  isAccountLocked,
  lockAccount,
} from "@/lib/db"
import { verifyTOTP } from "@/lib/totp"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        totpCode: { label: "2FA Code", type: "text" },
      },
      async authorize(credentials, req) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null
          }

          const ipAddress = req?.headers?.["x-forwarded-for"] || "unknown"
          const userAgent = req?.headers?.["user-agent"] || null

          // Get user by email
          const user = await getUserByEmail(credentials.email)

          // Record login attempt regardless of success
          await recordLoginAttempt(
            credentials.email,
            ipAddress as string,
            userAgent as string | null,
            false, // Will update to true if login succeeds
          )

          // Check if user exists
          if (!user || !user.password) {
            return null
          }

          // Check if account is locked
          if (await isAccountLocked(user.id)) {
            throw new Error("account_locked")
          }

          // Verify password
          const isValid = await bcrypt.compare(credentials.password, user.password)

          if (!isValid) {
            // Increment failed login attempts
            await incrementFailedLoginAttempts(user.id)

            // Lock account after 5 failed attempts
            if (user.failedLoginAttempts >= 4) {
              // This will be 5 after increment
              await lockAccount(user.id, 30) // Lock for 30 minutes
              throw new Error("account_locked")
            }

            return null
          }

          // Check 2FA if enabled
          if (user.twoFactorEnabled) {
            if (!credentials.totpCode) {
              // Return partial user data to indicate 2FA is required
              return {
                id: user.id,
                email: user.email,
                name: user.name,
                requiresTwoFactor: true,
              }
            }

            // Verify TOTP code
            const isValidTOTP = user.twoFactorSecret && verifyTOTP(credentials.totpCode, user.twoFactorSecret)

            if (!isValidTOTP) {
              // Increment failed login attempts
              await incrementFailedLoginAttempts(user.id)
              return null
            }
          }

          // Reset failed login attempts on successful login
          await resetFailedLoginAttempts(user.id)

          // Record successful login
          await recordLoginAttempt(credentials.email, ipAddress as string, userAgent as string | null, true)

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            image: user.image,
          }
        } catch (error) {
          console.error("Authentication error:", error)
          if ((error as Error).message === "account_locked") {
            throw new Error("account_locked")
          }
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role

        // Handle 2FA requirement
        if ((user as any).requiresTwoFactor) {
          token.requiresTwoFactor = true
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: "/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
})

export { handler as GET, handler as POST }
