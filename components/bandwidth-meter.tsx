"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"
import { ArrowDown, ArrowUp } from "lucide-react"

export function BandwidthMeter() {
  const [download, setDownload] = useState(0)
  const [upload, setUpload] = useState(0)
  const [latency, setLatency] = useState(0)

  useEffect(() => {
    // Simulate bandwidth data
    setDownload(Math.floor(Math.random() * 500) + 200) // 200-700 Mbps
    setUpload(Math.floor(Math.random() * 100) + 50) // 50-150 Mbps
    setLatency(Math.floor(Math.random() * 20) + 5) // 5-25 ms

    // Update values periodically
    const interval = setInterval(() => {
      setDownload((prev) => {
        const variation = Math.floor(Math.random() * 50) - 25
        return Math.max(200, Math.min(700, prev + variation))
      })

      setUpload((prev) => {
        const variation = Math.floor(Math.random() * 20) - 10
        return Math.max(50, Math.min(150, prev + variation))
      })

      setLatency((prev) => {
        const variation = Math.floor(Math.random() * 6) - 3
        return Math.max(5, Math.min(25, prev + variation))
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getSpeedColor = (speed: number, type: "download" | "upload") => {
    if (type === "download") {
      if (speed > 500) return "text-[#00C853]"
      if (speed > 300) return "text-amber-500"
      return "text-[#E53935]"
    } else {
      if (speed > 100) return "text-[#00C853]"
      if (speed > 70) return "text-amber-500"
      return "text-[#E53935]"
    }
  }

  const getLatencyColor = (ms: number) => {
    if (ms < 10) return "text-[#00C853]"
    if (ms < 20) return "text-amber-500"
    return "text-[#E53935]"
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ArrowDown className="h-4 w-4 text-[#0A4DA6]" />
            <span className="text-sm font-medium">Download</span>
          </div>
          <span className={`text-sm font-bold ${getSpeedColor(download, "download")}`}>{download} Mbps</span>
        </div>
        <Progress value={(download / 700) * 100} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ArrowUp className="h-4 w-4 text-[#0A4DA6]" />
            <span className="text-sm font-medium">Upload</span>
          </div>
          <span className={`text-sm font-bold ${getSpeedColor(upload, "upload")}`}>{upload} Mbps</span>
        </div>
        <Progress value={(upload / 150) * 100} className="h-2" />
      </div>

      <div className="pt-2 border-t">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Latency</span>
          <span className={`text-sm font-bold ${getLatencyColor(latency)}`}>{latency} ms</span>
        </div>
      </div>
    </div>
  )
}
