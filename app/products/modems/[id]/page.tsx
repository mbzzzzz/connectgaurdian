import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FiberOpticBackground } from "@/components/fiber-optic-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ShoppingCart, Download, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const modems = [
  {
    id: "cg-5000",
    name: "CG-5000",
    subtitle: "Premium DOCSIS 3.1 Modem",
    price: 129.99,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "The CG-5000 is our flagship modem, featuring DOCSIS 3.1 technology for blazing-fast internet speeds up to 2.5 Gbps. With advanced security features and seamless integration with the ConnectGuardian app, it provides a reliable and secure connection for all your devices.",
    features: [
      "DOCSIS 3.1 technology for gigabit speeds",
      "Up to 2.5 Gbps download speeds",
      "Dual-band WiFi 6 for optimal wireless performance",
      "4 Gigabit Ethernet ports for wired connections",
      "Advanced security features with real-time threat detection",
      "Compatible with all major cable internet providers",
      "Easy setup with the ConnectGuardian mobile app",
      "Energy-efficient design with power-saving modes",
    ],
    specifications: {
      dimensions: "8.5 x 7.2 x 2.4 inches",
      weight: "1.8 lbs",
      ports: "4x Gigabit Ethernet, 1x USB 3.0",
      wifi: "Dual-band WiFi 6 (802.11ax)",
      processor: "1.5 GHz quad-core processor",
      memory: "512 MB RAM",
      compatibility: "All major cable internet providers",
      warranty: "2-year limited warranty",
    },
    inTheBox: ["CG-5000 Modem", "Power adapter", "Ethernet cable", "Quick start guide", "Warranty information"],
    reviews: {
      average: 4.8,
      count: 256,
      breakdown: {
        5: 75,
        4: 20,
        3: 3,
        2: 1,
        1: 1,
      },
    },
    tag: { text: "BEST SELLER", color: "bg-[#00C853]" },
  },
  {
    id: "cg-3000",
    name: "CG-3000",
    subtitle: "Mid-Range DOCSIS 3.0 Modem",
    price: 89.99,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "The CG-3000 is a reliable mid-range modem with DOCSIS 3.0 technology, providing speeds up to 1 Gbps. Perfect for households with multiple devices and moderate internet usage.",
    features: [
      "DOCSIS 3.0 technology for fast speeds",
      "Up to 1 Gbps download speeds",
      "Dual-band WiFi 5 for reliable wireless performance",
      "2 Gigabit Ethernet ports for wired connections",
      "Basic security features with parental controls",
      "Compatible with most major cable internet providers",
      "Easy setup with the ConnectGuardian mobile app",
      "Compact design that fits anywhere",
    ],
    specifications: {
      dimensions: "7.5 x 6.2 x 2.0 inches",
      weight: "1.4 lbs",
      ports: "2x Gigabit Ethernet, 1x USB 2.0",
      wifi: "Dual-band WiFi 5 (802.11ac)",
      processor: "1.2 GHz dual-core processor",
      memory: "256 MB RAM",
      compatibility: "Most major cable internet providers",
      warranty: "2-year limited warranty",
    },
    inTheBox: ["CG-3000 Modem", "Power adapter", "Ethernet cable", "Quick start guide", "Warranty information"],
    reviews: {
      average: 4.5,
      count: 189,
      breakdown: {
        5: 65,
        4: 25,
        3: 7,
        2: 2,
        1: 1,
      },
    },
    tag: { text: "POPULAR", color: "bg-amber-500" },
  },
  {
    id: "cg-1000",
    name: "CG-1000",
    subtitle: "Entry-Level DOCSIS 3.0 Modem",
    price: 59.99,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "The CG-1000 is an affordable entry-level modem with DOCSIS 3.0 technology, providing speeds up to 400 Mbps. Ideal for small households with basic internet needs.",
    features: [
      "DOCSIS 3.0 technology for reliable speeds",
      "Up to 400 Mbps download speeds",
      "Single-band WiFi 5 for wireless connectivity",
      "1 Gigabit Ethernet port for wired connection",
      "Basic security features",
      "Compatible with most major cable internet providers",
      "Simple plug-and-play setup",
      "Compact and energy-efficient design",
    ],
    specifications: {
      dimensions: "6.5 x 5.2 x 1.8 inches",
      weight: "1.0 lbs",
      ports: "1x Gigabit Ethernet",
      wifi: "Single-band WiFi 5 (802.11ac)",
      processor: "1.0 GHz single-core processor",
      memory: "128 MB RAM",
      compatibility: "Most major cable internet providers",
      warranty: "1-year limited warranty",
    },
    inTheBox: ["CG-1000 Modem", "Power adapter", "Ethernet cable", "Quick start guide", "Warranty information"],
    reviews: {
      average: 4.2,
      count: 142,
      breakdown: {
        5: 50,
        4: 30,
        3: 15,
        2: 3,
        1: 2,
      },
    },
  },
  {
    id: "cg-fiber",
    name: "CG-Fiber",
    subtitle: "Fiber Optic Modem",
    price: 149.99,
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    description:
      "The CG-Fiber is our premium fiber optic modem, designed for ultra-fast internet speeds up to 10 Gbps. Perfect for power users, gamers, and households with numerous connected devices.",
    features: [
      "Fiber optic connectivity for ultra-fast speeds",
      "Up to 10 Gbps download speeds",
      "Tri-band WiFi 6E for exceptional wireless performance",
      "4 Gigabit Ethernet ports for wired connections",
      "Advanced security features with AI-powered threat detection",
      "Compatible with all major fiber internet providers",
      "Easy setup with the ConnectGuardian mobile app",
      "Sleek design with status display",
    ],
    specifications: {
      dimensions: "9.0 x 7.5 x 2.5 inches",
      weight: "2.0 lbs",
      ports: "4x Gigabit Ethernet, 1x USB 3.1",
      wifi: "Tri-band WiFi 6E (802.11ax)",
      processor: "2.0 GHz quad-core processor",
      memory: "1 GB RAM",
      compatibility: "All major fiber internet providers",
      warranty: "3-year limited warranty",
    },
    inTheBox: [
      "CG-Fiber Modem",
      "Power adapter",
      "Ethernet cable",
      "Fiber optic cable",
      "Quick start guide",
      "Warranty information",
    ],
    reviews: {
      average: 4.9,
      count: 87,
      breakdown: {
        5: 85,
        4: 12,
        3: 2,
        2: 1,
        1: 0,
      },
    },
    tag: { text: "NEW", color: "bg-[#0A4DA6]" },
  },
]

