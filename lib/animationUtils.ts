"use client"

import { useEffect, useState } from "react"

// Check if reduced motion is preferred
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return prefersReducedMotion
}

// Get appropriate animation duration based on device and preferences
export function getAnimationDuration(
  defaultDuration: number,
  isMobile: boolean,
  prefersReducedMotion: boolean,
): number {
  if (prefersReducedMotion) {
    return 0 // No animation for reduced motion
  }

  if (isMobile) {
    return Math.min(defaultDuration, 200) // Faster animations on mobile
  }

  return defaultDuration
}

// CSS transition string generator
export function getTransitionStyle(properties: string[] = ["all"], duration = 300, easing = "ease"): string {
  return properties.map((prop) => `${prop} ${duration}ms ${easing}`).join(", ")
}
