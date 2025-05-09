"use client"

import type React from "react"
import { useState, useRef } from "react"
import { cn } from "../lib/utils"
import { X, Check } from "lucide-react"

interface SwipeableCardProps {
  children: React.ReactNode
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  leftActionColor?: string
  rightActionColor?: string
  leftActionIcon?: React.ReactNode
  rightActionIcon?: React.ReactNode
  leftActionText?: string
  rightActionText?: string
  className?: string
}

export function SwipeableCard({
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
}: SwipeableCardProps) {
  const [offset, setOffset] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const cardWidth = useRef(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    if (cardRef.current) {
      cardWidth.current = cardRef.current.offsetWidth
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!cardRef.current) return

    const touch = e.touches[0]
    const cardRect = cardRef.current.getBoundingClientRect()
    const touchX = touch.clientX - cardRect.left

    // Calculate offset from center
    const centerOffset = touchX - cardRect.width / 2

    // Apply resistance as we move further from center
    const resistance = 0.5
    const newOffset = centerOffset * resistance

    setOffset(newOffset)
  }

  const handleTouchEnd = () => {
    const threshold = cardWidth.current * 0.4

    if (offset > threshold && onSwipeRight) {
      onSwipeRight()
    } else if (offset < -threshold && onSwipeLeft) {
      onSwipeLeft()
    }

    // Reset position with animation
    setOffset(0)
  }

  // Calculate opacity for action indicators
  const leftOpacity = Math.min(Math.abs(Math.min(offset, 0)) / 100, 1)
  const rightOpacity = Math.min(Math.max(offset, 0) / 100, 1)

  // Calculate rotation based on offset
  const rotation = (offset / cardWidth.current) * 10

  return (
    <div className="relative overflow-hidden">
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
        ref={cardRef}
        className={cn("bg-white rounded-lg shadow-md transition-transform touch-manipulation", className)}
        style={{
          transform: `translateX(${offset}px) rotate(${rotation}deg)`,
          transition: offset === 0 ? "transform 0.3s ease-out" : "none",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
    </div>
  )
}
