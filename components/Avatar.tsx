"use client"

import React, { useState } from "react"
import { cn } from "../lib/utils"
import { getSizeClasses } from "../lib/sizeUtils"
import type { BaseComponentProps } from "../lib/types"

// Define avatar sizes
export type AvatarSize = "small" | "large"

// Define avatar props
export interface AvatarProps extends BaseComponentProps {
  /**
   * The account name or email to display in the avatar
   */
  identifier?: string
  /**
   * The image URL to display in the avatar
   */
  src?: string
  /**
   * The alt text for the avatar image
   */
  alt?: string
  /**
   * The size of the avatar
   * @default "small"
   */
  size?: AvatarSize
}

/**
 * Cupcake Avatar component for displaying user avatars
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ identifier, src, alt = "Avatar", size = "small", className, "data-testid": dataTestId, ...props }, ref) => {
    const [imageError, setImageError] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)

    // Get the first 1 or 2 letters if identifier is provided
    const getInitials = (name: string) => {
      const parts = name.split(/[@\s.]+/)
      if (parts.length > 1) {
        // If there's an @ symbol, it's likely an email, take first letter of each part
        return (parts[0].charAt(0) + (parts[1] ? parts[1].charAt(0) : "")).toUpperCase()
      } else {
        // Otherwise take first 1-2 letters
        return name.substring(0, Math.min(2, name.length)).toUpperCase()
      }
    }

    const letters = identifier ? getInitials(identifier) : null
    const hasError = imageError || (!src && !letters)

    // Deterministic color generation based on identifier
    const getBackgroundColor = (identifier: string) => {
      // List of avatar background colors for equal distribution
      const colors = [
        "bg-[#FFD6CC]", // Light red
        "bg-[#FFE8CC]", // Light orange
        "bg-[#FFFBCC]", // Light yellow
        "bg-[#E3FFCC]", // Light lime
        "bg-[#CCF5FF]", // Light cyan
        "bg-[#CCD9FF]", // Light blue
        "bg-[#E5CCFF]", // Light purple
        "bg-[#FFCCF8]", // Light pink
        "bg-[#FFCCD6]", // Light rose
        "bg-[#D1F7C4]", // Light green
      ]

      // Simple hash function to get deterministic index
      let hash = 0
      for (let i = 0; i < identifier.length; i++) {
        hash = (hash << 5) - hash + identifier.charCodeAt(i)
        hash = hash & hash // Convert to 32bit integer
      }

      // Ensure positive index
      hash = Math.abs(hash)
      return colors[hash % colors.length]
    }

    // Size classes - slightly larger for touch targets
    const sizeClasses = getSizeClasses(size as any, {
      small: "w-8 h-8 text-xs",
      medium: "w-10 h-10 text-sm",
      large: "w-12 h-12 text-base",
    })

    // Handle touch events for mobile
    const handleTouchStart = () => {
      setShowTooltip(true)
    }

    const handleTouchEnd = () => {
      setTimeout(() => setShowTooltip(false), 1500) // Hide tooltip after 1.5s
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-full flex items-center justify-center font-medium text-[#181818]",
          "touch-manipulation", // Improves touch response
          sizeClasses,
          !hasError && identifier ? getBackgroundColor(identifier) : "bg-gray-200",
          className,
        )}
        data-cupcake-component="avatar"
        data-cupcake-size={size}
        data-testid={dataTestId}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        {...props}
      >
        {src && !imageError ? (
          <img
            src={src || "/placeholder.svg"}
            alt={alt}
            className="w-full h-full object-cover rounded-full"
            onError={() => setImageError(true)}
          />
        ) : hasError ? (
          <span className="text-gray-500">?</span>
        ) : letters ? (
          <span>{letters}</span>
        ) : (
          <span className="text-gray-500">?</span>
        )}

        {showTooltip && identifier && (
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
            {identifier}
          </div>
        )}
      </div>
    )
  },
)

Avatar.displayName = "Avatar"

// Define avatar group props
export interface AvatarGroupProps extends BaseComponentProps {
  /**
   * The maximum number of avatars to display
   * @default undefined (no limit)
   */
  max?: number
  /**
   * The children (Avatar components)
   */
  children: React.ReactNode
}

/**
 * Cupcake AvatarGroup component for displaying multiple avatars
 */
export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max, children, className, "data-testid": dataTestId, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children)

    // Calculate how many avatars to show based on max prop
    const visibleAvatars = max !== undefined ? childrenArray.slice(0, max - 1) : childrenArray
    const remainingCount = childrenArray.length - visibleAvatars.length

    // Only show the +n if there are remaining avatars
    const showRemainder = remainingCount > 0

    return (
      <div
        ref={ref}
        className={cn("flex flex-wrap -space-x-2 md:-space-x-3", className)}
        data-cupcake-component="avatar-group"
        data-testid={dataTestId}
        {...props}
      >
        {visibleAvatars.map((child, index) => {
          if (React.isValidElement(child)) {
            // Ensure we're only using small avatars in groups
            return React.cloneElement(child as React.ReactElement<AvatarProps>, {
              size: "small",
              className: cn("ring-1 ring-[#FFFFFF]", (child as React.ReactElement<AvatarProps>).props.className),
              key: index,
            })
          }
          return child
        })}

        {showRemainder && (
          <div
            className="relative rounded-full flex items-center justify-center bg-[#E3E3E3] text-[#181818] font-medium w-8 h-8 text-xs ring-1 ring-[#FFFFFF]"
            data-cupcake-component="avatar-remainder"
          >
            <span>+{remainingCount}</span>
          </div>
        )}
      </div>
    )
  },
)

AvatarGroup.displayName = "AvatarGroup"
