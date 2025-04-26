import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Calendar, Laptop, Smartphone, Wifi } from "lucide-react"

export function AccountGuardian() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wifi className="h-5 w-5 text-[#0A4DA6]" />
            Data Usage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Monthly Usage</span>
                <span className="font-medium">756 GB / 1 TB</span>
              </div>
              <Progress value={75.6} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>25 days remaining</span>
                <span>75.6% used</span>
              </div>
            </div>

            <div className="pt-4 border-t space-y-3">
              <h4 className="text-sm font-medium">Usage Breakdown</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Streaming</span>
                  <span>412 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Downloads</span>
                  <span>198 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gaming</span>
                  <span>87 GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Other</span>
                  <span>59 GB</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Laptop className="h-5 w-5 text-[#0A4DA6]" />
            Connected Devices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Laptop className="h-8 w-8 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md" />
                <div>
                  <div className="font-medium">MacBook Pro</div>
                  <div className="text-xs text-muted-foreground">192.168.1.5</div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone className="h-8 w-8 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md" />
                <div>
                  <div className="font-medium">iPhone 13</div>
                  <div className="text-xs text-muted-foreground">192.168.1.6</div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Laptop className="h-8 w-8 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md" />
                <div>
                  <div className="font-medium">Work Laptop</div>
                  <div className="text-xs text-muted-foreground">192.168.1.7</div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone className="h-8 w-8 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md" />
                <div>
                  <div className="font-medium">iPad Pro</div>
                  <div className="text-xs text-muted-foreground">192.168.1.8</div>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#0A4DA6]" />
            Scheduled Visits
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="font-medium">Router Upgrade</div>
              <div className="text-sm text-muted-foreground mt-1">May 15, 2023 • 10:00 AM - 12:00 PM</div>
              <div className="flex items-center gap-1 mt-2">
                <span className="h-2 w-2 rounded-full bg-[#0A4DA6]"></span>
                <span className="text-xs">Technician: John Smith</span>
              </div>
            </div>

            <div className="text-center py-6">
              <p className="text-sm text-muted-foreground">No other visits scheduled</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
