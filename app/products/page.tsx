import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FiberOpticBackground } from "@/components/fiber-optic-background"
import { ArrowRight, Router, Wifi, Smartphone, Radio } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
  const productCategories = [
    {
      title: "Modems",
      description: "High-speed modems for reliable internet connectivity",
      icon: <Router className="h-6 w-6 text-[#0A4DA6]" />,
      link: "/products/modems",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "5G Routers",
      description: "Next-generation routers with ultra-fast 5G connectivity",
      icon: <Wifi className="h-6 w-6 text-[#0A4DA6]" />,
      link: "/products/5g-routers",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "WiFi Dongles",
      description: "Portable WiFi solutions for on-the-go connectivity",
      icon: <Smartphone className="h-6 w-6 text-[#0A4DA6]" />,
      link: "/products/wifi-dongles",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "WiFi Receivers",
      description: "Extend your WiFi range with powerful receivers",
      icon: <Radio className="h-6 w-6 text-[#0A4DA6]" />,
      link: "/products/wifi-receivers",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="relative min-h-screen">
      <FiberOpticBackground />

      <div className="container py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">ConnectGuardian Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our range of high-performance networking equipment designed to keep you connected securely and
            reliably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {productCategories.map((category) => (
            <Card key={category.title} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 rounded-full p-2">{category.icon}</div>
              </div>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-[#0A4DA6] group-hover:text-white transition-colors"
                  asChild
                >
                  <Link href={category.link}>
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="bg-[#0A4DA6]/10 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Choose ConnectGuardian Products?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Enterprise-Grade Security</h3>
                    <p className="text-sm text-muted-foreground">
                      All our products feature advanced security protocols to protect your network from threats.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Seamless Integration</h3>
                    <p className="text-sm text-muted-foreground">
                      Our products work together seamlessly with the ConnectGuardian app and services.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Superior Performance</h3>
                    <p className="text-sm text-muted-foreground">
                      Engineered for maximum speed, reliability, and coverage in any environment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">24/7 Technical Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Our expert support team is available around the clock to help with any issues.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="ConnectGuardian Products"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most popular networking solutions trusted by thousands of customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="CG-5000 Modem"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-[#00C853] text-white text-xs font-bold px-2 py-1 rounded">
                BEST SELLER
              </div>
            </div>
            <CardHeader>
              <CardTitle>CG-5000 Modem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our flagship modem with DOCSIS 3.1 technology for gigabit speeds.
              </p>
              <div className="flex justify-between text-sm mb-4">
                <span className="font-medium">Price:</span>
                <span className="font-bold">$129.99</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                <Link href="/products/modems/cg-5000">View Details</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="CG-5G Pro Router"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-[#0A4DA6] text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </div>
            </div>
            <CardHeader>
              <CardTitle>CG-5G Pro Router</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Next-generation 5G router with WiFi 6 for ultra-fast wireless connectivity.
              </p>
              <div className="flex justify-between text-sm mb-4">
                <span className="font-medium">Price:</span>
                <span className="font-bold">$199.99</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                <Link href="/products/5g-routers/cg-5g-pro">View Details</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="CG-Mini Dongle"
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                POPULAR
              </div>
            </div>
            <CardHeader>
              <CardTitle>CG-Mini Dongle</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Compact WiFi dongle for portable connectivity with 4G LTE support.
              </p>
              <div className="flex justify-between text-sm mb-4">
                <span className="font-medium">Price:</span>
                <span className="font-bold">$59.99</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                <Link href="/products/wifi-dongles/cg-mini">View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
