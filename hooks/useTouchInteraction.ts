"use client"

import type React from "react"

import { useState, useCallback, useRef, useEffect } from "react"

export interface TouchOptions {
  feedbackEnabled?: boolean
  swipeEnabled?: boolean
  swipeThreshold?: number
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  onTap?: () => void
  onLongPress?: () => void
  longPressDelay?: number
  preventDefaultTouchMove?: boolean
}

export interface TouchState {
  isTouched: boolean
  isLongPressed: boolean
  swipeDirection: "none" | "left" | "right" | "up" | "down"
  touchDuration: number
}

/**
 * Hook for handling touch interactions
 * @param options Touch interaction options
 * @returns Touch state and handlers
 */
export function useTouchInteraction(options: TouchOptions = {}) {
  const {
    feedbackEnabled = true,
    swipeEnabled = false,
    swipeThreshold = 50,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    onTap,
    onLongPress,
    longPressDelay = 500,
    preventDefaultTouchMove = false,
  } = options

  const [touchState, setTouchState] = useState<TouchState>({
    isTouched: false,
    isLongPressed: false,
    swipeDirection: "none",
    touchDuration: 0,
  })

  const touchStart = useRef<{ x: number; y: number; time: number } | null>(null)
  const touchEnd = useRef<{ x: number; y: number; time: number } | null>(null)
  const longPressTimer = useRef<NodeJS.Timeout | null>(null)
  // Safely check for test environment without accessing process.env directly
  const isTestEnv = useRef(false)

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
        longPressTimer.current = null
      }
    }
  }, [])

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!feedbackEnabled && !swipeEnabled && !onTap && !onLongPress) return

      const touch = e.touches[0]
      touchStart.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
      }

      setTouchState((prev) => ({ ...prev, isTouched: true }))

      if (onLongPress) {
        longPressTimer.current = setTimeout(() => {
          setTouchState((prev) => ({ ...prev, isLongPressed: true }))
          onLongPress()
        }, longPressDelay)
      }
    },
    [feedbackEnabled, swipeEnabled, onLongPress, longPressDelay, onTap],
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (preventDefaultTouchMove) {
        e.preventDefault()
      }

      if (!swipeEnabled || !touchStart.current) return

      const touch = e.touches[0]
      touchEnd.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
      }

      // If moved significantly, cancel long press
      if (longPressTimer.current) {
        const deltaX = Math.abs(touchEnd.current.x - touchStart.current.x)
        const deltaY = Math.abs(touchEnd.current.y - touchStart.current.y)

        if (deltaX > 10 || deltaY > 10) {
          clearTimeout(longPressTimer.current)
          longPressTimer.current = null
        }
      }
    },
    [swipeEnabled, preventDefaultTouchMove],
  )

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
        longPressTimer.current = null
      }

      if (!touchStart.current) return

      const endTouch = e.changedTouches[0]
      touchEnd.current = {
        x: endTouch.clientX,
        y: endTouch.clientY,
        time: Date.now(),
      }

      const touchDuration = touchEnd.current.time - touchStart.current.time

      // Handle swipe
      if (swipeEnabled && touchEnd.current) {
        const deltaX = touchEnd.current.x - touchStart.current.x
        const deltaY = touchEnd.current.y - touchStart.current.y
        const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY)

        let swipeDirection: "none" | "left" | "right" | "up" | "down" = "none"

        if (isHorizontalSwipe) {
          if (deltaX > swipeThreshold) {
            swipeDirection = "right"
            onSwipeRight?.()
          } else if (deltaX < -swipeThreshold) {
            swipeDirection = "left"
            onSwipeLeft?.()
          }
        } else {
          if (deltaY > swipeThreshold) {
            swipeDirection = "down"
            onSwipeDown?.()
          } else if (deltaY < -swipeThreshold) {
            swipeDirection = "up"
            onSwipeUp?.()
          }
        }

        setTouchState((prev) => ({ ...prev, swipeDirection }))
      }

      // Handle tap
      if (touchDuration < 300 && !touchState.isLongPressed) {
        // Check if it was a tap (minimal movement)
        if (touchEnd.current) {
          const deltaX = Math.abs(touchEnd.current.x - touchStart.current.x)
          const deltaY = Math.abs(touchEnd.current.y - touchStart.current.y)

          if (deltaX < 10 && deltaY < 10) {
            onTap?.()
          }
        }
      }

      // Reset state
      setTouchState({
        isTouched: false,
        isLongPressed: false,
        swipeDirection: "none",
        touchDuration,
      })

      touchStart.current = null
      touchEnd.current = null
    },
    [swipeEnabled, swipeThreshold, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, onTap, touchState.isLongPressed],
  )

  const handleTouchCancel = useCallback(() => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }

    setTouchState({
      isTouched: false,
      isLongPressed: false,
      swipeDirection: "none",
      touchDuration: 0,
    })

    touchStart.current = null
    touchEnd.current = null
  }, [])

  return {
    touchState,
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onTouchCancel: handleTouchCancel,
    },
    touchClasses: touchState.isTouched ? "touch-active" : "",
  }
}

/**
 * Hook for detecting swipe gestures
 * @param options Swipe options
 * @returns Swipe handlers and state
 */
export function useSwipeGesture(
  options: {
    threshold?: number
    onSwipeLeft?: () => void
    onSwipeRight?: () => void
    onSwipeUp?: () => void
    onSwipeDown?: () => void
    preventDefaultTouchMove?: boolean
  } = {},
) {
  const { touchState, touchHandlers } = useTouchInteraction({
    swipeEnabled: true,
    swipeThreshold: options.threshold || 50,
    onSwipeLeft: options.onSwipeLeft,
    onSwipeRight: options.onSwipeRight,
    onSwipeUp: options.onSwipeUp,
    onSwipeDown: options.onSwipeDown,
    preventDefaultTouchMove: options.preventDefaultTouchMove,
  })

  return {
    swiping: touchState.isTouched,
    swipeDirection: touchState.swipeDirection,
    swipeHandlers: touchHandlers,
  }
}

/**
 * Hook for detecting long press gestures
 * @param options Long press options
 * @returns Long press handlers and state
 */
export function useLongPress(
  options: {
    onLongPress: () => void
    onTap?: () => void
    delay?: number
  } = { onLongPress: () => {} },
) {
  const { touchState, touchHandlers } = useTouchInteraction({
    onLongPress: options.onLongPress,
    onTap: options.onTap,
    longPressDelay: options.delay || 500,
  })

  return {
    isPressed: touchState.isTouched,
    isLongPressed: touchState.isLongPressed,
    longPressHandlers: touchHandlers,
  }
}
