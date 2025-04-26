import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// In-memory store for rate limiting
// Note: This will reset on server restart. For production, use Redis or similar
const rateLimitStore: Record<string, { count: number; timestamp: number }> = {}

// Rate limit configuration
const MAX_REQUESTS = 5 // Maximum requests per window
const WINDOW_MS = 15 * 60 * 1000 // 15 minutes in milliseconds
const BLOCK_DURATION_MS = 30 * 60 * 1000 // 30 minutes in milliseconds

export async function middleware(request: NextRequest) {
  // Only apply rate limiting to authentication endpoints
  if (request.nextUrl.pathname.startsWith("/api/auth") || request.nextUrl.pathname === "/signin") {
    const ip = request.ip || "unknown"

    // Check if IP is currently blocked
    const now = Date.now()
    const blockedUntil = rateLimitStore[`blocked:${ip}`]?.timestamp || 0

    if (blockedUntil > now) {
      return new NextResponse(
        JSON.stringify({
          error: "Too many requests",
          retryAfter: Math.ceil((blockedUntil - now) / 1000),
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": Math.ceil((blockedUntil - now) / 1000).toString(),
          },
        },
      )
    }

    // Get current rate limit data
    const rateLimit = rateLimitStore[ip] || { count: 0, timestamp: now }

    // Reset count if window has expired
    if (now - rateLimit.timestamp > WINDOW_MS) {
      rateLimit.count = 0
      rateLimit.timestamp = now
    }

    // Increment count
    rateLimit.count++
    rateLimitStore[ip] = rateLimit

    // Check if rate limit exceeded
    if (rateLimit.count > MAX_REQUESTS) {
      // Block IP for the block duration
      rateLimitStore[`blocked:${ip}`] = {
        count: 0,
        timestamp: now + BLOCK_DURATION_MS,
      }

      return new NextResponse(
        JSON.stringify({
          error: "Too many requests",
          retryAfter: Math.ceil(BLOCK_DURATION_MS / 1000),
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": Math.ceil(BLOCK_DURATION_MS / 1000).toString(),
          },
        },
      )
    }

    // Add rate limit headers
    const response = NextResponse.next()
    response.headers.set("X-RateLimit-Limit", MAX_REQUESTS.toString())
    response.headers.set("X-RateLimit-Remaining", (MAX_REQUESTS - rateLimit.count).toString())
    response.headers.set("X-RateLimit-Reset", Math.ceil((rateLimit.timestamp + WINDOW_MS) / 1000).toString())

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/auth/:path*", "/signin"],
}
