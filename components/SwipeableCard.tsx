"use client"

import type React from "react"
import { cn } from "../lib/utils"
import { X, Check } from "lucide-react"
import { useSwipeGesture } from "../hooks/useTouchInteraction"
import { createComponent } from "../lib/createComponent"

interface SwipeableCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  leftActionColor?: string
  rightActionColor?: string
  leftActionIcon?: React.ReactNode
  rightActionIcon?: React.ReactNode
  leftActionText?: string
  rightActionText?: string
}

export const SwipeableCard = createComponent<SwipeableCardProps>(
  {
    displayName: "SwipeableCard",
    defaultProps: {
      leftActionColor: "#da1e28",
      rightActionColor: "#24a148",
      leftActionIcon: <X />,
      rightActionIcon: <Check />,
      leftActionText: "Dismiss",
      rightActionText: "Accept",
    },
  },
  (
    {
      children,
      onSwipeLeft,
      onSwipeRight,
      leftActionColor = "#da1e28",
      rightActionColor = "#24a148",
      leftActionIcon = <X />,
      rightActionIcon = <Check />,
      leftActionText = "Dismiss",
      rightActionText = "Accept",
      className,
      ...props
    },
    ref,
  ) => {
    const { swipeDirection, swiping, swipeHandlers } = useSwipeGesture({
      onSwipeLeft,
      onSwipeRight,
      threshold: 50,
    })

    // Calculate opacity for action indicators
    const leftOpacity = swipeDirection === "left" ? 1 : 0
    const rightOpacity = swipeDirection === "right" ? 1 : 0

    // Calculate rotation based on swipe direction
    const rotation = swipeDirection === "left" ? -5 : swipeDirection === "right" ? 5 : 0

    return (
      <div className="relative overflow-hidden" ref={ref}>
        {/* Left action indicator */}
        <div
          className="absolute inset-y-0 left-0 flex items-center justify-start px-4 transition-opacity"
          style={{ opacity: leftOpacity, color: leftActionColor }}
        >
          <div className="flex flex-col items-center">
            {leftActionIcon}
            <span className="text-sm mt-1">{leftActionText}</span>
          </div>
        </div>

        {/* Right action indicator */}
        <div
          className="absolute inset-y-0 right-0 flex items-center justify-end px-4 transition-opacity"
          style={{ opacity: rightOpacity, color: rightActionColor }}
        >
          <div className="flex flex-col items-center">
            {rightActionIcon}
            <span className="text-sm mt-1">{rightActionText}</span>
          </div>
        </div>

        {/* Card */}
        <div
          className={cn("bg-white rounded-lg shadow-md transition-transform touch-manipulation", className)}
          style={{
            transform: `translateX(0) rotate(${rotation}deg)`,
            transition: !swiping ? "transform 0.3s ease-out" : "none",
          }}
          {...swipeHandlers}
          {...props}
        >
          {children}
        </div>
      </div>
    )
  },
)
