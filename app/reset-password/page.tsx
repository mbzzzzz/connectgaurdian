"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FiberOpticBackground } from "@/components/fiber-optic-background"
import { ShieldCheck, Eye, EyeOff, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { validatePassword, getPasswordStrengthLabel } from "@/lib/password-validation"

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [token, setToken] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    isStrong: false,
    feedback: { warning: "", suggestions: [] },
  })
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const tokenParam = searchParams.get("token")
    if (tokenParam) {
      setToken(tokenParam)
    } else {
      setError("Missing reset token")
    }
  }, [searchParams])

  useEffect(() => {
    if (password) {
      setPasswordStrength(validatePassword(password))
    } else {
      setPasswordStrength({ score: 0, isStrong: false, feedback: { warning: "", suggestions: [] } })
    }
  }, [password])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (!passwordStrength.isStrong) {
      setError("Password is not strong enough")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to reset password")
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/signin")
      }, 3000)
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const getStrengthColor = (score: number) => {
    switch (score) {
      case 0:
        return "bg-gray-200"
      case 1:
        return "bg-red-500"
      case 2:
        return "bg-orange-500"
      case 3:
        return "bg-yellow-500"
      case 4:
        return "bg-green-500"
      default:
        return "bg-gray-200"
    }
  }

  return (
    <div className="relative min-h-screen py-10">
      <FiberOpticBackground />

      <div className="container max-w-md relative z-10">
        <div className="flex flex-col items-center mb-8">
          <ShieldCheck className="h-12 w-12 text-[#0A4DA6] mb-4" />
          <h1 className="text-2xl font-bold">Reset Your Password</h1>
          <p className="text-sm text-muted-foreground mt-1">Create a new password for your account</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create New Password</CardTitle>
            <CardDescription>Your new password must be different from previously used passwords</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success ? (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md text-center">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <h3 className="text-sm font-medium text-green-800 mb-2">Password Reset Successful</h3>
                <p className="text-xs text-green-700 mb-4">Your password has been reset successfully.</p>
                <p className="text-xs text-green-700">Redirecting to sign in page...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">New Password</Label>
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

                  {/* Password strength meter */}
                  {password && (
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium">Password strength:</span>
                        <span
                          className={`text-xs font-medium ${passwordStrength.isStrong ? "text-green-600" : "text-orange-600"}`}
                        >
                          {getPasswordStrengthLabel(passwordStrength.score)}
                        </span>
                      </div>
                      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getStrengthColor(passwordStrength.score)}`}
                          style={{ width: `${(passwordStrength.score / 4) * 100}%` }}
                        ></div>
                      </div>

                      {passwordStrength.feedback.warning && (
                        <p className="text-xs text-red-600 mt-1">{passwordStrength.feedback.warning}</p>
                      )}

                      <ul className="space-y-1 mt-2">
                        {passwordStrength.feedback.suggestions.map((suggestion, index) => (
                          <li key={index} className="text-xs flex items-center gap-1 text-gray-600">
                            <XCircle size={12} className="text-red-500" />
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  {password && confirmPassword && password !== confirmPassword && (
                    <p className="text-xs text-red-600 mt-1">Passwords do not match</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90"
                  disabled={isLoading || !passwordStrength.isStrong || password !== confirmPassword}
                >
                  {isLoading ? "Resetting..." : "Reset Password"}
                </Button>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-muted-foreground">
              <Link href="/signin" className="text-[#0A4DA6] hover:underline">
                Back to Sign In
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
