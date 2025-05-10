"use client"

import { useState, useEffect } from "react"
import { cn } from "../lib/utils"
import { X, AlertCircle, Info, CheckCircle, AlertTriangle } from "lucide-react"
import { useSwipeGesture } from "../hooks/useTouchInteraction"
import { useReducedMotion } from "../lib/animationUtils"
import { createComponent } from "../lib/createComponent"

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

export const MobileToast = createComponent<ToastProps>(
  {
    displayName: "MobileToast",
    defaultProps: {
      variant: "info",
      duration: 5000,
    },
    dataAttributes: ["variant"],
  },
  ({ variant = "info", title, message, duration = 5000, onClose, isVisible, className, ...props }, ref) => {
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
        containerClass: "bg-alert-error-background border-alert-error",
        icon: <AlertCircle className="w-5 h-5 text-alert-error" />,
      },
      info: {
        containerClass: "bg-alert-info-background border-alert-info",
        icon: <Info className="w-5 h-5 text-alert-info" />,
      },
      success: {
        containerClass: "bg-alert-success-background border-alert-success",
        icon: <CheckCircle className="w-5 h-5 text-alert-success" />,
      },
      warning: {
        containerClass: "bg-alert-warning-background border-alert-warning",
        icon: <AlertTriangle className="w-5 h-5 text-alert-warning" />,
      },
    }

    if (!isVisible && !isExiting) return null

    return (
      <div
        ref={ref}
        className={cn(
          "fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 transform",
          isExiting ? "translate-y-full opacity-0" : "translate-y-0 opacity-100",
          className,
        )}
        {...swipeHandlers}
        {...props}
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
            className="flex-shrink-0 ml-3 p-1 rounded-full hover:bg-black hover:bg-opacity-10 min-w-touch min-h-touch flex items-center justify-center"
            aria-label="Close toast"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    )
  },
)
