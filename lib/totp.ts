import * as crypto from "crypto"

// Generate a random secret for TOTP
export function generateSecret(): string {
  const buffer = crypto.randomBytes(20)
  return buffer.toString("base32").replace(/=/g, "")
}

// Generate a TOTP URI for QR code generation
export function generateTOTPUri(secret: string, accountName: string, issuer = "ConnectGuardian"): string {
  const encodedIssuer = encodeURIComponent(issuer)
  const encodedAccount = encodeURIComponent(accountName)
  return `otpauth://totp/${encodedIssuer}:${encodedAccount}?secret=${secret}&issuer=${encodedIssuer}&algorithm=SHA1&digits=6&period=30`
}

// Verify a TOTP code
export function verifyTOTP(token: string, secret: string): boolean {
  if (!token || !secret || token.length !== 6 || !/^\d+$/.test(token)) {
    return false
  }

  const window = 1 // Allow 1 step before and after current time (30 seconds each)
  const counter = Math.floor(Date.now() / 30000) // Current 30-second window

  for (let i = -window; i <= window; i++) {
    const calculatedToken = generateTOTP(secret, counter + i)
    if (calculatedToken === token) {
      return true
    }
  }

  return false
}

// Generate a TOTP code for a specific time window
function generateTOTP(secret: string, counter: number): string {
  // Convert counter to buffer
  const buffer = Buffer.alloc(8)
  for (let i = 0; i < 8; i++) {
    buffer[7 - i] = counter & 0xff
    counter = counter >> 8
  }

  // Convert secret from base32 to buffer
  const secretBuffer = base32ToBuffer(secret)

  // Calculate HMAC
  const hmac = crypto.createHmac("sha1", secretBuffer)
  hmac.update(buffer)
  const hmacResult = hmac.digest()

  // Dynamic truncation
  const offset = hmacResult[hmacResult.length - 1] & 0xf
  const binary =
    ((hmacResult[offset] & 0x7f) << 24) |
    ((hmacResult[offset + 1] & 0xff) << 16) |
    ((hmacResult[offset + 2] & 0xff) << 8) |
    (hmacResult[offset + 3] & 0xff)

  // Generate 6-digit code
  const token = binary % 1000000
  return token.toString().padStart(6, "0")
}

// Convert base32 string to buffer
function base32ToBuffer(base32: string): Buffer {
  const base32Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"
  let bits = 0
  let value = 0
  let index = 0
  const result = []

  for (let i = 0; i < base32.length; i++) {
    const char = base32[i].toUpperCase()
    if (char === "=") continue

    value = (value << 5) | base32Chars.indexOf(char)
    bits += 5

    if (bits >= 8) {
      result[index++] = (value >>> (bits - 8)) & 0xff
      bits -= 8
    }
  }

  return Buffer.from(result)
}
