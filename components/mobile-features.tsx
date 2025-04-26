import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Smartphone, Zap } from "lucide-react"
import Image from "next/image"

export function MobileFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5 text-[#0A4DA6]" />
            One-Tap Reset
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-80 mb-6">
              <Image
                src="/placeholder.svg?height=320&width=160"
                alt="Mobile App Screenshot"
                width={160}
                height={320}
                className="rounded-lg border"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" className="bg-[#E53935] hover:bg-[#E53935]/90">
                  <Zap className="mr-2 h-4 w-4" />
                  Reset Router
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Instantly reset your router with a single tap when you're experiencing connection issues.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-[#0A4DA6]" />
            AR Cable Tracer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-80 mb-6">
              <Image
                src="/placeholder.svg?height=320&width=160"
                alt="AR Cable Tracer"
                width={160}
                height={320}
                className="rounded-lg border"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
                <div className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-lg text-xs">
                  Point camera at cables to identify
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Use augmented reality to identify cables and connections behind your router or modem.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-[#0A4DA6]" />
            Offline Guides
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-80 mb-6">
              <Image
                src="/placeholder.svg?height=320&width=160"
                alt="Offline Guides"
                width={160}
                height={320}
                className="rounded-lg border"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 bg-white/90 dark:bg-gray-900/90 rounded-lg w-32">
                  <h4 className="text-xs font-medium mb-2">Troubleshooting</h4>
                  <div className="space-y-1">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Access troubleshooting guides even when you're offline, so you can fix issues without an internet
              connection.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
