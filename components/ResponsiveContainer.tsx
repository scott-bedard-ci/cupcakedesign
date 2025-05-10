"use client"

import type React from "react"
import { useRef } from "react"
import { cn } from "../lib/utils"
import { useContainerQuery, useResponsiveContext } from "../lib/responsiveUtils"

export interface ResponsiveContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Content to render when container is small (mobile-like)
   */
  smallContent?: React.ReactNode
  /**
   * Content to render when container is medium (tablet-like)
   */
  mediumContent?: React.ReactNode
  /**
   * Content to render when container is large (desktop-like)
   */
  largeContent?: React.ReactNode
  /**
   * Default content to render (if specific size content is not provided)
   */
  children?: React.ReactNode
  /**
   * Minimum width for medium size in pixels
   * @default 640
   */
  mediumMinWidth?: number
  /**
   * Minimum width for large size in pixels
   * @default 1024
   */
  largeMinWidth?: number
}

/**
 * A container component that renders different content based on its width
 * Uses container queries instead of viewport queries for more flexible responsive design
 */
export function ResponsiveContainer({
  smallContent,
  mediumContent,
  largeContent,
  children,
  mediumMinWidth = 640,
  largeMinWidth = 1024,
  className,
  ...props
}: ResponsiveContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isMedium = useContainerQuery(containerRef, mediumMinWidth)
  const isLarge = useContainerQuery(containerRef, largeMinWidth)

  // Determine which content to render
  const content = isLarge
    ? largeContent || mediumContent || smallContent || children
    : isMedium
      ? mediumContent || smallContent || children
      : smallContent || children

  return (
    <div ref={containerRef} className={cn(className)} {...props}>
      {content}
    </div>
  )
}

/**
 * A component that renders its children only on specific device types
 */
export function DeviceTypeRenderer({
  children,
  showOnMobile = true,
  showOnTablet = true,
  showOnDesktop = true,
  className,
  ...props
}: {
  children: React.ReactNode
  showOnMobile?: boolean
  showOnTablet?: boolean
  showOnDesktop?: boolean
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
  const { deviceType } = useResponsiveContext()

  // Check if we should render based on current device type
  const shouldRender =
    (deviceType === "mobile" && showOnMobile) ||
    (deviceType === "tablet" && showOnTablet) ||
    (deviceType === "desktop" && showOnDesktop)

  if (!shouldRender) return null

  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

/**
 * A component that renders its children only on specific orientations
 */
export function OrientationRenderer({
  children,
  showOnPortrait = true,
  showOnLandscape = true,
  className,
  ...props
}: {
  children: React.ReactNode
  showOnPortrait?: boolean
  showOnLandscape?: boolean
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
  const { orientation } = useResponsiveContext()

  // Check if we should render based on current orientation
  const shouldRender =
    (orientation === "portrait" && showOnPortrait) || (orientation === "landscape" && showOnLandscape)

  if (!shouldRender) return null

  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}

/**
 * A component that renders different content based on the current device type
 */
export function ResponsiveRenderer({
  mobileContent,
  tabletContent,
  desktopContent,
  fallbackContent,
  className,
  ...props
}: {
  mobileContent?: React.ReactNode
  tabletContent?: React.ReactNode
  desktopContent?: React.ReactNode
  fallbackContent?: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
  const { deviceType } = useResponsiveContext()

  // Determine which content to render
  let content
  switch (deviceType) {
    case "mobile":
      content = mobileContent || fallbackContent
      break
    case "tablet":
      content = tabletContent || fallbackContent
      break
    case "desktop":
      content = desktopContent || fallbackContent
      break
    default:
      content = fallbackContent
  }

  if (!content) return null

  return (
    <div className={className} {...props}>
      {content}
    </div>
  )
}
