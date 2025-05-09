"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"

export interface SwipeOptions {
  threshold?: number
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
}

export function useSwipeGesture({
  threshold = 50,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
}: SwipeOptions = {}) {
  const [swiping, setSwiping] = useState(false)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const touchEnd = useRef<{ x: number; y: number } | null>(null)

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchEnd.current = null
    touchStart.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    }
    setSwiping(true)
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!touchStart.current) return
    touchEnd.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    }
  }, [])

  const onTouchEnd = useCallback(() => {
    if (!touchStart.current || !touchEnd.current) return

    const distX = touchEnd.current.x - touchStart.current.x
    const distY = touchEnd.current.y - touchStart.current.y
    const isHorizontalSwipe = Math.abs(distX) > Math.abs(distY)

    if (isHorizontalSwipe) {
      if (distX > threshold && onSwipeRight) {
        onSwipeRight()
      } else if (distX < -threshold && onSwipeLeft) {
        onSwipeLeft()
      }
    } else {
      if (distY > threshold && onSwipeDown) {
        onSwipeDown()
      } else if (distY < -threshold && onSwipeUp) {
        onSwipeUp()
      }
    }

    // Reset
    touchStart.current = null
    touchEnd.current = null
    setSwiping(false)
  }, [threshold, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown])

  return {
    swiping,
    swipeHandlers: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    },
  }
}
