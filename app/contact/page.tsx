import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Building, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team for support, sales inquiries, or general questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#0A4DA6]" />
                Phone Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Our support team is available to help you with any issues or questions.
              </p>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">Technical Support</div>
                  <a href="tel:18002666328" className="text-[#0A4DA6] hover:underline">
                    1-800-CONNECT
                  </a>
                </div>
                <div>
                  <div className="font-medium">Sales</div>
                  <a href="tel:18002666329" className="text-[#0A4DA6] hover:underline">
                    1-800-CONNECT-1
                  </a>
                </div>
                <div>
                  <div className="font-medium">Business Support</div>
                  <a href="tel:18002666330" className="text-[#0A4DA6] hover:underline">
                    1-800-CONNECT-2
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#0A4DA6]" />
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">Customer Support</div>
                  <a href="mailto:support@connectguardian.com" className="text-[#0A4DA6] hover:underline">
                    support@connectguardian.com
                  </a>
                </div>
                <div>
                  <div className="font-medium">Sales Inquiries</div>
                  <a href="mailto:sales@connectguardian.com" className="text-[#0A4DA6] hover:underline">
                    sales@connectguardian.com
                  </a>
                </div>
                <div>
                  <div className="font-medium">Business Partnerships</div>
                  <a href="mailto:partners@connectguardian.com" className="text-[#0A4DA6] hover:underline">
                    partners@connectguardian.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-[#0A4DA6]" />
                Visit Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Stop by our offices to speak with our team in person.
              </p>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">Headquarters</div>
                  <address className="not-italic text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                      <div>
                        123 Tech Boulevard
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </div>
                    </div>
                  </address>
                </div>
                <div>
                  <div className="font-medium">Office Hours</div>
                  <p className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Please describe your issue or question" rows={5} />
                </div>
                <Button type="submit" className="w-full bg-[#0A4DA6] hover:bg-[#0A4DA6]/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">What are your support hours?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our technical support team is available 24/7 for Premium customers and 8AM-8PM for Standard
                    customers.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">How quickly will I receive a response?</h3>
                  <p className="text-sm text-muted-foreground">
                    For phone support, we aim to answer all calls within 2 minutes. Email inquiries are typically
                    responded to within 24 hours.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Do you offer on-site support?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we offer on-site support for business customers with Enterprise plans. Please contact our
                    business support team for details.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">How do I report a network outage?</h3>
                  <p className="text-sm text-muted-foreground">
                    You can report network outages through our mobile app, website, or by calling our technical support
                    line.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
