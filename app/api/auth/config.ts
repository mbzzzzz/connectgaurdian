// This file helps ensure NextAuth is properly configured

export const authConfig = {
  // Make sure this matches your deployment URL
  baseUrl:
    process.env.NEXTAUTH_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.VERCEL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : "http://localhost:3000"),
}
