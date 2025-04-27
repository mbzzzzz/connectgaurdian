import { neon } from "@neondatabase/serverless"

// Create a SQL client with the database URL
export const sql = neon(process.env.DATABASE_URL!)

// User type definition based on our schema
export type User = {
  id: string
  name: string | null
  email: string
  password: string | null
  role: string
  image: string | null
  emailVerified: Date | null
  createdAt: Date
  updatedAt: Date
  twoFactorEnabled: boolean
  twoFactorSecret: string | null
  failedLoginAttempts: number
  lockedUntil: Date | null
  passwordChangedAt: Date | null
  resetPasswordToken: string | null
  resetPasswordExpires: Date | null
}

// Profile type definition
export type Profile = {
  id: string
  userId: string
  address: string | null
  phone: string | null
  plan: string
  createdAt: Date
  updatedAt: Date
}

// User functions
export async function getUserByEmail(email: string): Promise<User | null> {
  const [user] = await sql<User[]>`
    SELECT * FROM "User" WHERE email = ${email} LIMIT 1
  `
  return user || null
}

export async function getUserById(id: string): Promise<User | null> {
  const [user] = await sql<User[]>`
    SELECT * FROM "User" WHERE id = ${id} LIMIT 1
  `
  return user || null
}

export async function getUserProfile(userId: string): Promise<Profile | null> {
  const [profile] = await sql<Profile[]>`
    SELECT * FROM "Profile" WHERE userId = ${userId} LIMIT 1
  `
  return profile || null
}

// Session functions
export async function createSession(userId: string, expires: Date): Promise<string> {
  const id = crypto.randomUUID()
  const sessionToken = crypto.randomUUID()

  await sql`
    INSERT INTO "Session" (id, sessionToken, userId, expires)
    VALUES (${id}, ${sessionToken}, ${userId}, ${expires})
  `

  return sessionToken
}

export async function getSessionByToken(sessionToken: string) {
  const [session] = await sql`
    SELECT * FROM "Session" WHERE sessionToken = ${sessionToken} LIMIT 1
  `
  return session
}

export async function deleteSession(sessionToken: string) {
  await sql`
    DELETE FROM "Session" WHERE sessionToken = ${sessionToken}
  `
}

// Authentication functions
export async function recordLoginAttempt(email: string, ipAddress: string, userAgent: string | null, success: boolean) {
  const id = crypto.randomUUID()

  await sql`
    INSERT INTO "LoginAttempt" (id, email, ipAddress, userAgent, success, createdAt)
    VALUES (${id}, ${email}, ${ipAddress}, ${userAgent}, ${success}, CURRENT_TIMESTAMP)
  `
}

export async function getRecentLoginAttempts(email: string, ipAddress: string, minutes = 15) {
  const timeAgo = new Date(Date.now() - minutes * 60 * 1000)

  return await sql`
    SELECT * FROM "LoginAttempt" 
    WHERE (email = ${email} OR ipAddress = ${ipAddress})
    AND success = false
    AND createdAt > ${timeAgo}
    ORDER BY createdAt DESC
  `
}

export async function incrementFailedLoginAttempts(userId: string) {
  await sql`
    UPDATE "User"
    SET failedLoginAttempts = failedLoginAttempts + 1
    WHERE id = ${userId}
  `
}

export async function resetFailedLoginAttempts(userId: string) {
  await sql`
    UPDATE "User"
    SET failedLoginAttempts = 0
    WHERE id = ${userId}
  `
}

export async function lockAccount(userId: string, minutes = 30) {
  const lockUntil = new Date(Date.now() + minutes * 60 * 1000)

  await sql`
    UPDATE "User"
    SET lockedUntil = ${lockUntil}
    WHERE id = ${userId}
  `
}

export async function isAccountLocked(userId: string): Promise<boolean> {
  const [user] = await sql<User[]>`
    SELECT lockedUntil FROM "User" WHERE id = ${userId} LIMIT 1
  `

  if (!user || !user.lockedUntil) return false

  return new Date(user.lockedUntil) > new Date()
}

export async function updateTwoFactorSecret(userId: string, secret: string | null) {
  await sql`
    UPDATE "User"
    SET twoFactorSecret = ${secret}
    WHERE id = ${userId}
  `
}

export async function enableTwoFactor(userId: string) {
  await sql`
    UPDATE "User"
    SET twoFactorEnabled = true
    WHERE id = ${userId}
  `
}

export async function disableTwoFactor(userId: string) {
  await sql`
    UPDATE "User"
    SET twoFactorEnabled = false, twoFactorSecret = NULL
    WHERE id = ${userId}
  `
}

export async function createPasswordResetToken(email: string): Promise<string | null> {
  const user = await getUserByEmail(email)

  if (!user) return null

  const token = crypto.randomUUID()
  const expires = new Date(Date.now() + 3600 * 1000) // 1 hour

  await sql`
    UPDATE "User"
    SET resetPasswordToken = ${token}, resetPasswordExpires = ${expires}
    WHERE id = ${user.id}
  `

  return token
}

export async function validatePasswordResetToken(token: string): Promise<User | null> {
  const [user] = await sql<User[]>`
    SELECT * FROM "User" 
    WHERE resetPasswordToken = ${token} 
    AND resetPasswordExpires > CURRENT_TIMESTAMP
    LIMIT 1
  `

  return user || null
}

export async function resetPassword(userId: string, newPassword: string) {
  await sql`
    UPDATE "User"
    SET password = ${newPassword}, 
        resetPasswordToken = NULL, 
        resetPasswordExpires = NULL,
        passwordChangedAt = CURRENT_TIMESTAMP
    WHERE id = ${userId}
  `
}
