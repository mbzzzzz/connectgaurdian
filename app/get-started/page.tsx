"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ShieldCheck, Eye, EyeOff, Check, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FiberOpticBackground } from "@/components/fiber-optic-background"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { validatePassword } from "@/lib/password-validation"

export default function GetStartedPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [plan, setPlan] = useState("standard")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: { warning: "", suggestions: [] },
    isStrong: false,
  })
  const router = useRouter()

  useEffect(() => {
    if (password) {
      setPasswordStrength(validatePassword(password))
    } else {
      setPasswordStrength({
        score: 0,
        feedback: { warning: "", suggestions: [] },
        isStrong: false,
      })
    }
  }, [password])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!passwordStrength.isStrong) {
      setError("Please choose a stronger password")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          plan,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to register")
      }

      // Sign in the user after successful registration
      await fetch("/api/auth/signin/credentials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred during registration")
      setIsLoading(false)
    }
  }

  const getScoreColor = (score: number) => {
    if (score <= 1) return "bg-red-500"
    if (score === 2) return "bg-orange-500"
    if (score === 3) return "bg-yellow-500"
    return "bg-green-500"
  }

  return (
    <div className="relative min-h-screen py-10">
      <FiberOpticBackground />

      <div className="container max-w-md relative z-10">
        <div className="flex flex-col items-center mb-8">
          <ShieldCheck className="h-12 w-12 text-[#0A4DA6] mb-4" />
          <h1 className="text-2xl font-bold">Get Started with ConnectGuardian</h1>
          <p className="text-sm text-muted-foreground mt-1">Create your account and secure your network</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>Enter your details to create a new account</CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
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

                {/* Password strength indicator */}
                {password && (
                  <div className="mt-2 space-y-2">
                    <div className="flex gap-1 h-1.5">
                      {[1, 2, 3, 4].map((index) => (
                        <div
                          key={index}
                          className={`h-full flex-1 rounded-full ${
                            passwordStrength.score >= index ? getScoreColor(passwordStrength.score) : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>

                    {passwordStrength.feedback.warning && (
                      <p className="text-xs text-red-500">{passwordStrength.feedback.warning}</p>
                    )}

                    <ul className="space-y-1">
                      <li
                        className={`text-xs flex items-center gap-1 ${password.length >= 8 ? "text-green-500" : "text-gray-500"}`}
                      >
                        {password.length >= 8 ? <Check size={12} /> : <X size={12} />}
                        At least 8 characters
                      </li>
                      <li
                        className={`text-xs flex items-center gap-1 ${/[A-Z]/.test(password) ? "text-green-500" : "text-gray-500"}`}
                      >
                        {/[A-Z]/.test(password) ? <Check size={12} /> : <X size={12} />}
                        At least one uppercase letter
                      </li>
                      <li
                        className={`text-xs flex items-center gap-1 ${/[a-z]/.test(password) ? "text-green-500" : "text-gray-500"}`}
                      >
                        {/[a-z]/.test(password) ? <Check size={12} /> : <X size={12} />}
                        At least one lowercase letter
                      </li>
                      <li
                        className={`text-xs flex items-center gap-1 ${/\d/.test(password) ? "text-green-500" : "text-gray-500"}`}
                      >
                        {/\d/.test(password) ? <Check size={12} /> : <X size={12} />}
                        At least one number
                      </li>
                      <li
                        className={`text-xs flex items-center gap-1 ${/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "text-green-500" : "text-gray-500"}`}
                      >
                        {/[!@#$%^&*(),.?":{}|<>]/.test(password) ? <Check size={12} /> : <X size={12} />}
                        At least one special character
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <Label>Select a Plan</Label>
                <RadioGroup defaultValue="standard" value={plan} onValueChange={setPlan}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="font-normal">
                      Standard Plan - $9.99/month
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="premium" id="premium" />
                    <Label htmlFor="premium" className="font-normal">
                      Premium Plan - $19.99/month
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business" className="font-normal">
                      Business Plan - $49.99/month
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90"
                disabled={isLoading || !passwordStrength.isStrong}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/signin" className="text-[#0A4DA6] hover:underline">
                Sign in
              </Link>
            </div>
            <div className="w-full border-t pt-4">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/business/get-started">Business Sign Up</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
