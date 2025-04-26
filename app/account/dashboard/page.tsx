"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { AccountGuardian } from "@/components/account-guardian"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Download, Settings, User } from "lucide-react"
import Link from "next/link"
import { FiberOpticBackground } from "@/components/fiber-optic-background"

export default function AccountDashboardPage() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (status === "unauthenticated") {
    redirect("/signin")
  }

  return (
    <div className="relative min-h-screen py-10">
      <FiberOpticBackground />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Account</h1>
            <p className="text-muted-foreground">Welcome back, {session?.user?.name || "User"}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/account/settings">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/account/billing">
                <CreditCard className="h-4 w-4 mr-2" />
                Billing
              </Link>
            </Button>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Account Overview</CardTitle>
            <CardDescription>Your account information and subscription details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full bg-[#0A4DA6] flex items-center justify-center text-white text-xl font-bold">
                    {session?.user?.name?.charAt(0) || "U"}
                  </div>
                  <div>
                    <h3 className="font-medium">{session?.user?.name || "User"}</h3>
                    <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/account/profile">
                    <User className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Link>
                </Button>
              </div>
              <div>
                <h3 className="font-medium mb-2">Subscription Plan</h3>
                <div className="p-3 bg-[#0A4DA6]/10 rounded-md mb-4">
                  <div className="font-medium text-[#0A4DA6]">Premium Plan</div>
                  <p className="text-sm text-muted-foreground">Unlimited bandwidth, priority support</p>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/account/subscription">Manage Subscription</Link>
                </Button>
              </div>
              <div>
                <h3 className="font-medium mb-2">Billing Information</h3>
                <p className="text-sm text-muted-foreground mb-1">Next billing date: May 15, 2023</p>
                <p className="text-sm text-muted-foreground mb-4">Payment method: Visa ending in 4242</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/account/billing">
                    <Download className="h-4 w-4 mr-2" />
                    Download Invoices
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList>
            <TabsTrigger value="overview">Account Guardian</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-6">
            <AccountGuardian />
          </TabsContent>
          <TabsContent value="security" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your account security and authentication methods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Password</h3>
                    <p className="text-sm text-muted-foreground mb-4">Last changed: 30 days ago</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/account/security/password">Change Password</Link>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground mb-4">Status: Enabled</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/account/security/2fa">Manage 2FA</Link>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Login History</h3>
                    <p className="text-sm text-muted-foreground mb-4">Last login: Today, 10:45 AM</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/account/security/login-history">View History</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage how and when you receive notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Email Notifications</h3>
                    <p className="text-sm text-muted-foreground mb-4">Receive important updates and alerts via email</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/account/notifications/email">Manage Email Notifications</Link>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">SMS Notifications</h3>
                    <p className="text-sm text-muted-foreground mb-4">Get urgent alerts via text message</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/account/notifications/sms">Manage SMS Notifications</Link>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Push Notifications</h3>
                    <p className="text-sm text-muted-foreground mb-4">Receive alerts on your mobile device</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/account/notifications/push">Manage Push Notifications</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="preferences" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Preferences</CardTitle>
                <CardDescription>Customize your account experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Language</h3>
                    <p className="text-sm text-muted-foreground mb-4">Current language: English (US)</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/account/preferences/language">Change Language</Link>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Time Zone</h3>
                    <p className="text-sm text-muted-foreground mb-4">Current time zone: Pacific Time (UTC-8)</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/account/preferences/timezone">Change Time Zone</Link>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Data Privacy</h3>
                    <p className="text-sm text-muted-foreground mb-4">Manage how your data is used and stored</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/account/preferences/privacy">Privacy Settings</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
