import { type NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { sql } from "@/lib/db"
import { validatePassword } from "@/lib/password-validation"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
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

    // Check if user already exists
    const existingUser = await sql`
      SELECT * FROM "User" WHERE email = ${email} LIMIT 1
    `

    if (existingUser.length > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Generate IDs
    const userId = `usr_${crypto.randomUUID().split("-")[0]}`
    const profileId = `prf_${crypto.randomUUID().split("-")[0]}`

    // Create user
    await sql`
      INSERT INTO "User" (
        id, 
        name, 
        email, 
        password, 
        role, 
        twoFactorEnabled,
        failedLoginAttempts,
        createdAt, 
        updatedAt
      )
      VALUES (
        ${userId}, 
        ${name}, 
        ${email}, 
        ${hashedPassword}, 
        'user', 
        false,
        0,
        CURRENT_TIMESTAMP, 
        CURRENT_TIMESTAMP
      )
    `

    // Create profile
    await sql`
      INSERT INTO "Profile" (id, userId, plan, createdAt, updatedAt)
      VALUES (${profileId}, ${userId}, 'standard', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `

    return NextResponse.json({ success: true, message: "User registered successfully" }, { status: 201 })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
