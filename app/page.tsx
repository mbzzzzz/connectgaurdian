import { NetworkDashboard } from "@/components/network-dashboard"
import { SmartSupportCenter } from "@/components/smart-support-center"
import { AccountGuardian } from "@/components/account-guardian"
import { BusinessPortal } from "@/components/business-portal"
import { MobileFeatures } from "@/components/mobile-features"
import { ParticleNetwork } from "@/components/particle-network"
import { AlertBar } from "@/components/alert-bar"
import { Button } from "@/components/ui/button"
import { QrCodeIcon, SearchIcon } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticleNetwork />
        </div>
        <AlertBar message="All systems operational - No outages detected" status="success" />
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Your Digital Lifeline – <span className="text-[#0A4DA6]">Guarded 24/7</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Intelligent network monitoring and support to keep your connection secure, fast, and reliable around the
              clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                <Link href="/diagnose">
                  <SearchIcon className="mr-2 h-4 w-4" />
                  Diagnose Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/mobile-app">
                  <QrCodeIcon className="mr-2 h-4 w-4" />
                  Mobile App
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Network Dashboard */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Real-Time Network Dashboard</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Monitor your network health, track outages, and view security threats in real-time.
            </p>
          </div>
          <NetworkDashboard />
        </div>
      </section>

      {/* Smart Support Center */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Smart Support Center</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get instant answers to your questions with our AI-powered support system.
            </p>
          </div>
          <SmartSupportCenter />
        </div>
      </section>

      {/* Account Guardian */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Account Guardian</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Manage your account, track data usage, and secure your connected devices.
            </p>
          </div>
          <AccountGuardian />
        </div>
      </section>

      {/* Business Portal */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Business Portal</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade tools for managing multi-location networks and SLA compliance.
            </p>
          </div>
          <BusinessPortal />
        </div>
      </section>

      {/* Mobile Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mobile Optimization</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access powerful network tools on the go with our mobile-optimized features.
            </p>
          </div>
          <MobileFeatures />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A4DA6] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Connection?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust ConnectGuardian to protect their digital lifeline.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-[#0A4DA6] hover:bg-gray-100" asChild>
            <Link href="/get-started">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
