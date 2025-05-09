"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "../lib/utils"
import { Smartphone, Tablet, Monitor, RotateCcw } from "lucide-react"

export type DeviceType = "mobile" | "tablet" | "desktop"
export type OrientationType = "portrait" | "landscape"

interface DevicePreviewProps {
  children: React.ReactNode
  defaultDevice?: DeviceType
  defaultOrientation?: OrientationType
  className?: string
}

export function DevicePreview({
  children,
  defaultDevice = "mobile",
  defaultOrientation = "portrait",
  className,
}: DevicePreviewProps) {
  const [device, setDevice] = useState<DeviceType>(defaultDevice)
  const [orientation, setOrientation] = useState<OrientationType>(defaultOrientation)

  const toggleOrientation = () => {
    setOrientation(orientation === "portrait" ? "landscape" : "portrait")
  }

  const deviceDimensions = {
    mobile: {
      portrait: "w-[375px] h-[667px]",
      landscape: "w-[667px] h-[375px]",
    },
    tablet: {
      portrait: "w-[768px] h-[1024px]",
      landscape: "w-[1024px] h-[768px]",
    },
    desktop: {
      portrait: "w-[1280px] h-[800px]",
      landscape: "w-[1280px] h-[800px]",
    },
  }

  const deviceStyles = deviceDimensions[device][orientation]

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={() => setDevice("mobile")}
          className={cn(
            "p-2 rounded-md",
            device === "mobile" ? "bg-[#EBF0FF] text-[#1046DF]" : "text-gray-500 hover:bg-gray-100",
          )}
          aria-label="Mobile view"
          title="Mobile view"
        >
          <Smartphone size={24} />
        </button>
        <button
          onClick={() => setDevice("tablet")}
          className={cn(
            "p-2 rounded-md",
            device === "tablet" ? "bg-[#EBF0FF] text-[#1046DF]" : "text-gray-500 hover:bg-gray-100",
          )}
          aria-label="Tablet view"
          title="Tablet view"
        >
          <Tablet size={24} />
        </button>
        <button
          onClick={() => setDevice("desktop")}
          className={cn(
            "p-2 rounded-md",
            device === "desktop" ? "bg-[#EBF0FF] text-[#1046DF]" : "text-gray-500 hover:bg-gray-100",
          )}
          aria-label="Desktop view"
          title="Desktop view"
        >
          <Monitor size={24} />
        </button>
        {device !== "desktop" && (
          <button
            onClick={toggleOrientation}
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
            aria-label="Toggle orientation"
            title="Toggle orientation"
          >
            <RotateCcw size={24} />
          </button>
        )}
      </div>

      <div
        className={cn(
          "border-8 border-gray-800 rounded-2xl overflow-hidden bg-white transition-all duration-300",
          deviceStyles,
        )}
      >
        <div className="w-full h-full overflow-auto">{children}</div>
      </div>
    </div>
  )
}
