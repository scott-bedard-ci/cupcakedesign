"use client"

import type React from "react"
import { createContext, useContext } from "react"
import { useResponsiveContext } from "../lib/responsiveUtils"
import type { DeviceType, Orientation, Breakpoint } from "../lib/responsiveUtils"

// Define the responsive context type
interface ResponsiveContextType {
  deviceType: DeviceType
  breakpoint: Breakpoint
  orientation: Orientation
  viewportSize: { width: number; height: number }
  hasTouch: boolean
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isPortrait: boolean
  isLandscape: boolean
}

// Create the context
const ResponsiveContext = createContext<ResponsiveContextType | undefined>(undefined)

/**
 * Provider component for responsive context
 */
export function ResponsiveProvider({ children }: { children: React.ReactNode }) {
  const responsiveContext = useResponsiveContext()

  return <ResponsiveContext.Provider value={responsiveContext}>{children}</ResponsiveContext.Provider>
}

/**
 * Hook to use the responsive context
 */
export function useResponsive() {
  const context = useContext(ResponsiveContext)

  if (context === undefined) {
    throw new Error("useResponsive must be used within a ResponsiveProvider")
  }

  return context
}
