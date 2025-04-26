import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MobileFeatures } from "@/components/mobile-features"
import { AppleIcon, CheckCircle, Download, QrCode } from "lucide-react"
import Image from "next/image"

export default function MobileAppPage() {
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">ConnectGuardian Mobile App</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take control of your network on the go with our powerful mobile application
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Network in Your Pocket</h2>
            <p className="text-muted-foreground mb-6">
              The ConnectGuardian mobile app gives you complete control over your network from anywhere. Monitor your
              connection, troubleshoot issues, and manage your devices with just a few taps.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#00C853] mt-0.5" />
                <div>
                  <h3 className="font-medium">Real-Time Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    View your network status, bandwidth usage, and connected devices in real-time.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#00C853] mt-0.5" />
                <div>
                  <h3 className="font-medium">One-Tap Troubleshooting</h3>
                  <p className="text-sm text-muted-foreground">
                    Diagnose and fix common network issues with a single tap.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#00C853] mt-0.5" />
                <div>
                  <h3 className="font-medium">Device Management</h3>
                  <p className="text-sm text-muted-foreground">
                    View and manage all devices connected to your network.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#00C853] mt-0.5" />
                <div>
                  <h3 className="font-medium">Security Alerts</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive instant notifications about potential security threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-[500px] bg-gray-100 dark:bg-gray-800 rounded-3xl overflow-hidden border-8 border-gray-300 dark:border-gray-700">
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-300 dark:bg-gray-700 flex justify-center items-center">
                <div className="w-20 h-4 bg-gray-400 dark:bg-gray-600 rounded-b-xl"></div>
              </div>
              <div className="pt-6 h-full">
                <Image
                  src="/placeholder.svg?height=500&width=300"
                  alt="ConnectGuardian Mobile App"
                  width={300}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0A4DA6] text-white rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Download the App</h2>
              <p className="mb-6 opacity-90">
                Get the ConnectGuardian mobile app on your device and take control of your network from anywhere.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="lg" className="bg-black text-white hover:bg-black/90">
                  <AppleIcon className="mr-2 h-5 w-5" />
                  App Store
                </Button>
                <Button variant="secondary" size="lg" className="bg-black text-white hover:bg-black/90">
                  <Download className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Card className="w-full max-w-xs">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <QrCode className="h-5 w-5" />
                    Scan to Download
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="bg-white p-4 rounded-lg">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="QR Code"
                      width={200}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Key Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Powerful tools to manage your network on the go</p>
          </div>
          <MobileFeatures />
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">What Our Users Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from people who use the ConnectGuardian mobile app
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#0A4DA6] flex items-center justify-center text-white text-sm font-bold">
                    JD
                  </div>
                  <div>
                    <div className="font-medium">John D.</div>
                    <div className="text-xs text-muted-foreground">Premium User</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "The one-tap router reset feature has saved me so many times. No more crawling under the desk to
                  unplug the router!"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#0A4DA6] flex items-center justify-center text-white text-sm font-bold">
                    SM
                  </div>
                  <div>
                    <div className="font-medium">Sarah M.</div>
                    <div className="text-xs text-muted-foreground">Business User</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Being able to monitor all our office locations from a single app is incredibly convenient. Great for
                  IT management!"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-[#0A4DA6] flex items-center justify-center text-white text-sm font-bold">
                    RK
                  </div>
                  <div>
                    <div className="font-medium">Robert K.</div>
                    <div className="text-xs text-muted-foreground">Standard User</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "The security alerts have helped me catch unauthorized devices on my network multiple times. Great
                  peace of mind!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
