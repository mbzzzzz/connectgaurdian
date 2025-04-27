// This file helps ensure NextAuth is properly configured
// You don't need to import this file anywhere, just having it helps with configuration

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

// The NextAuth.js URL should be set to the base URL of your site
// For local development: NEXTAUTH_URL=http://localhost:3000
// For production: NEXTAUTH_URL=https://your-site.com
