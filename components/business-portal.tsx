import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Code, FileText } from "lucide-react"

export function BusinessPortal() {
  return (
    <Tabs defaultValue="sla" className="max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-3 mb-6">
        <TabsTrigger value="sla">SLA Compliance</TabsTrigger>
        <TabsTrigger value="locations">Multi-Location</TabsTrigger>
        <TabsTrigger value="api">API Documentation</TabsTrigger>
      </TabsList>

      <TabsContent value="sla">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#0A4DA6]" />
              SLA Compliance Tracker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Network Uptime</span>
                  <span className="font-medium">99.98%</span>
                </div>
                <Progress value={99.98} className="h-2" />
                <div className="text-xs text-right text-muted-foreground">Target: 99.9%</div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Response Time</span>
                  <span className="font-medium">4.2 hours</span>
                </div>
                <Progress value={84} className="h-2" />
                <div className="text-xs text-right text-muted-foreground">Target: 5 hours</div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Resolution Time</span>
                  <span className="font-medium">12.5 hours</span>
                </div>
                <Progress value={75} className="h-2" />
                <div className="text-xs text-right text-muted-foreground">Target: 24 hours</div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Overall SLA Status</span>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-[#00C853]/10 text-[#00C853]">
                    Exceeding Targets
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="locations">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-[#0A4DA6]" />
              Multi-Location Network Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#00C853]"></div>
                  <div>
                    <div className="font-medium">Headquarters</div>
                    <div className="text-xs text-muted-foreground">San Francisco, CA</div>
                  </div>
                </div>
                <div className="text-sm font-medium">100% Uptime</div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#00C853]"></div>
                  <div>
                    <div className="font-medium">Regional Office</div>
                    <div className="text-xs text-muted-foreground">New York, NY</div>
                  </div>
                </div>
                <div className="text-sm font-medium">99.9% Uptime</div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                  <div>
                    <div className="font-medium">Branch Office</div>
                    <div className="text-xs text-muted-foreground">Austin, TX</div>
                  </div>
                </div>
                <div className="text-sm font-medium">98.7% Uptime</div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#00C853]"></div>
                  <div>
                    <div className="font-medium">Data Center</div>
                    <div className="text-xs text-muted-foreground">Chicago, IL</div>
                  </div>
                </div>
                <div className="text-sm font-medium">100% Uptime</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="api">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-[#0A4DA6]" />
              API Documentation Portal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h3 className="font-medium mb-2">REST API Endpoints</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#0A4DA6] text-white rounded text-xs">GET</span>
                    <span className="font-mono">/api/v1/network/status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#00C853] text-white rounded text-xs">POST</span>
                    <span className="font-mono">/api/v1/support/ticket</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-amber-500 text-white rounded text-xs">PUT</span>
                    <span className="font-mono">/api/v1/devices/configure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#E53935] text-white rounded text-xs">DELETE</span>
                    <span className="font-mono">/api/v1/devices/{"{device_id}"}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h3 className="font-medium mb-2">Authentication</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  All API requests require an API key to be passed in the header.
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded font-mono text-xs overflow-x-auto">
                  Authorization: Bearer {"{your_api_key}"}
                </div>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h3 className="font-medium mb-2">Rate Limits</h3>
                <p className="text-sm text-muted-foreground">
                  Standard tier: 100 requests/minute
                  <br />
                  Premium tier: 1000 requests/minute
                  <br />
                  Enterprise tier: Customized limits
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
