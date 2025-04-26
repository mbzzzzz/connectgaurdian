"use client"

import { useState, useEffect } from "react"
import { Shield, ShieldAlert, ShieldCheck } from "lucide-react"

export function SecurityIndicator() {
  const [threatLevel, setThreatLevel] = useState<"low" | "medium" | "high">("low")
  const [blockedThreats, setBlockedThreats] = useState(0)
  const [lastUpdated, setLastUpdated] = useState(new Date())

  useEffect(() => {
    // Simulate security data
    setBlockedThreats(Math.floor(Math.random() * 50) + 10)

    // Randomly change threat level occasionally
    const interval = setInterval(() => {
      const levels: Array<"low" | "medium" | "high"> = ["low", "medium", "high"]
      const weights = [0.7, 0.25, 0.05] // 70% low, 25% medium, 5% high

      const random = Math.random()
      let cumulativeWeight = 0
      let selectedLevel = "low"

      for (let i = 0; i < levels.length; i++) {
        cumulativeWeight += weights[i]
        if (random <= cumulativeWeight) {
          selectedLevel = levels[i]
          break
        }
      }

      setThreatLevel(selectedLevel as "low" | "medium" | "high")
      setBlockedThreats((prev) => prev + Math.floor(Math.random() * 5))
      setLastUpdated(new Date())
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const getThreatLevelInfo = () => {
    switch (threatLevel) {
      case "low":
        return {
          icon: <ShieldCheck className="h-12 w-12 text-[#00C853]" />,
          color: "text-[#00C853]",
          bg: "bg-[#00C853]/10",
          label: "Low",
          message: "Your network is secure",
        }
      case "medium":
        return {
          icon: <Shield className="h-12 w-12 text-amber-500" />,
          color: "text-amber-500",
          bg: "bg-amber-500/10",
          label: "Medium",
          message: "Potential threats detected",
        }
      case "high":
        return {
          icon: <ShieldAlert className="h-12 w-12 text-[#E53935]" />,
          color: "text-[#E53935]",
          bg: "bg-[#E53935]/10",
          label: "High",
          message: "Active threats detected",
        }
    }
  }

  const info = getThreatLevelInfo()

  return (
    <div className="flex flex-col items-center text-center">
      <div className={`p-4 rounded-full ${info.bg} mb-4`}>{info.icon}</div>

      <h3 className={`text-lg font-bold ${info.color}`}>{info.label} Threat Level</h3>

      <p className="text-sm text-muted-foreground mt-1 mb-4">{info.message}</p>

      <div className="w-full pt-4 border-t">
        <div className="flex justify-between text-sm">
          <span>Threats blocked:</span>
          <span className="font-medium">{blockedThreats}</span>
        </div>
        <div className="flex justify-between text-sm mt-2">
          <span>Last updated:</span>
          <span className="font-medium">
            {lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
        </div>
      </div>
    </div>
  )
}
