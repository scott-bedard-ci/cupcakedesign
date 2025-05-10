"use client"

import type React from "react"

import { useEffect, useState, useMemo } from "react"
import { breakpoints } from "./designTokens"

// Breakpoint type
export type Breakpoint = keyof typeof breakpoints

// Device type
export type DeviceType = "mobile" | "tablet" | "desktop"

// Orientation type
export type Orientation = "portrait" | "landscape"

// Convert breakpoint string to number
export function getBreakpointValue(breakpoint: Breakpoint): number {
  return Number.parseInt(breakpoints[breakpoint].replace("px", ""), 10)
}

/**
 * Hook to get the current breakpoint
 * @returns The current breakpoint
 */
export function useBreakpoint(): Breakpoint {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>("xs")

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width >= getBreakpointValue("2xl")) {
        setCurrentBreakpoint("2xl")
      } else if (width >= getBreakpointValue("xl")) {
        setCurrentBreakpoint("xl")
      } else if (width >= getBreakpointValue("lg")) {
        setCurrentBreakpoint("lg")
      } else if (width >= getBreakpointValue("md")) {
        setCurrentBreakpoint("md")
      } else if (width >= getBreakpointValue("sm")) {
        setCurrentBreakpoint("sm")
      } else {
        setCurrentBreakpoint("xs")
      }
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return currentBreakpoint
}

/**
 * Hook to check if the current viewport is at least a specific breakpoint
 * @param breakpoint The minimum breakpoint to check for
 * @returns Whether the current viewport is at least the specified breakpoint
 */
export function useBreakpointAtLeast(breakpoint: Breakpoint): boolean {
  const currentBreakpoint = useBreakpoint()
  const breakpointOrder = ["xs", "sm", "md", "lg", "xl", "2xl"] as const

  return breakpointOrder.indexOf(currentBreakpoint) >= breakpointOrder.indexOf(breakpoint)
}

/**
 * Hook to check if the current viewport is at most a specific breakpoint
 * @param breakpoint The maximum breakpoint to check for
 * @returns Whether the current viewport is at most the specified breakpoint
 */
export function useBreakpointAtMost(breakpoint: Breakpoint): boolean {
  const currentBreakpoint = useBreakpoint()
  const breakpointOrder = ["xs", "sm", "md", "lg", "xl", "2xl"] as const

  return breakpointOrder.indexOf(currentBreakpoint) <= breakpointOrder.indexOf(breakpoint)
}

/**
 * Hook to get a value based on the current breakpoint
 * @param values Object mapping breakpoints to values
 * @param defaultValue Default value to use if no breakpoint matches
 * @returns The value for the current breakpoint
 */
export function useBreakpointValue<T>(values: Partial<Record<Breakpoint, T>>, defaultValue: T): T {
  const currentBreakpoint = useBreakpoint()

  // Find the closest breakpoint that has a value
  const breakpointOrder = ["xs", "sm", "md", "lg", "xl", "2xl"] as const
  const index = breakpointOrder.indexOf(currentBreakpoint)

  // Look for the closest defined breakpoint value
  for (let i = index; i >= 0; i--) {
    const breakpoint = breakpointOrder[i]
    if (values[breakpoint] !== undefined) {
      return values[breakpoint] as T
    }
  }

  return defaultValue
}

/**
 * Hook to get the current device type
 * @returns The current device type (mobile, tablet, or desktop)
 */
export function useDeviceType(): DeviceType {
  const breakpoint = useBreakpoint()

  if (breakpoint === "xs" || breakpoint === "sm") {
    return "mobile"
  } else if (breakpoint === "md") {
    return "tablet"
  } else {
    return "desktop"
  }
}

/**
 * Hook to check if the current device is mobile
 * @returns Whether the current device is mobile
 */
export function useIsMobile(): boolean {
  const deviceType = useDeviceType()
  return deviceType === "mobile"
}

/**
 * Hook to check if the current device is a tablet
 * @returns Whether the current device is a tablet
 */
export function useIsTablet(): boolean {
  const deviceType = useDeviceType()
  return deviceType === "tablet"
}

/**
 * Hook to check if the current device is a desktop
 * @returns Whether the current device is a desktop
 */
export function useIsDesktop(): boolean {
  const deviceType = useDeviceType()
  return deviceType === "desktop"
}

/**
 * Hook to get the current orientation
 * @returns The current orientation
 */
