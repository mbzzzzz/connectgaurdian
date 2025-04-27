import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import crypto from "crypto"

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

// User functions
export async function getUserByEmail(email: string) {
  try {
    return await prisma.user.findUnique({
      where: { email },
    })
  } catch (error) {
    console.error("Error getting user by email:", error)
    return null
  }
}

export async function getUserById(id: string) {
  try {
    return await prisma.user.findUnique({
      where: { id },
    })
  } catch (error) {
    console.error("Error getting user by ID:", error)
    return null
  }
}

// Login attempt tracking
export async function recordLoginAttempt(email: string, ipAddress: string, userAgent: string | null, success: boolean) {
  try {
    return await prisma.loginAttempt.create({
      data: {
        id: crypto.randomUUID(),
        email,
        ipAddress,
        userAgent,
        success,
      },
    })
  } catch (error) {
    console.error("Error recording login attempt:", error)
    // Don't throw - this is non-critical functionality
  }
}

// Failed login attempts
export async function incrementFailedLoginAttempts(userId: string) {
  try {
    return await prisma.user.update({
      where: { id: userId },
      data: {
        failedLoginAttempts: {
          increment: 1,
        },
      },
    })
  } catch (error) {
    console.error("Error incrementing failed login attempts:", error)
    // Don't throw - we'll just continue
  }
}

export async function resetFailedLoginAttempts(userId: string) {
  try {
    return await prisma.user.update({
      where: { id: userId },
      data: {
        failedLoginAttempts: 0,
        lockedUntil: null,
      },
    })
  } catch (error) {
    console.error("Error resetting failed login attempts:", error)
    // Don't throw - we'll just continue
  }
}

// Account locking
export async function lockAccount(userId: string, minutes: number) {
  try {
    const lockedUntil = new Date(Date.now() + minutes * 60 * 1000)
    return await prisma.user.update({
      where: { id: userId },
      data: {
        lockedUntil,
      },
    })
  } catch (error) {
    console.error("Error locking account:", error)
    // Don't throw - we'll just continue
  }
}

export async function isAccountLocked(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { lockedUntil: true },
    })

    if (!user || !user.lockedUntil) {
      return false
    }

    return new Date() < new Date(user.lockedUntil)
  } catch (error) {
    console.error("Error checking if account is locked:", error)
    return false // Default to not locked if there's an error
  }
}

// Password reset
export async function createPasswordResetToken(email: string) {
  try {
    const user = await getUserByEmail(email)
    if (!user) return null

    const resetToken = crypto.randomBytes(32).toString("hex")
    const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex")

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordToken: hashedToken,
        resetPasswordExpires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
      },
    })

    return resetToken
  } catch (error) {
    console.error("Error creating password reset token:", error)
    return null
  }
}

export async function resetPassword(token: string, newPassword: string) {
  try {
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex")

    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: hashedToken,
        resetPasswordExpires: {
          gt: new Date(),
        },
      },
    })

    if (!user) return false

    const hashedPassword = await bcrypt.hash(newPassword, 10)

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetPasswordToken: null,
        resetPasswordExpires: null,
        passwordChangedAt: new Date(),
        failedLoginAttempts: 0,
        lockedUntil: null,
      },
    })

    return true
  } catch (error) {
    console.error("Error resetting password:", error)
    return false
  }
}

// 2FA functions
export async function updateTwoFactorSecret(userId: string, secret: string) {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        twoFactorSecret: secret,
      },
    })
  } catch (error) {
    console.error("Error updating two factor secret:", error)
  }
}

export async function enableTwoFactor(userId: string) {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        twoFactorEnabled: true,
        twoFactorSecret: null, // Clear the secret after enabling
      },
    })
  } catch (error) {
    console.error("Error enabling two factor auth:", error)
  }
}

export async function disableTwoFactor(userId: string) {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        twoFactorEnabled: false,
        twoFactorSecret: null,
      },
    })
  } catch (error) {
    console.error("Error disabling two factor auth:", error)
  }
}

export async function validatePasswordResetToken(token: string) {
  try {
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex")

    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: hashedToken,
        resetPasswordExpires: {
          gt: new Date(),
        },
      },
    })

    return user
  } catch (error) {
    console.error("Error validating password reset token:", error)
    return null
  }
}

import postgres from "postgres"

const DATABASE_URL = process.env.DATABASE_URL || ""

export const sql = postgres(DATABASE_URL)
