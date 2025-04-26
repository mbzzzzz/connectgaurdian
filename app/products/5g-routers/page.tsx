import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FiberOpticBackground } from "@/components/fiber-optic-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FiveGRoutersPage() {
  const routers = [
    {
      id: "cg-5g-pro",
      name: "CG-5G Pro",
      subtitle: "Premium 5G Router with WiFi 6",
      price: 199.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "5G connectivity with speeds up to 2 Gbps",
        "WiFi 6 technology for optimal wireless performance",
        "4 Gigabit Ethernet ports",
        "Advanced security features",
        "Dual-SIM support",
      ],
      tag: { text: "NEW", color: "bg-[#0A4DA6]" },
    },
    {
      id: "cg-5g-lite",
      name: "CG-5G Lite",
      subtitle: "Mid-Range 5G Router",
      price: 149.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "5G connectivity with speeds up to 1 Gbps",
        "WiFi 5 technology",
        "2 Gigabit Ethernet ports",
        "Basic security features",
        "Single-SIM support",
      ],
      tag: { text: "POPULAR", color: "bg-amber-500" },
    },
    {
      id: "cg-5g-travel",
      name: "CG-5G Travel",
      subtitle: "Portable 5G Router",
      price: 129.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "5G connectivity with speeds up to 800 Mbps",
        "WiFi 5 technology",
        "1 Gigabit Ethernet port",
        "Built-in battery with 8-hour life",
        "Compact design for travel",
      ],
    },
    {
      id: "cg-5g-business",
      name: "CG-5G Business",
      subtitle: "Enterprise 5G Router",
      price: 299.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "5G connectivity with speeds up to 2.5 Gbps",
        "WiFi 6E technology",
        "8 Gigabit Ethernet ports",
        "Advanced security with VPN support",
        "Multi-SIM failover support",
      ],
      tag: { text: "BUSINESS", color: "bg-[#E53935]" },
    },
  ]

  return (
    <div className="relative min-h-screen">
      <FiberOpticBackground />

      <div className="container py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">5G Routers</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the next generation of connectivity with our high-performance 5G routers.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All 5G Routers</TabsTrigger>
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="travel">Travel</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {routers.map((router) => (
              <Card key={router.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={router.image || "/placeholder.svg"}
                    alt={router.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  {router.tag && (
                    <div
                      className={`absolute top-2 right-2 ${router.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                    >
                      {router.tag.text}
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{router.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{router.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {router.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl font-bold text-[#0A4DA6]">${router.price}</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                    <Link href={`/products/5g-routers/${router.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="home" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {routers
              .filter((router) => router.id === "cg-5g-pro" || router.id === "cg-5g-lite")
              .map((router) => (
                <Card key={router.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={router.image || "/placeholder.svg"}
                      alt={router.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {router.tag && (
                      <div
                        className={`absolute top-2 right-2 ${router.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                      >
                        {router.tag.text}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{router.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{router.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {router.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xl font-bold text-[#0A4DA6]">${router.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                      <Link href={`/products/5g-routers/${router.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="travel" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {routers
              .filter((router) => router.id === "cg-5g-travel")
              .map((router) => (
                <Card key={router.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={router.image || "/placeholder.svg"}
                      alt={router.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {router.tag && (
                      <div
                        className={`absolute top-2 right-2 ${router.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                      >
                        {router.tag.text}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{router.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{router.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {router.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xl font-bold text-[#0A4DA6]">${router.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                      <Link href={`/products/5g-routers/${router.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="business" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {routers
              .filter((router) => router.id === "cg-5g-business")
              .map((router) => (
                <Card key={router.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={router.image || "/placeholder.svg"}
                      alt={router.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {router.tag && (
                      <div
                        className={`absolute top-2 right-2 ${router.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                      >
                        {router.tag.text}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{router.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{router.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {router.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xl font-bold text-[#0A4DA6]">${router.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                      <Link href={`/products/5g-routers/${router.id}`}>
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
              <h2 className="text-2xl font-bold mb-4">Why Choose 5G Connectivity?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Ultra-Fast Speeds</h3>
                    <p className="text-sm text-muted-foreground">
                      Experience download speeds up to 20 times faster than 4G LTE.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Lower Latency</h3>
                    <p className="text-sm text-muted-foreground">
                      Enjoy near-instantaneous response times for gaming, video calls, and more.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Greater Capacity</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect more devices simultaneously without sacrificing performance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Future-Proof Technology</h3>
                    <p className="text-sm text-muted-foreground">
                      Stay ahead with the latest connectivity standard that will power the next decade.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="5G Technology"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Not Sure Which 5G Router Is Right For You?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our experts can help you select the perfect 5G router based on your coverage area, number of devices, and
            usage patterns.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/support/guides/choosing-5g-router">Read Buying Guide</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