export function useOrientation(): Orientation {
  const [orientation, setOrientation] = useState<Orientation>(
    typeof window !== "undefined" && window.innerHeight > window.innerWidth ? "portrait" : "landscape",
  )

  useEffect(() => {
    const handleResize = () => {
      setOrientation(window.innerHeight > window.innerWidth ? "portrait" : "landscape")
    }

    // Initial check
    handleResize()

    // Add event listeners
    window.addEventListener("resize", handleResize)
    window.addEventListener("orientationchange", handleResize)

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
    }
  }, [])

  return orientation
}

/**
 * Hook to check if the current orientation is portrait
 * @returns Whether the current orientation is portrait
 */
export function useIsPortrait(): boolean {
  const orientation = useOrientation()
  return orientation === "portrait"
}

/**
 * Hook to check if the current orientation is landscape
 * @returns Whether the current orientation is landscape
 */
export function useIsLandscape(): boolean {
  const orientation = useOrientation()
  return orientation === "landscape"
}

/**
 * Hook to get a value based on the current orientation
 * @param portraitValue Value to use in portrait orientation
 * @param landscapeValue Value to use in landscape orientation
 * @returns The value for the current orientation
 */
export function useOrientationValue<T>(portraitValue: T, landscapeValue: T): T {
  const orientation = useOrientation()
  return orientation === "portrait" ? portraitValue : landscapeValue
}

/**
 * Hook to get a combined device and orientation type
 * @returns A string representing the device type and orientation
 */
export function useDeviceOrientation(): `${DeviceType}-${Orientation}` {
  const deviceType = useDeviceType()
  const orientation = useOrientation()

  return `${deviceType}-${orientation}`
}

/**
 * Hook to check if the device has touch capabilities
 * @returns Whether the device has touch capabilities
 */
export function useHasTouch(): boolean {
  const [hasTouch, setHasTouch] = useState(false)

  useEffect(() => {
    // Check for touch capabilities
    const checkTouch = () => {
      setHasTouch("ontouchstart" in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0)
    }

    checkTouch()
  }, [])

  return hasTouch
}

/**
 * Hook to get the viewport dimensions
 * @returns The current viewport width and height
 */
export function useViewportSize(): { width: number; height: number } {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return size
}

/**
 * Utility for generating responsive classes
 * @param baseClasses Base classes to apply
 * @param breakpointClasses Classes to apply at specific breakpoints
 * @returns Combined class string
 */
export function responsiveClasses(baseClasses: string, breakpointClasses: Partial<Record<Breakpoint, string>>): string {
  const classes = [baseClasses]

  Object.entries(breakpointClasses).forEach(([breakpoint, value]) => {
    if (value) {
      classes.push(`${breakpoint}:${value}`)
    }
  })

  return classes.join(" ")
}

/**
 * Utility for generating fluid typography
 * @param minSize Minimum font size in pixels
 * @param maxSize Maximum font size in pixels
 * @param minBreakpoint Minimum breakpoint in pixels
 * @param maxBreakpoint Maximum breakpoint in pixels
 * @returns CSS clamp function as a string
 */
export function fluidTypography(
  minSize: number,
  maxSize: number,
  minBreakpoint: number = getBreakpointValue("sm"),
  maxBreakpoint: number = getBreakpointValue("xl"),
): string {
  const minSizeRem = minSize / 16
  const maxSizeRem = maxSize / 16
  const slope = (maxSizeRem - minSizeRem) / (maxBreakpoint - minBreakpoint)
  const yAxisIntersection = -minBreakpoint * slope + minSizeRem

  return `clamp(${minSizeRem}rem, ${yAxisIntersection.toFixed(4)}rem + ${(slope * 100).toFixed(4)}vw, ${maxSizeRem}rem)`
}

/**
 * Utility for generating responsive spacing
 * @param property CSS property (margin or padding)
 * @param direction Direction to apply spacing
 * @param mobileSize Size for mobile devices
 * @param tabletSize Size for tablet devices
 * @param desktopSize Size for desktop devices
 * @returns Tailwind classes for responsive spacing
 */
export function responsiveSpacing(
  property: "m" | "p",
  direction: "t" | "r" | "b" | "l" | "x" | "y" | "",
  mobileSize: number,
  tabletSize: number,
  desktopSize: number,
): string {
  const baseClass = `${property}${direction}-${mobileSize}`
  const tabletClass = `md:${property}${direction}-${tabletSize}`
  const desktopClass = `lg:${property}${direction}-${desktopSize}`

  return `${baseClass} ${tabletClass} ${desktopClass}`
}

