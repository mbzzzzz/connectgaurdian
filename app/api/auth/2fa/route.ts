import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { getUserById, updateTwoFactorSecret, enableTwoFactor, disableTwoFactor } from "@/lib/db"
import { generateSecret, generateTOTPUri, verifyTOTP } from "@/lib/totp"

// GET: Generate new 2FA secret and QR code URI
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Generate a new secret
    const secret = generateSecret()

    // Generate TOTP URI for QR code
    const uri = generateTOTPUri(secret, session.user.email || "user", "ConnectGuardian")

    // Store the secret temporarily (not enabled yet)
    await updateTwoFactorSecret(session.user.id, secret)

    return NextResponse.json({ secret, uri })
  } catch (error) {
    console.error("2FA setup error:", error)
    return NextResponse.json({ error: "Failed to set up 2FA" }, { status: 500 })
  }
}

// POST: Verify and enable 2FA
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { code } = body

    if (!code) {
      return NextResponse.json({ error: "Verification code is required" }, { status: 400 })
    }

    // Get user with secret
    const user = await getUserById(session.user.id)

    if (!user || !user.twoFactorSecret) {
      return NextResponse.json({ error: "No 2FA setup in progress" }, { status: 400 })
    }

    // Verify the code
    const isValid = verifyTOTP(code, user.twoFactorSecret)

    if (!isValid) {
      return NextResponse.json({ error: "Invalid verification code" }, { status: 400 })
    }

    // Enable 2FA
    await enableTwoFactor(user.id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("2FA verification error:", error)
    return NextResponse.json({ error: "Failed to verify 2FA code" }, { status: 500 })
  }
}

// DELETE: Disable 2FA
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await disableTwoFactor(session.user.id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("2FA disable error:", error)
    return NextResponse.json({ error: "Failed to disable 2FA" }, { status: 500 })
  }
}
