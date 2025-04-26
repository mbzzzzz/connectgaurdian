"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function NetworkMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This would be where we'd initialize a real map with Google Maps API
    // For now, we'll just use a placeholder
  }, [])

  return (
    <div ref={mapRef} className="relative h-[400px] w-full overflow-hidden rounded-b-lg">
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Network Outage Map"
          width={800}
          height={400}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center p-6 bg-white/80 dark:bg-gray-900/80 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium mb-2">Network Status</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-[#00C853]"></span>
              <span className="text-sm font-medium">All Systems Operational</span>
            </div>
            <p className="text-sm text-muted-foreground">No outages detected in your area</p>
          </div>
        </div>
      </div>
    </div>
  )
}
