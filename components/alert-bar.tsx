import { AlertCircle, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type AlertStatus = "success" | "warning" | "error"

interface AlertBarProps {
  message: string
  status: AlertStatus
}

export function AlertBar({ message, status }: AlertBarProps) {
  const getStatusStyles = (status: AlertStatus) => {
    switch (status) {
      case "success":
        return {
          bg: "bg-[#00C853]/10",
          border: "border-[#00C853]/20",
          text: "text-[#00C853]",
          icon: <CheckCircle className="h-4 w-4" />,
        }
      case "warning":
        return {
          bg: "bg-amber-500/10",
          border: "border-amber-500/20",
          text: "text-amber-500",
          icon: <AlertCircle className="h-4 w-4" />,
        }
      case "error":
        return {
          bg: "bg-[#E53935]/10",
          border: "border-[#E53935]/20",
          text: "text-[#E53935]",
          icon: <XCircle className="h-4 w-4" />,
        }
    }
  }

  const styles = getStatusStyles(status)

  return (
    <div className={cn("relative z-10 border-b py-2", styles.bg, styles.border)}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={styles.text}>{styles.icon}</span>
          <span className="text-sm font-medium">{message}</span>
        </div>
        <Button variant="ghost" size="sm" className="h-7 text-xs">
          View Details
        </Button>
      </div>
    </div>
  )
}
