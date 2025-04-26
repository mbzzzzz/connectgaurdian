import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FiberOpticBackground } from "@/components/fiber-optic-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WiFiReceiversPage() {
  const receivers = [
    {
      id: "cg-range-pro",
      name: "CG-Range Pro",
      subtitle: "Long-Range WiFi Receiver",
      price: 79.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "Extends WiFi range up to 2,500 sq ft",
        "Dual-band technology (2.4GHz & 5GHz)",
        "4 high-gain antennas",
        "Easy setup with WPS button",
        "Compatible with all WiFi routers",
      ],
      tag: { text: "BEST SELLER", color: "bg-[#00C853]" },
    },
    {
      id: "cg-range-lite",
      name: "CG-Range Lite",
      subtitle: "Compact WiFi Receiver",
      price: 49.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "Extends WiFi range up to 1,500 sq ft",
        "Single-band technology (2.4GHz)",
        "2 antennas",
        "Plug-and-play setup",
        "Wall-outlet design",
      ],
      tag: { text: "POPULAR", color: "bg-amber-500" },
    },
    {
      id: "cg-range-max",
      name: "CG-Range Max",
      subtitle: "Maximum Coverage WiFi Receiver",
      price: 129.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "Extends WiFi range up to 4,000 sq ft",
        "Tri-band technology (2.4GHz, 5GHz & 6GHz)",
        "6 high-gain antennas",
        "Advanced beamforming technology",
        "Mesh network compatible",
      ],
      tag: { text: "NEW", color: "bg-[#0A4DA6]" },
    },
    {
      id: "cg-range-outdoor",
      name: "CG-Range Outdoor",
      subtitle: "Weatherproof WiFi Receiver",
      price: 149.99,
      image: "/placeholder.svg?height=200&width=300",
      features: [
        "Extends WiFi range up to 3,000 sq ft outdoors",
        "Dual-band technology (2.4GHz & 5GHz)",
        "IP65 weatherproof rating",
        "Directional antenna for focused coverage",
        "PoE (Power over Ethernet) support",
      ],
    },
  ]

  return (
    <div className="relative min-h-screen">
      <FiberOpticBackground />

      <div className="container py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">WiFi Receivers</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Extend your WiFi coverage and eliminate dead zones with our powerful range of WiFi receivers.
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Receivers</TabsTrigger>
              <TabsTrigger value="indoor">Indoor</TabsTrigger>
              <TabsTrigger value="outdoor">Outdoor</TabsTrigger>
              <TabsTrigger value="mesh">Mesh Compatible</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {receivers.map((receiver) => (
              <Card key={receiver.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={receiver.image || "/placeholder.svg"}
                    alt={receiver.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  {receiver.tag && (
                    <div
                      className={`absolute top-2 right-2 ${receiver.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                    >
                      {receiver.tag.text}
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{receiver.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{receiver.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {receiver.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl font-bold text-[#0A4DA6]">${receiver.price}</div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                    <Link href={`/products/wifi-receivers/${receiver.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="indoor" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {receivers
              .filter((receiver) => receiver.id !== "cg-range-outdoor")
              .map((receiver) => (
                <Card key={receiver.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={receiver.image || "/placeholder.svg"}
                      alt={receiver.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {receiver.tag && (
                      <div
                        className={`absolute top-2 right-2 ${receiver.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                      >
                        {receiver.tag.text}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{receiver.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{receiver.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {receiver.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xl font-bold text-[#0A4DA6]">${receiver.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                      <Link href={`/products/wifi-receivers/${receiver.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="outdoor" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {receivers
              .filter((receiver) => receiver.id === "cg-range-outdoor")
              .map((receiver) => (
                <Card key={receiver.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={receiver.image || "/placeholder.svg"}
                      alt={receiver.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {receiver.tag && (
                      <div
                        className={`absolute top-2 right-2 ${receiver.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                      >
                        {receiver.tag.text}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{receiver.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{receiver.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {receiver.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xl font-bold text-[#0A4DA6]">${receiver.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                      <Link href={`/products/wifi-receivers/${receiver.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="mesh" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {receivers
              .filter((receiver) => receiver.id === "cg-range-max")
              .map((receiver) => (
                <Card key={receiver.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={receiver.image || "/placeholder.svg"}
                      alt={receiver.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    {receiver.tag && (
                      <div
                        className={`absolute top-2 right-2 ${receiver.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                      >
                        {receiver.tag.text}
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{receiver.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{receiver.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {receiver.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#00C853] mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xl font-bold text-[#0A4DA6]">${receiver.price}</div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                      <Link href={`/products/wifi-receivers/${receiver.id}`}>
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
              <h2 className="text-2xl font-bold mb-4">Eliminate WiFi Dead Zones</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium">Extended Coverage</h3>
                    <p className="text-sm text-muted-foreground">
                      Boost your WiFi signal to reach every corner of your home or office.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium">Faster Speeds</h3>
                    <p className="text-sm text-muted-foreground">
                      Maintain high-speed connections even at the edge of your network.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium">Simple Setup</h3>
                    <p className="text-sm text-muted-foreground">
                      Easy installation with no technical expertise required.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#0A4DA6] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium">Universal Compatibility</h3>
                    <p className="text-sm text-muted-foreground">Works with any router or internet service provider.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="WiFi Coverage Map"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Not Sure Which WiFi Receiver Is Right For You?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our experts can help you select the perfect WiFi receiver based on your home size, construction, and
            connectivity needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/support/guides/choosing-wifi-receiver">Read Buying Guide</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
