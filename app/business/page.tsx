import { BusinessPortal } from "@/components/business-portal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Download, FileText, Users } from "lucide-react"
import Link from "next/link"

export default function BusinessPage() {
  return (
    <div className="py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Business Portal</h1>
            <p className="text-muted-foreground">Enterprise-grade network management solutions</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/business/reports">
                <FileText className="h-4 w-4 mr-2" />
                Reports
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/business/team">
                <Users className="h-4 w-4 mr-2" />
                Team
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground mt-1">All locations operational</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">SLA Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-[#00C853] mr-2"></div>
                <span className="text-2xl font-bold">99.98%</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Exceeding target of 99.9%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground mt-1">1 high priority, 1 medium priority</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="mb-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-6">
            <BusinessPortal />
          </TabsContent>
          <TabsContent value="locations" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Location Management</CardTitle>
                <CardDescription>Manage all your business locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Building className="h-8 w-8 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md text-[#0A4DA6]" />
                      <div>
                        <div className="font-medium">Headquarters</div>
                        <div className="text-xs text-muted-foreground">San Francisco, CA</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/business/locations/headquarters">Manage</Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Building className="h-8 w-8 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md text-[#0A4DA6]" />
                      <div>
                        <div className="font-medium">Regional Office</div>
                        <div className="text-xs text-muted-foreground">New York, NY</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/business/locations/regional">Manage</Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Building className="h-8 w-8 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md text-[#0A4DA6]" />
                      <div>
                        <div className="font-medium">Branch Office</div>
                        <div className="text-xs text-muted-foreground">Austin, TX</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/business/locations/branch">Manage</Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Building className="h-8 w-8 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md text-[#0A4DA6]" />
                      <div>
                        <div className="font-medium">Data Center</div>
                        <div className="text-xs text-muted-foreground">Chicago, IL</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/business/locations/datacenter">Manage</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Reports & Analytics</CardTitle>
                <CardDescription>View and download detailed reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div>
                      <div className="font-medium">Network Performance Report</div>
                      <div className="text-xs text-muted-foreground">Last updated: Today, 8:00 AM</div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/business/reports/network">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div>
                      <div className="font-medium">Security Incident Report</div>
                      <div className="text-xs text-muted-foreground">Last updated: Yesterday, 6:30 PM</div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/business/reports/security">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div>
                      <div className="font-medium">Bandwidth Usage Report</div>
                      <div className="text-xs text-muted-foreground">Last updated: 2 days ago</div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/business/reports/bandwidth">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <div>
                      <div className="font-medium">SLA Compliance Report</div>
                      <div className="text-xs text-muted-foreground">Last updated: 1 week ago</div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/business/reports/sla">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="api" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>API Documentation</CardTitle>
                <CardDescription>Access our API for custom integrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg mb-6">
                  <h3 className="font-medium mb-2">API Keys</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Manage your API keys for secure access to ConnectGuardian services.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/business/api/keys">Manage API Keys</Link>
                  </Button>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg mb-6">
                  <h3 className="font-medium mb-2">Documentation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive guides and reference for all API endpoints.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/business/api/docs">View Documentation</Link>
                  </Button>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <h3 className="font-medium mb-2">Usage & Limits</h3>
                  <p className="text-sm text-muted-foreground mb-4">Monitor your API usage and manage rate limits.</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/business/api/usage">View Usage</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
