import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NetworkMap } from "@/components/network-map"
import { BandwidthMeter } from "@/components/bandwidth-meter"
import { SecurityIndicator } from "@/components/security-indicator"

export function NetworkDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>Network Outage Map</CardTitle>
          <CardDescription>Real-time view of network status in your area</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <NetworkMap />
        </CardContent>
      </Card>

      <div className="col-span-1 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Bandwidth Health</CardTitle>
            <CardDescription>Current network performance</CardDescription>
          </CardHeader>
          <CardContent>
            <BandwidthMeter />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security Status</CardTitle>
            <CardDescription>Threat level indicator</CardDescription>
          </CardHeader>
          <CardContent>
            <SecurityIndicator />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
