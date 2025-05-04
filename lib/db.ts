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
