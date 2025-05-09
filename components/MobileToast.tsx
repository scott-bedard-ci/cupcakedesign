"use client"

import { useState, useEffect } from "react"
import { cn } from "../lib/utils"
import { X, AlertCircle, Info, CheckCircle, AlertTriangle } from "lucide-react"
import { useSwipeGesture } from "../hooks/useSwipeGesture"
import { useReducedMotion } from "../lib/animationUtils"

export type ToastVariant = "error" | "info" | "success" | "warning"

interface ToastProps {
  variant?: ToastVariant
  title?: string
  message: string
  duration?: number
  onClose: () => void
  isVisible: boolean
  className?: string
}

export function MobileToast({
  variant = "info",
  title,
  message,
  duration = 5000,
  onClose,
  isVisible,
  className,
}: ToastProps) {
  const [isExiting, setIsExiting] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const isTestEnv = process.env.NODE_ENV === "test"

  // Handle swipe to dismiss
  const { swipeHandlers } = useSwipeGesture({
    onSwipeLeft: () => {
      handleClose()
    },
    onSwipeRight: () => {
      handleClose()
    },
  })

  // Auto-dismiss after duration
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        handleClose()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration])

  // Handle close with animation
  const handleClose = () => {
    // Call onClose immediately for tests or reduced motion preference
    if (isTestEnv || prefersReducedMotion) {
      onClose()
      return
    }

    // For normal users, animate the exit
    setIsExiting(true)
    const timer = setTimeout(() => {
      onClose()
      setIsExiting(false)
    }, 300) // Match transition duration

    return () => clearTimeout(timer)
  }

  // Variant-specific styles and icons
  const variantConfig = {
    error: {
      containerClass: "bg-[#fff1f1] border-[#da1e28]",
      icon: <AlertCircle className="w-5 h-5 text-[#da1e28]" />,
    },
    info: {
      containerClass: "bg-[#edf5ff] border-[#0043ce]",
      icon: <Info className="w-5 h-5 text-[#0043ce]" />,
    },
    success: {
      containerClass: "bg-[#defbe6] border-[#24a148]",
      icon: <CheckCircle className="w-5 h-5 text-[#24a148]" />,
    },
    warning: {
      containerClass: "bg-[#fff8e1] border-[#f1c21b]",
      icon: <AlertTriangle className="w-5 h-5 text-[#f1c21b]" />,
    },
  }

  if (!isVisible && !isExiting) return null

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 transform",
        isExiting ? "translate-y-full opacity-0" : "translate-y-0 opacity-100",
        className,
      )}
      {...swipeHandlers}
    >
      <div
        className={cn("flex items-start p-4 rounded-lg border shadow-lg", variantConfig[variant].containerClass)}
        role="alert"
      >
        <div className="flex-shrink-0 mr-3">{variantConfig[variant].icon}</div>
        <div className="flex-1 min-w-0">
          {title && <h3 className="font-semibold text-sm mb-1">{title}</h3>}
          <p className="text-sm">{message}</p>
        </div>
        <button
          onClick={handleClose}
          className="flex-shrink-0 ml-3 p-1 rounded-full hover:bg-black hover:bg-opacity-10 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Close toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
