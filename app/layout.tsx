import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { SessionProvider } from "@/components/session-provider"
import { VoiceflowChat } from "@/components/voiceflow-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ConnectGuardian - Your Digital Lifeline",
  description: "Intelligent ISP Support & Network Health Hub",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </SessionProvider>
        <VoiceflowChat />
      </body>
    </html>
  )
}
