"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { cn } from "../lib/utils"
import { useSwipeGesture } from "../hooks/useSwipeGesture"
import { X } from "lucide-react"

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  position?: "bottom" | "left" | "right"
  className?: string
}

export function MobileDrawer({ isOpen, onClose, children, position = "bottom", className }: MobileDrawerProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  // Handle swipe gestures
  const { swipeHandlers } = useSwipeGesture({
    onSwipeDown: position === "bottom" ? onClose : undefined,
    onSwipeLeft: position === "right" ? onClose : undefined,
    onSwipeRight: position === "left" ? onClose : undefined,
  })

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Handle animation
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 300) // Match transition duration
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen && !isAnimating) return null

  const positionClasses = {
    bottom: "inset-x-0 bottom-0 rounded-t-xl translate-y-full",
    left: "inset-y-0 left-0 rounded-r-xl -translate-x-full",
    right: "inset-y-0 right-0 rounded-l-xl translate-x-full",
  }

  const activePositionClasses = {
    bottom: "translate-y-0",
    left: "translate-x-0",
    right: "translate-x-0",
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className={cn("absolute inset-0 bg-black transition-opacity duration-300", isOpen ? "opacity-50" : "opacity-0")}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "absolute bg-white shadow-lg transition-transform duration-300 ease-out",
          positionClasses[position],
          isOpen && activePositionClasses[position],
          position === "bottom" ? "max-h-[90vh]" : "max-w-[90vw]",
          className,
        )}
        {...swipeHandlers}
      >
        {/* Handle for bottom drawer */}
        {position === "bottom" && (
          <div className="w-full flex justify-center p-2">
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>
        )}

        {/* Close button for side drawers */}
        {position !== "bottom" && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
            aria-label="Close drawer"
          >
            <X size={20} />
          </button>
        )}

        {/* Content */}
        <div className="overflow-auto p-4">{children}</div>
      </div>
    </div>
  )
}
