"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"
import Link from "next/link"
import { FiberOpticBackground } from "@/components/fiber-optic-background"

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const [errorMessage, setErrorMessage] = useState<string>("An authentication error occurred")

  useEffect(() => {
    const error = searchParams.get("error")

    if (error === "CredentialsSignin") {
      setErrorMessage("Invalid email or password. Please try again.")
    } else if (error === "SessionRequired") {
      setErrorMessage("You need to be signed in to access this page.")
    } else if (error === "AccessDenied") {
      setErrorMessage("You don't have permission to access this resource.")
    } else if (error) {
      setErrorMessage(`Authentication error: ${error}`)
    }
  }, [searchParams])

  return (
    <div className="relative min-h-screen py-10">
      <FiberOpticBackground />

      <div className="container max-w-md relative z-10">
        <div className="flex flex-col items-center mb-8">
          <ShieldCheck className="h-12 w-12 text-[#E53935] mb-4" />
          <h1 className="text-2xl font-bold">Authentication Error</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>There was a problem with authentication</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-[#E53935]/10 rounded-lg border border-[#E53935]/20 text-center">{errorMessage}</div>

            <div className="flex flex-col space-y-2">
              <Button asChild>
                <Link href="/signin">Try Again</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
