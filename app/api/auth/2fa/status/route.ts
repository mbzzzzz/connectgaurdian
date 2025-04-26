import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { getUserById } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = await getUserById(session.user.id)

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      enabled: user.twoFactorEnabled,
    })
  } catch (error) {
    console.error("2FA status error:", error)
    return NextResponse.json({ error: "Failed to get 2FA status" }, { status: 500 })
  }
}
