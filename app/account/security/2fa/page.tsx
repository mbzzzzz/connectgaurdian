"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FiberOpticBackground } from "@/components/fiber-optic-background"
import { ShieldCheck, Smartphone } from "lucide-react"
import Link from "next/link"

export default function TwoFactorSetupPage() {
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [qrCodeUri, setQrCodeUri] = useState("")
  const [secret, setSecret] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [is2FAEnabled, setIs2FAEnabled] = useState(false)
  const [setupStep, setSetupStep] = useState(0) // 0: initial, 1: setup, 2: verify

  useEffect(() => {
    if (status === "authenticated") {
      // Check if 2FA is already enabled
      fetch("/api/auth/2fa/status")
        .then((res) => res.json())
        .then((data) => {
          setIs2FAEnabled(data.enabled)
        })
        .catch((err) => {
          console.error("Error checking 2FA status:", err)
        })
    }
  }, [status])

  if (status === "loading") {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (status === "unauthenticated") {
    redirect("/signin")
  }

  const startSetup = async () => {
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/auth/2fa", {
        method: "GET",
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to start 2FA setup")
      }

      setQrCodeUri(data.uri)
      setSecret(data.secret)
      setSetupStep(1)
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const verifyAndEnable = async () => {
    if (!verificationCode || verificationCode.length !== 6) {
      setError("Please enter a valid 6-digit verification code")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/auth/2fa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: verificationCode }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to verify code")
      }

      setSuccess("Two-factor authentication has been enabled successfully")
      setIs2FAEnabled(true)
      setSetupStep(2)
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const disable2FA = async () => {
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/auth/2fa", {
        method: "DELETE",
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to disable 2FA")
      }

      setSuccess("Two-factor authentication has been disabled")
      setIs2FAEnabled(false)
      setSetupStep(0)
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen py-10">
      <FiberOpticBackground />

      <div className="container max-w-md relative z-10">
        <div className="flex flex-col items-center mb-8">
          <ShieldCheck className="h-12 w-12 text-[#0A4DA6] mb-4" />
          <h1 className="text-2xl font-bold">Two-Factor Authentication</h1>
          <p className="text-sm text-muted-foreground mt-1">Add an extra layer of security to your account</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{is2FAEnabled ? "Manage 2FA" : setupStep === 0 ? "Enable 2FA" : "Setup 2FA"}</CardTitle>
            <CardDescription>
              {is2FAEnabled
                ? "Your account is protected with two-factor authentication"
                : "Protect your account with two-factor authentication"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="mb-4 bg-green-50 border-green-200 text-green-800">
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            {is2FAEnabled ? (
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-md flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-green-500" />
                  <p className="text-sm text-green-800">Two-factor authentication is enabled for your account</p>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                  <h3 className="text-sm font-medium mb-2">Recovery Options</h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    If you lose access to your authenticator app, you can use one of these methods to recover your
                    account:
                  </p>
                  <ul className="text-xs space-y-2">
                    <li>• Contact support with your account details</li>
                    <li>• Use your backup codes (if you've saved them)</li>
                    <li>• Verify your identity through email</li>
                  </ul>
                </div>

                <Button variant="destructive" className="w-full" onClick={disable2FA} disabled={isLoading}>
                  {isLoading ? "Disabling..." : "Disable 2FA"}
                </Button>
              </div>
            ) : setupStep === 0 ? (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                  <h3 className="text-sm font-medium mb-2">Why use two-factor authentication?</h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    Two-factor authentication adds an extra layer of security to your account by requiring:
                  </p>
                  <ul className="text-xs space-y-2">
                    <li>• Something you know (your password)</li>
                    <li>• Something you have (your phone or authenticator app)</li>
                  </ul>
                </div>

                <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-md">
                  <Smartphone className="h-8 w-8 text-[#0A4DA6]" />
                  <div>
                    <h3 className="text-sm font-medium">You'll need an authenticator app</h3>
                    <p className="text-xs text-muted-foreground">
                      Download Google Authenticator, Authy, or Microsoft Authenticator
                    </p>
                  </div>
                </div>

                <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" onClick={startSetup} disabled={isLoading}>
                  {isLoading ? "Loading..." : "Set Up Two-Factor Authentication"}
                </Button>
              </div>
            ) : setupStep === 1 ? (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                  <h3 className="text-sm font-medium mb-2">Step 1: Scan QR Code</h3>
                  <p className="text-xs text-muted-foreground mb-4">Scan this QR code with your authenticator app</p>

                  <div className="flex justify-center mb-4">
                    {qrCodeUri && (
                      <div className="p-2 bg-white border rounded-md">
                        <img
                          src={`https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(qrCodeUri)}`}
                          alt="QR Code"
                          width={200}
                          height={200}
                        />
                      </div>
                    )}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    <p className="font-medium mb-1">Manual entry:</p>
                    <p className="font-mono bg-gray-100 p-2 rounded break-all">{secret}</p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                  <h3 className="text-sm font-medium mb-2">Step 2: Enter Verification Code</h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    Enter the 6-digit code from your authenticator app
                  </p>

                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="000000"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                      maxLength={6}
                      className="text-center font-mono text-lg"
                    />
                  </div>
                </div>

                <Button
                  className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90"
                  onClick={verifyAndEnable}
                  disabled={isLoading || verificationCode.length !== 6}
                >
                  {isLoading ? "Verifying..." : "Verify and Enable"}
                </Button>

                <Button variant="outline" className="w-full" onClick={() => setSetupStep(0)} disabled={isLoading}>
                  Cancel
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-green-50 border border-green-200 rounded-md flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-green-500" />
                  <p className="text-sm text-green-800">Two-factor authentication has been enabled successfully</p>
                </div>

                <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                  <h3 className="text-sm font-medium mb-2">What's Next?</h3>
                  <p className="text-xs text-muted-foreground mb-2">Now that 2FA is enabled:</p>
                  <ul className="text-xs space-y-2">
                    <li>• You'll need to enter a verification code when signing in</li>
                    <li>• Keep your authenticator app safe and accessible</li>
                    <li>• Consider saving backup codes in a secure location</li>
                  </ul>
                </div>

                <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                  <Link href="/account/security">Return to Security Settings</Link>
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-muted-foreground">
              <Link href="/account/security" className="text-[#0A4DA6] hover:underline">
                Back to Security Settings
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