/**
 * Utility for generating responsive grid columns
 * @param mobileCols Number of columns on mobile
 * @param tabletCols Number of columns on tablet
 * @param desktopCols Number of columns on desktop
 */
export function responsiveGridCols(mobileCols: number, tabletCols: number, desktopCols: number): string {
  return `grid-cols-${mobileCols} md:grid-cols-${tabletCols} lg:grid-cols-${desktopCols}`
}

/**
 * Utility for generating responsive flex direction
 * @param mobileDirection Flex direction on mobile
 * @param tabletDirection Flex direction on tablet
 * @param desktopDirection Flex direction on desktop
 */
export function responsiveFlexDirection(
  mobileDirection: "row" | "col",
  tabletDirection: "row" | "col",
  desktopDirection: "row" | "col",
): string {
  return `flex-${mobileDirection} md:flex-${tabletDirection} lg:flex-${desktopDirection}`
}

/**
 * Utility for generating responsive text sizes
 * @param variant Text variant (heading, subheading, body, caption)
 */
export function responsiveText(variant: "heading" | "subheading" | "body" | "caption"): string {
  const textClasses = {
    heading: "text-xl md:text-2xl lg:text-3xl font-bold",
    subheading: "text-lg md:text-xl lg:text-2xl font-semibold",
    body: "text-sm md:text-base lg:text-lg",
    caption: "text-xs md:text-sm",
  }

  return textClasses[variant]
}

/**
 * Utility for generating responsive display classes
 * @param mobileDisplay Display property on mobile
 * @param tabletDisplay Display property on tablet
 * @param desktopDisplay Display property on desktop
 */
export function responsiveDisplay(
  mobileDisplay: "block" | "inline" | "inline-block" | "flex" | "grid" | "hidden",
  tabletDisplay: "block" | "inline" | "inline-block" | "flex" | "grid" | "hidden",
  desktopDisplay: "block" | "inline" | "inline-block" | "flex" | "grid" | "hidden",
): string {
  return `${mobileDisplay} md:${tabletDisplay} lg:${desktopDisplay}`
}

/**
 * Hook to get responsive values based on device type
 * @param mobileValue Value for mobile devices
 * @param tabletValue Value for tablet devices
 * @param desktopValue Value for desktop devices
 */
export function useResponsiveValue<T>(mobileValue: T, tabletValue: T = mobileValue, desktopValue: T = tabletValue): T {
  const deviceType = useDeviceType()

  switch (deviceType) {
    case "mobile":
      return mobileValue
    case "tablet":
      return tabletValue
    case "desktop":
      return desktopValue
    default:
      return mobileValue
  }
}

/**
 * Hook to get a media query match
 * @param query Media query string
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    // Set initial value
    setMatches(mediaQuery.matches)

    // Define listener
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Add listener
    mediaQuery.addEventListener("change", handleChange)

    // Clean up
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [query])

  return matches
}

/**
 * Hook to get a container query match
 * @param containerRef Reference to the container element
 * @param minWidth Minimum width in pixels
 */
export function useContainerQuery(containerRef: React.RefObject<HTMLElement>, minWidth: number): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const checkSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        setMatches(width >= minWidth)
      }
    }

    // Initial check
    checkSize()

    // Create observer
    const resizeObserver = new ResizeObserver(checkSize)

    // Observe container
    resizeObserver.observe(containerRef.current)

    // Clean up
    return () => resizeObserver.disconnect()
  }, [containerRef, minWidth])

  return matches
}

/**
 * Hook to get a responsive variant based on device type
 * @param variants Object with variants for different device types
 */
export function useResponsiveVariant<T extends string>(variants: Record<DeviceType, T>): T {
  const deviceType = useDeviceType()
  return variants[deviceType]
}

/**
 * Hook to get a combined device and breakpoint context
 */
export function useResponsiveContext() {
  const deviceType = useDeviceType()
  const breakpoint = useBreakpoint()
  const orientation = useOrientation()
  const viewportSize = useViewportSize()
  const hasTouch = useHasTouch()

  return useMemo(
    () => ({
      deviceType,
      breakpoint,
      orientation,
      viewportSize,
      hasTouch,
      isMobile: deviceType === "mobile",
      isTablet: deviceType === "tablet",
      isDesktop: deviceType === "desktop",
      isPortrait: orientation === "portrait",
      isLandscape: orientation === "landscape",
    }),
    [deviceType, breakpoint, orientation, viewportSize, hasTouch],
  )
}