export default function ModemDetailPage({ params }: { params: { id: string } }) {
  const modem = modems.find((m) => m.id === params.id)

  if (!modem) {
    notFound()
  }

  return (
    <div className="relative min-h-screen">
      <FiberOpticBackground />

      <div className="container py-16 relative z-10">
        <div className="mb-8">
          <Link href="/products/modems" className="text-[#0A4DA6] hover:underline">
            ← Back to Modems
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
              <Image
                src={modem.images[0] || "/placeholder.svg"}
                alt={modem.name}
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {modem.images.map((image, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#0A4DA6]"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${modem.name} view ${index + 1}`}
                    width={200}
                    height={150}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              {modem.tag && (
                <Badge className={`${modem.tag.color} hover:${modem.tag.color} mb-2`}>{modem.tag.text}</Badge>
              )}
              <h1 className="text-3xl font-bold mb-2">{modem.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{modem.subtitle}</p>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(modem.reviews.average)
                          ? "text-yellow-400 fill-yellow-400"
                          : i < modem.reviews.average
                            ? "text-yellow-400 fill-yellow-400 opacity-50"
                            : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{modem.reviews.average}</span>
                <span className="text-muted-foreground">({modem.reviews.count} reviews)</span>
              </div>

              <div className="text-3xl font-bold text-[#0A4DA6] mb-6">${modem.price}</div>

              <p className="text-muted-foreground mb-6">{modem.description}</p>

              <div className="space-y-4 mb-8">
                <h3 className="font-medium">Key Features:</h3>
                <ul className="space-y-2">
                  {modem.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00C853] mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#0A4DA6] hover:bg-[#0A4DA6]/90">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="mr-2 h-5 w-5" />
                  Download Specs
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="features" className="mb-16">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="in-the-box">In The Box</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="features" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Full Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {modem.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00C853] mt-0.5" />
                      <div>
                        <p>{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(modem.specifications).map(([key, value]) => (
                    <div key={key} className="border-b pb-2">
                      <div className="text-sm text-muted-foreground">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                      <div className="font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="in-the-box" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">What's In The Box</h3>
                <ul className="space-y-2">
                  {modem.inTheBox.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#00C853] mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-5xl font-bold text-[#0A4DA6] mb-2">{modem.reviews.average}</div>
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(modem.reviews.average)
                                ? "text-yellow-400 fill-yellow-400"
                                : i < modem.reviews.average
                                  ? "text-yellow-400 fill-yellow-400 opacity-50"
                                  : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">{modem.reviews.count} reviews</div>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Rating Breakdown</h4>
                      {[5, 4, 3, 2, 1].map((rating) => {
                        const percentage = (modem.reviews.breakdown[rating] / modem.reviews.count) * 100
                        return (
                          <div key={rating} className="flex items-center gap-2 mb-2">
                            <div className="flex items-center gap-1 w-12">
                              <span>{rating}</span>
                              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            </div>
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-[#0A4DA6]" style={{ width: `${percentage}%` }}></div>
                            </div>
                            <div className="w-12 text-right text-sm text-muted-foreground">
                              {Math.round(percentage)}%
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">Recent Reviews</h3>
                      <Button variant="outline" size="sm">
                        Write a Review
                      </Button>
                    </div>

                    <div className="space-y-6">
                      <div className="border-b pb-4">
                        <div className="flex justify-between mb-2">
                          <div className="font-medium">John D.</div>
                          <div className="text-sm text-muted-foreground">2 weeks ago</div>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <p className="text-sm">
                          This modem has been a game changer for my home network. Speeds are consistently fast and setup
                          was a breeze.
                        </p>
                      </div>

                      <div className="border-b pb-4">
                        <div className="flex justify-between mb-2">
                          <div className="font-medium">Sarah M.</div>
                          <div className="text-sm text-muted-foreground">1 month ago</div>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <p className="text-sm">
                          Very happy with this purchase. The connection is stable and I haven't had any issues with
                          dropped signals.
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <div className="font-medium">Robert K.</div>
                          <div className="text-sm text-muted-foreground">2 months ago</div>
                        </div>
                        <div className="flex mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                        <p className="text-sm">
                          The security features on this modem are excellent. I can monitor my network and get alerts
                          about any suspicious activity.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <Button variant="outline">Load More Reviews</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            You might also be interested in these similar products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modems
            .filter((m) => m.id !== modem.id)
            .slice(0, 3)
            .map((relatedModem) => (
              <Card key={relatedModem.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={relatedModem.images[0] || "/placeholder.svg"}
                    alt={relatedModem.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  {relatedModem.tag && (
                    <div
                      className={`absolute top-2 right-2 ${relatedModem.tag.color} text-white text-xs font-bold px-2 py-1 rounded`}
                    >
                      {relatedModem.tag.text}
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-1">{relatedModem.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{relatedModem.subtitle}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold text-[#0A4DA6]">${relatedModem.price}</div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/products/modems/${relatedModem.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
