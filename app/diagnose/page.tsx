"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, ArrowRight, CheckCircle, Laptop, RefreshCw, Router, Wifi, XCircle } from "lucide-react"
import Link from "next/link"

export default function DiagnosePage() {
  const [step, setStep] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [results, setResults] = useState<{
    router: "pass" | "fail" | "warning" | null
    connection: "pass" | "fail" | "warning" | null
    speed: "pass" | "fail" | "warning" | null
    device: "pass" | "fail" | "warning" | null
  }>({
    router: null,
    connection: null,
    speed: null,
    device: null,
  })

  const startDiagnostic = () => {
    setIsRunning(true)
    setStep(1)
    setResults({
      router: null,
      connection: null,
      speed: null,
      device: null,
    })

    // Simulate router check
    setTimeout(() => {
      setResults((prev) => ({ ...prev, router: "pass" }))
      setStep(2)

      // Simulate connection check
      setTimeout(() => {
        setResults((prev) => ({ ...prev, connection: "pass" }))
        setStep(3)

        // Simulate speed check
        setTimeout(() => {
          setResults((prev) => ({ ...prev, speed: "warning" }))
          setStep(4)

          // Simulate device check
          setTimeout(() => {
            setResults((prev) => ({ ...prev, device: "pass" }))
            setStep(5)
            setIsRunning(false)
          }, 3000)
        }, 4000)
      }, 3000)
    }, 2000)
  }

  const getStatusIcon = (status: "pass" | "fail" | "warning" | null) => {
    if (status === "pass") return <CheckCircle className="h-5 w-5 text-[#00C853]" />
    if (status === "fail") return <XCircle className="h-5 w-5 text-[#E53935]" />
    if (status === "warning") return <AlertCircle className="h-5 w-5 text-amber-500" />
    return <RefreshCw className="h-5 w-5 animate-spin" />
  }

  return (
    <div className="py-10">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Network Diagnostic Tool</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Identify and resolve connection issues with our interactive troubleshooter
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Diagnostic Progress</CardTitle>
            <CardDescription>
              {isRunning
                ? "Running comprehensive network tests..."
                : step === 0
                  ? "Click Start to begin the diagnostic process"
                  : "Diagnostic complete. Review the results below."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{step === 0 ? "0%" : step === 5 ? "100%" : `${step * 20}%`}</span>
                </div>
                <Progress value={step * 20} className="h-2" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Router className="h-8 w-8 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md text-[#0A4DA6]" />
                    <div>
                      <div className="font-medium">Router Check</div>
                      <div className="text-xs text-muted-foreground">Verifying router connectivity</div>
                    </div>
                  </div>
                  <div>
                    {step >= 1 ? (
                      getStatusIcon(results.router)
                    ) : (
                      <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Wifi className="h-8 w-8 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md text-[#0A4DA6]" />
                    <div>
                      <div className="font-medium">Internet Connection</div>
                      <div className="text-xs text-muted-foreground">Testing internet connectivity</div>
                    </div>
                  </div>
                  <div>
                    {step >= 2 ? (
                      getStatusIcon(results.connection)
                    ) : (
                      <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="flex items-center gap-3">
                    <RefreshCw className="h-8 w-8 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md text-[#0A4DA6]" />
                    <div>
                      <div className="font-medium">Speed Test</div>
                      <div className="text-xs text-muted-foreground">Measuring upload and download speeds</div>
                    </div>
                  </div>
                  <div>
                    {step >= 3 ? (
                      getStatusIcon(results.speed)
                    ) : (
                      <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Laptop className="h-8 w-8 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md text-[#0A4DA6]" />
                    <div>
                      <div className="font-medium">Device Check</div>
                      <div className="text-xs text-muted-foreground">Checking device configuration</div>
                    </div>
                  </div>
                  <div>
                    {step >= 4 ? (
                      getStatusIcon(results.device)
                    ) : (
                      <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={startDiagnostic} disabled={isRunning} className="bg-[#0A4DA6] hover:bg-[#0A4DA6]/90">
              {step === 0 ? "Start Diagnostic" : step === 5 ? "Run Again" : "Running..."}
            </Button>
          </CardFooter>
        </Card>

        {step === 5 && (
          <Card>
            <CardHeader>
              <CardTitle>Diagnostic Results</CardTitle>
              <CardDescription>We've identified the following issues with your connection</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="issues">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="issues">Issues Found</TabsTrigger>
                  <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                  <TabsTrigger value="details">Detailed Report</TabsTrigger>
                </TabsList>
                <TabsContent value="issues" className="space-y-4 pt-4">
                  <div className="p-4 border border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-700 dark:text-amber-400">Slow Download Speed</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Your download speed is 45 Mbps, which is below your plan's advertised speed of 100 Mbps.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="recommendations" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <h3 className="font-medium mb-2">1. Restart Your Router</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Unplug your router, wait 30 seconds, and plug it back in. This can resolve many common
                        connectivity issues.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/support/guides/router-restart">
                          View Guide
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <h3 className="font-medium mb-2">2. Check for Interference</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Move your router away from electronic devices that may cause interference, such as microwaves or
                        cordless phones.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/support/guides/interference">
                          View Guide
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <h3 className="font-medium mb-2">3. Contact Support</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        If the issue persists, our support team can help diagnose and resolve the problem.
                      </p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/contact">
                          Contact Support
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="details" className="pt-4">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Router Status</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Model</span>
                          <span>ConnectGuardian CG-1000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Firmware</span>
                          <span>v2.3.4</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Uptime</span>
                          <span>3 days, 7 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Signal Strength</span>
                          <span>Excellent</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Connection Details</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Connection Type</span>
                          <span>Fiber</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">IP Address</span>
                          <span>192.168.1.1</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">DNS</span>
                          <span>8.8.8.8, 8.8.4.4</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Packet Loss</span>
                          <span>0%</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Speed Test Results</h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Download Speed</span>
                          <span className="text-amber-500">45 Mbps</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Upload Speed</span>
                          <span className="text-[#00C853]">25 Mbps</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Latency</span>
                          <span className="text-[#00C853]">15 ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Jitter</span>
                          <span className="text-[#00C853]">3 ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
