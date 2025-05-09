"use client"

import React, { useState, useRef, useEffect } from "react"
import { cn } from "../lib/utils"
import { getSizeClasses } from "../lib/sizeUtils"
import type { SizeableComponentProps, TouchableComponentProps } from "../lib/types"
import { useTouchFeedback } from "../hooks/useTouchFeedback"

// Define avatar sizes
export type AvatarSize = "small" | "medium" | "large"

// Define avatar props
export interface AvatarProps extends SizeableComponentProps, TouchableComponentProps {
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
  (
    {
      identifier,
      src,
      alt = "Avatar",
      size = "small",
      className,
      "data-testid": dataTestId,
      touchFeedback = true,
      ...props
    },
    ref,
  ) => {
    const [imageError, setImageError] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false)
    const tooltipTimeoutRef = useRef<NodeJS.Timeout>()
    const { touchProps } = useTouchFeedback(touchFeedback)

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

    // Size classes - ensuring touch targets are at least 44x44px on mobile
    const sizeClasses = getSizeClasses(size, {
      small: "w-8 h-8 text-xs md:w-10 md:h-10",
      medium: "w-10 h-10 text-sm md:w-12 md:h-12",
      large: "w-12 h-12 text-base md:w-14 md:h-14",
    })

    // Handle tooltip display
    const handleShowTooltip = () => {
      setShowTooltip(true)
    }

    const handleHideTooltip = () => {
      tooltipTimeoutRef.current = setTimeout(() => {
        setShowTooltip(false)
      }, 300)
    }

    // Clear timeout on unmount
    useEffect(() => {
      return () => {
        if (tooltipTimeoutRef.current) {
          clearTimeout(tooltipTimeoutRef.current)
        }
      }
    }, [])

    // Handle touch events
    const handleTouchStart = () => {
      handleShowTooltip()
    }

    const handleTouchEnd = () => {
      setTimeout(() => handleHideTooltip(), 1500)
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-full flex items-center justify-center font-medium text-avatar-text",
          "touch-manipulation", // Improves touch response
          sizeClasses,
          !hasError && identifier ? getBackgroundColor(identifier) : "bg-avatar-background-default",
          className,
        )}
        data-cupcake-component="avatar"
        data-cupcake-size={size}
        data-testid={dataTestId}
        onMouseEnter={handleShowTooltip}
        onMouseLeave={handleHideTooltip}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label={identifier || alt}
        {...touchProps}
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
          <span className="text-avatar-placeholder" aria-hidden="true">
            ?
          </span>
        ) : letters ? (
          <span aria-hidden="true">{letters}</span>
        ) : (
          <span className="text-avatar-placeholder" aria-hidden="true">
            ?
          </span>
        )}

        {showTooltip && identifier && (
          <div
            className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-avatar-tooltip-background text-avatar-tooltip-text text-xs rounded py-1 px-2 whitespace-nowrap z-10"
            role="tooltip"
          >
            {identifier}
          </div>
        )}
      </div>
    )
  },
)

Avatar.displayName = "Avatar"

// Define avatar group props
export interface AvatarGroupProps extends SizeableComponentProps {
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
              className: cn("ring-1 ring-avatar-ring", (child as React.ReactElement<AvatarProps>).props.className),
              key: index,
            })
          }
          return child
        })}

        {showRemainder && (
          <div
            className="relative rounded-full flex items-center justify-center bg-avatar-remainder-background text-avatar-remainder-text font-medium w-8 h-8 text-xs ring-1 ring-avatar-ring md:w-10 md:h-10"
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
