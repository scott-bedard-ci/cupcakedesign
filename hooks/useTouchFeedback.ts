"use client"

import { useState, useCallback } from "react"

export function useTouchFeedback(enabled = true) {
  const [isTouched, setIsTouched] = useState(false)

  const handleTouchStart = useCallback(() => {
    if (enabled) {
      setIsTouched(true)
    }
  }, [enabled])

  const handleTouchEnd = useCallback(() => {
    if (enabled) {
      setIsTouched(false)
    }
  }, [enabled])

  const handleTouchCancel = useCallback(() => {
    if (enabled) {
      setIsTouched(false)
    }
  }, [enabled])

  return {
    isTouched,
    touchProps: {
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onTouchCancel: handleTouchCancel,
    },
    touchClass: isTouched ? "touch-active" : "",
  }
}
