import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FiberOpticBackground } from "@/components/fiber-optic-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ModemsPage() {
  const modems = [
    {
      id: "cg-5000",
      name: "CG-5000",
      subtitle: "Premium DOCSIS 3.1 Modem",
      price: 129.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "DOCSIS 3.1 technology",
        "Up to 2.5 Gbps download speeds",
        "Dual-band WiFi 6",
        "4 Gigabit Ethernet ports",
        "Advanced security features",
      ],
      tag: { text: "BEST SELLER", color: "bg-[#00C853]" },
    },
    {
      id: "cg-3000",
      name: "CG-3000",
      subtitle: "Mid-Range DOCSIS 3.0 Modem",
      price: 89.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "DOCSIS 3.0 technology",
        "Up to 1 Gbps download speeds",
        "Dual-band WiFi 5",
        "2 Gigabit Ethernet ports",
        "Basic security features",
      ],
      tag: { text: "POPULAR", color: "bg-amber-500" },
    },
    {
      id: "cg-1000",
      name: "CG-1000",
      subtitle: "Entry-Level DOCSIS 3.0 Modem",
      price: 59.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "DOCSIS 3.0 technology",
        "Up to 400 Mbps download speeds",
        "Single-band WiFi 5",
        "1 Gigabit Ethernet port",
        "Basic security features",
      ],
    },
    {
      id: "cg-fiber",
      name: "CG-Fiber",
      subtitle: "Fiber Optic Modem",
      price: 149.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "Fiber optic connectivity",
        "Up to 10 Gbps download speeds",
        "Tri-band WiFi 6E",
        "4 Gigabit Ethernet ports",
        "Advanced security features",
      ],
      tag: { text: "NEW", color: "bg-[#0A4DA6]" },
    },
  ]

  return (
    <div className="relative min-h-screen">
      <FiberOpticBackground />

      <div className="container py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">High-Performance Modems</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our range of cutting-edge modems designed for reliable, high-speed internet connectivity.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Modems</TabsTrigger>
              <TabsTrigger value="docsis">DOCSIS</TabsTrigger>
              <TabsTrigger value="fiber">Fiber</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modems.map((modem) => (
              <Card key={modem.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={modem.image || "/placeholder.svg"}
                    alt={modem.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  {modem.tag && (
                    <div
                      className={`absolute top-2 right-2 ${modem.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                    >
                      {modem.tag.text}
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{modem.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{modem.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {modem.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl font-bold text-[#0A4DA6]">${modem.price}</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                    <Link href={`/products/modems/${modem.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="docsis" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modems
              .filter((modem) => modem.id !== "cg-fiber")
              .map((modem) => (
                <Card key={modem.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={modem.image || "/placeholder.svg"}
                      alt={modem.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {modem.tag && (
                      <div
                        className={`absolute top-2 right-2 ${modem.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                      >
                        {modem.tag.text}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{modem.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{modem.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {modem.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xl font-bold text-[#0A4DA6]">${modem.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                      <Link href={`/products/modems/${modem.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="fiber" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modems
              .filter((modem) => modem.id === "cg-fiber")
              .map((modem) => (
                <Card key={modem.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={modem.image || "/placeholder.svg"}
                      alt={modem.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {modem.tag && (
                      <div
                        className={`absolute top-2 right-2 ${modem.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                      >
                        {modem.tag.text}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{modem.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{modem.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {modem.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xl font-bold text-[#0A4DA6]">${modem.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                      <Link href={`/products/modems/${modem.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="business" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-full flex flex-col items-center justify-center p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Business Modems Coming Soon</h3>
              <p className="text-muted-foreground mb-4">
                Our enterprise-grade modems for business customers are currently in development.
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Sales for Early Access</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-[#0A4DA6]/10 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Choose ConnectGuardian Modems?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Superior Performance</h3>
                    <p className="text-sm text-muted-foreground">
                      Our modems deliver consistently fast speeds even during peak usage times.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Advanced Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Built-in security features protect your network from threats and unauthorized access.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Smart Diagnostics</h3>
                    <p className="text-sm text-muted-foreground">
                      Integrated with the ConnectGuardian app for real-time monitoring and troubleshooting.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">2-Year Warranty</h3>
                    <p className="text-sm text-muted-foreground">
                      All our modems come with a comprehensive 2-year warranty and lifetime support.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="ConnectGuardian Modem Technology"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our experts can help you select the right modem for your specific needs and internet service provider.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/support/guides/choosing-modem">Read Buying Guide</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
