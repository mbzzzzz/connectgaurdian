import { SmartSupportCenter } from "@/components/smart-support-center"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, FileText, HelpCircle, MessageSquare, Phone, Video } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Support Center</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get help with your connection issues and find answers to your questions
          </p>
        </div>

        <Tabs defaultValue="smart-support" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="smart-support">Smart Support</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>
          <TabsContent value="smart-support" className="mt-6">
            <SmartSupportCenter />
          </TabsContent>
          <TabsContent value="guides" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#0A4DA6]" />
                    Router Setup Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn how to set up your router for optimal performance and security.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/support/guides/router-setup">
                      Read Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#0A4DA6]" />
                    Troubleshooting Slow Speeds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Diagnose and fix common issues that cause slow internet speeds.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/support/guides/slow-speeds">
                      Read Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-[#0A4DA6]" />
                    Securing Your Network
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Best practices for keeping your home network secure from threats.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/support/guides/network-security">
                      Read Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="videos" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-[#0A4DA6]" />
                    Router Setup Tutorial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-md mb-4 flex items-center justify-center">
                    <Video className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/support/videos/router-setup">
                      Watch Video
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-[#0A4DA6]" />
                    Speed Test Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-md mb-4 flex items-center justify-center">
                    <Video className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/support/videos/speed-test">
                      Watch Video
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-[#0A4DA6]" />
                    Network Security Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-md mb-4 flex items-center justify-center">
                    <Video className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/support/videos/security-tips">
                      Watch Video
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="contact" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#0A4DA6]" />
                    Phone Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Speak directly with our technical support team.</p>
                  <div className="text-center font-medium mb-4">1-800-CONNECT</div>
                  <p className="text-xs text-muted-foreground mb-4">
                    Available 24/7 for Premium customers
                    <br />
                    8AM-8PM for Standard customers
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="tel:18002666328">
                      Call Now
                      <Phone className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-[#0A4DA6]" />
                    Live Chat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat with our support team for immediate assistance.
                  </p>
                  <div className="text-center font-medium mb-4">Available Now</div>
                  <p className="text-xs text-muted-foreground mb-4">
                    Average response time: 2 minutes
                    <br />
                    Available 24/7 for all customers
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/support/chat">
                      Start Chat
                      <MessageSquare className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-[#0A4DA6]" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Send us an email and we'll get back to you as soon as possible.
                  </p>
                  <div className="text-center font-medium mb-4">support@connectguardian.com</div>
                  <p className="text-xs text-muted-foreground mb-4">
                    Response within 24 hours
                    <br />
                    For non-urgent inquiries
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="mailto:support@connectguardian.com">
                      Send Email
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">How do I reset my router?</h3>
              <p className="text-sm text-muted-foreground">
                To reset your router, locate the small reset button on the back of the device. Press and hold it for 10
                seconds until the lights flash.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Why is my internet connection slow?</h3>
              <p className="text-sm text-muted-foreground">
                Slow connections can be caused by many factors including distance from the router, interference, or
                network congestion.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">How do I change my WiFi password?</h3>
              <p className="text-sm text-muted-foreground">
                Log into your router's admin panel at 192.168.1.1 using your credentials, then navigate to wireless
                settings.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">What is the difference between 2.4GHz and 5GHz WiFi?</h3>
              <p className="text-sm text-muted-foreground">
                2.4GHz offers better range but slower speeds, while 5GHz provides faster speeds but shorter range.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
