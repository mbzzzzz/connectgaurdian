"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FiberOpticBackground } from "@/components/fiber-optic-background"
import Link from "next/link"
import { ShieldCheck, Eye, EyeOff } from "lucide-react"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [totpCode, setTotpCode] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [requiresTwoFactor, setRequiresTwoFactor] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Check for error in URL
    const errorParam = searchParams.get("error")
    if (errorParam === "CredentialsSignin") {
      setError("Invalid email or password")
    } else if (errorParam === "account_locked") {
      setError(
        "Your account has been locked due to too many failed login attempts. Please try again later or reset your password.",
      )
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
        ...(requiresTwoFactor && { totpCode }),
      })

      if (result?.error) {
        if (result.error === "account_locked") {
          setError(
            "Your account has been locked due to too many failed login attempts. Please try again later or reset your password.",
          )
        } else if (result.error === "CredentialsSignin") {
          setError("Invalid email or password")
        } else {
          setError(result.error)
        }
        setIsLoading(false)
        return
      }

      // Check if 2FA is required
      if (result?.url?.includes("error=requires_2fa")) {
        setRequiresTwoFactor(true)
        setIsLoading(false)
        return
      }

      if (result?.ok) {
        router.push("/dashboard")
        router.refresh()
      }
    } catch (error) {
      console.error("Sign in error:", error)
      setError("An unexpected error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen py-10">
      <FiberOpticBackground />

      <div className="container max-w-md relative z-10">
        <div className="flex flex-col items-center mb-8">
          <ShieldCheck className="h-12 w-12 text-[#0A4DA6] mb-4" />
          <h1 className="text-2xl font-bold">Sign In to ConnectGuardian</h1>
          <p className="text-sm text-muted-foreground mt-1">Secure your network with ConnectGuardian</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{requiresTwoFactor ? "Two-Factor Authentication" : "Sign In"}</CardTitle>
            <CardDescription>
              {requiresTwoFactor
                ? "Please enter the verification code from your authenticator app"
                : "Enter your credentials to access your account"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!requiresTwoFactor ? (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="totpCode">Verification Code</Label>
                  <Input
                    id="totpCode"
                    type="text"
                    placeholder="6-digit code"
                    value={totpCode}
                    onChange={(e) => setTotpCode(e.target.value)}
                    required
                    maxLength={6}
                    pattern="[0-9]{6}"
                  />
                  <p className="text-xs text-muted-foreground">Enter the 6-digit code from your authenticator app</p>
                </div>
              )}
              <Button type="submit" className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" disabled={isLoading}>
                {isLoading ? "Signing In..." : requiresTwoFactor ? "Verify" : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-4">
            <div className="text-sm text-muted-foreground">
              {!requiresTwoFactor ? (
                <>
                  <Link href="/forgot-password" className="text-[#0A4DA6] hover:underline">
                    Forgot password?
                  </Link>
                  <span className="mx-2">•</span>
                  <Link href="/get-started" className="text-[#0A4DA6] hover:underline">
                    Create account
                  </Link>
                </>
              ) : (
                <button
                  type="button"
                  className="text-[#0A4DA6] hover:underline"
                  onClick={() => setRequiresTwoFactor(false)}
                >
                  Back to sign in
                </button>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
