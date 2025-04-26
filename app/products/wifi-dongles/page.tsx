import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FiberOpticBackground } from "@/components/fiber-optic-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WiFiDonglesPage() {
  const dongles = [
    {
      id: "cg-mini",
      name: "CG-Mini Dongle",
      subtitle: "Compact 4G LTE WiFi Dongle",
      price: 59.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "4G LTE connectivity with speeds up to 150 Mbps",
        "Compact and portable design",
        "Up to 10 connected devices",
        "4-hour battery life",
        "Plug-and-play setup",
      ],
      tag: { text: "POPULAR", color: "bg-amber-500" },
    },
    {
      id: "cg-ultra",
      name: "CG-Ultra Dongle",
      subtitle: "High-Performance 4G/5G WiFi Dongle",
      price: 89.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "4G/5G connectivity with speeds up to 600 Mbps",
        "Sleek and durable design",
        "Up to 15 connected devices",
        "6-hour battery life",
        "Advanced security features",
      ],
      tag: { text: "BEST SELLER", color: "bg-[#00C853]" },
    },
    {
      id: "cg-nano",
      name: "CG-Nano Dongle",
      subtitle: "Ultra-Compact 4G WiFi Dongle",
      price: 39.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "4G connectivity with speeds up to 100 Mbps",
        "Ultra-compact design",
        "Up to 5 connected devices",
        "3-hour battery life",
        "Simple one-button operation",
      ],
    },
    {
      id: "cg-pro-dongle",
      name: "CG-Pro Dongle",
      subtitle: "Professional 5G WiFi Dongle",
      price: 119.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "5G connectivity with speeds up to 1 Gbps",
        "Rugged professional design",
        "Up to 20 connected devices",
        "8-hour battery life",
        "Enterprise-grade security",
      ],
      tag: { text: "NEW", color: "bg-[#0A4DA6]" },
    },
  ]

  return (
    <div className="relative min-h-screen">
      <FiberOpticBackground />

      <div className="container py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">WiFi Dongles</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected on the go with our portable WiFi dongles, offering reliable internet access anywhere.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Dongles</TabsTrigger>
              <TabsTrigger value="4g">4G</TabsTrigger>
              <TabsTrigger value="5g">5G</TabsTrigger>
              <TabsTrigger value="travel">Travel</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dongles.map((dongle) => (
              <Card key={dongle.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={dongle.image || "/placeholder.svg"}
                    alt={dongle.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  {dongle.tag && (
                    <div
                      className={`absolute top-2 right-2 ${dongle.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                    >
                      {dongle.tag.text}
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{dongle.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{dongle.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {dongle.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl font-bold text-[#0A4DA6]">${dongle.price}</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                    <Link href={`/products/wifi-dongles/${dongle.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="4g" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dongles
              .filter((dongle) => dongle.id === "cg-mini" || dongle.id === "cg-nano")
              .map((dongle) => (
                <Card key={dongle.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={dongle.image || "/placeholder.svg"}
                      alt={dongle.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {dongle.tag && (
                      <div
                        className={`absolute top-2 right-2 ${dongle.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                      >
                        {dongle.tag.text}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{dongle.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{dongle.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {dongle.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xl font-bold text-[#0A4DA6]">${dongle.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                      <Link href={`/products/wifi-dongles/${dongle.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="5g" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dongles
              .filter((dongle) => dongle.id === "cg-ultra" || dongle.id === "cg-pro-dongle")
              .map((dongle) => (
                <Card key={dongle.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={dongle.image || "/placeholder.svg"}
                      alt={dongle.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {dongle.tag && (
                      <div
                        className={`absolute top-2 right-2 ${dongle.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                      >
                        {dongle.tag.text}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{dongle.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{dongle.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {dongle.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xl font-bold text-[#0A4DA6]">${dongle.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                      <Link href={`/products/wifi-dongles/${dongle.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="travel" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dongles
              .filter((dongle) => dongle.id === "cg-mini" || dongle.id === "cg-nano" || dongle.id === "cg-ultra")
              .map((dongle) => (
                <Card key={dongle.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={dongle.image || "/placeholder.svg"}
                      alt={dongle.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {dongle.tag && (
                      <div
                        className={`absolute top-2 right-2 ${dongle.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                      >
                        {dongle.tag.text}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{dongle.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{dongle.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {dongle.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xl font-bold text-[#0A4DA6]">${dongle.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                      <Link href={`/products/wifi-dongles/${dongle.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </TabsContent>
        </Tabs>

        <div className="bg-[#0A4DA6]/10 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Choose a WiFi Dongle?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Portable Connectivity</h3>
                    <p className="text-sm text-muted-foreground">
                      Take your internet connection with you anywhere you go.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">No Installation Required</h3>
                    <p className="text-sm text-muted-foreground">
                      Simply turn on and connect - no complex setup or installation needed.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Multiple Device Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect multiple devices simultaneously to a single dongle.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Backup Internet Solution</h3>
                    <p className="text-sm text-muted-foreground">
                      Keep a dongle as a backup for when your primary internet connection fails.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="WiFi Dongle Usage"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Perfect for Travelers and Remote Workers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our WiFi dongles are designed for people on the move who need reliable internet access wherever they go.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/support/guides/choosing-wifi-dongle">Read Buying Guide</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
