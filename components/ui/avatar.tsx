"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"

// Define avatar sizes
export type AvatarSize = "small" | "large"

// Define avatar props
export interface AvatarProps {
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
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Cupcake Avatar component for displaying user avatars
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ identifier, src, alt = "Avatar", size = "small", className, ...props }, ref) => {
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
        "bg-avatar-background-red",
        "bg-avatar-background-orange",
        "bg-avatar-background-yellow",
        "bg-avatar-background-lime",
        "bg-avatar-background-cyan",
        "bg-avatar-background-blue",
        "bg-avatar-background-purple",
        "bg-avatar-background-pink",
        "bg-avatar-background-rose",
        "bg-avatar-background-green",
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

    // Size classes
    const sizeClasses = {
      small: "w-8 h-8 text-xs",
      large: "w-12 h-12 text-base",
    }

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
          "relative rounded-full flex items-center justify-center font-medium text-avatar-text",
          "touch-manipulation", // Improves touch response
          sizeClasses[size],
          !hasError && identifier ? getBackgroundColor(identifier) : "bg-avatar-background-default",
          className,
        )}
        data-cupcake-component="avatar"
        data-cupcake-size={size}
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
          <span className="text-avatar-placeholder">?</span>
        ) : letters ? (
          <span>{letters}</span>
        ) : (
          <span className="text-avatar-placeholder">?</span>
        )}

        {showTooltip && identifier && (
          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-avatar-tooltip-background text-avatar-tooltip-text text-xs rounded py-1 px-2 whitespace-nowrap z-10">
            {identifier}
          </div>
        )}
      </div>
    )
  },
)

Avatar.displayName = "Avatar"

// Define avatar group props
export interface AvatarGroupProps {
  /**
   * The maximum number of avatars to display
   * @default undefined (no limit)
   */
  max?: number
  /**
   * The children (Avatar components)
   */
  children: React.ReactNode
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Cupcake AvatarGroup component for displaying multiple avatars
 */
export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max, children, className, ...props }, ref) => {
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
        {...props}
      >
        {visibleAvatars.map((child, index) => {
          if (React.isValidElement(child)) {
            // Ensure we're only using small avatars in groups
            return React.cloneElement(child as React.ReactElement<AvatarProps>, {
              size: "small",
              className: cn("ring-1 ring-avatar-ring", (child as React.ReactElement<AvatarProps>).props.className),
              key: index,
            })
          }
          return child
        })}

        {showRemainder && (
          <div
            className="relative rounded-full flex items-center justify-center bg-avatar-remainder-background text-avatar-remainder-text font-medium w-8 h-8 text-xs ring-1 ring-avatar-ring"
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
