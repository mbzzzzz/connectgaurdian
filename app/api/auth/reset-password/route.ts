import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { createPasswordResetToken, validatePasswordResetToken, resetPassword } from "@/lib/db"
import { validatePassword } from "@/lib/password-validation"

// POST: Request password reset
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Generate reset token
    const token = await createPasswordResetToken(email)

    if (!token) {
      // Don't reveal if the email exists or not
      return NextResponse.json({ success: true })
    }

    // In a real application, you would send an email with the reset link
    // For this example, we'll just return the token (not secure for production)
    const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${token}`

    console.log("Password reset URL:", resetUrl)

    // Return success regardless of whether the email exists
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Password reset request error:", error)
    return NextResponse.json({ error: "Failed to process password reset request" }, { status: 500 })
  }
}

// PUT: Reset password with token
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { token, password } = body

    if (!token || !password) {
      return NextResponse.json({ error: "Token and password are required" }, { status: 400 })
    }

    // Validate password strength
    const passwordStrength = validatePassword(password)
    if (!passwordStrength.isStrong) {
      return NextResponse.json(
        {
          error: "Password is too weak",
          feedback: passwordStrength.feedback,
        },
        { status: 400 },
      )
    }

    // Validate token
    const user = await validatePasswordResetToken(token)

    if (!user) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 })
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Reset password
    await resetPassword(user.id, hashedPassword)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Password reset error:", error)
    return NextResponse.json({ error: "Failed to reset password" }, { status: 500 })
  }
}
