import type React from "react"
import { cn } from "../lib/utils"
import type { Size } from "../lib/types"

export interface IconProps {
  icon: React.ReactNode
  size?: Size
  position?: "left" | "right"
  className?: string
}

export function Icon({ icon, size = "medium", position, className }: IconProps) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-5 h-5",
    large: "w-6 h-6",
  }

  return (
    <span
      className={cn(
        "flex-shrink-0",
        sizeClasses[size],
        position === "left" ? "mr-2" : position === "right" ? "ml-2" : "",
        className,
      )}
    >
      {icon}
    </span>
  )
}
