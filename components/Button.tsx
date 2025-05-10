"use client"

import React from "react"
import { cn } from "../lib/utils"
import { createComponent } from "../lib/createComponent"
import { useTouchInteraction } from "../hooks/useTouchInteraction"
import type { IconComponentProps, SizeableComponentProps, TouchableComponentProps } from "../lib/types"

// Define button types
export type ButtonVariant = "primary" | "secondary" | "tertiary"

// Define button props
export interface ButtonProps
  extends SizeableComponentProps,
    TouchableComponentProps,
    IconComponentProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The type of button
   * @default "primary"
   */
  variant?: ButtonVariant
}

/**
 * Cupcake Button component for actions and navigation
 */
export const Button = createComponent<ButtonProps, HTMLButtonElement>(
  {
    displayName: "Button",
    defaultProps: {
      variant: "primary",
      size: "large",
      touchFeedback: true,
    },
    dataAttributes: ["variant", "size"],
  },
  (
    {
      variant = "primary",
      size = "large",
      disabled = false,
      leftIcon,
      rightIcon,
      iconOnly = false,
      className,
      children,
      touchFeedback = true,
      ...props
    },
    ref,
  ) => {
    // Determine if the button should have text
    const hasText = !iconOnly && children

    // Use touch interaction hook
    const { touchState, touchHandlers, touchClasses } = useTouchInteraction({
      feedbackEnabled: touchFeedback && !disabled,
    })

    // Size classes with improved touch targets
    const sizeClasses = {
      small: "text-sm py-1.5 px-3 rounded-md min-h-touch min-w-touch",
      medium: "text-base py-2 px-4 rounded-md min-h-touch min-w-touch",
      large: "text-base py-2.5 px-5 rounded-md min-h-touch-lg min-w-touch-lg",
    }

    // Variant classes using color tokens from Figma designs
    const variantClasses = {
      primary:
        "bg-[#1046DF] text-white border border-transparent hover:bg-[#0D3AB7] active:bg-[#0A2E92] disabled:bg-[#CCCCCC] disabled:text-[#666666] disabled:border-transparent",
      secondary:
        "bg-white border border-[#1046DF] text-[#1046DF] hover:bg-[#EBF0FF] active:bg-[#EBF0FF]/70 disabled:bg-white disabled:text-[#666666] disabled:border-[#CCCCCC]",
      tertiary:
        "bg-white border border-[#da1e28] text-[#da1e28] hover:bg-[#fff1f1] active:bg-[#fff1f1]/70 disabled:bg-white disabled:text-[#666666] disabled:border-[#CCCCCC]",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1046DF]",
          "touch-manipulation", // Improves touch response
          sizeClasses[size],
          variantClasses[variant],
          iconOnly && "p-2.5", // Slightly larger for touch targets
          touchClasses,
          className,
        )}
        disabled={disabled}
        {...touchHandlers}
        {...props}
      >
        {leftIcon && <span className={cn("flex-shrink-0", hasText && "mr-2")}>{leftIcon}</span>}
        {hasText && <span>{children}</span>}
        {rightIcon && <span className={cn("flex-shrink-0", hasText && "ml-2")}>{rightIcon}</span>}
      </button>
    )
  },
)

// Define button group props
export interface ButtonGroupProps extends SizeableComponentProps {
  /**
   * The children (Button components)
   */
  children: React.ReactNode
  /**
   * Whether the buttons should be stacked vertically
   * @default false
   */
  vertical?: boolean
}

/**
 * Cupcake ButtonGroup component for grouping related buttons
 */
export const ButtonGroup = createComponent<ButtonGroupProps>(
  {
    displayName: "ButtonGroup",
    defaultProps: {
      vertical: false,
    },
  },
  ({ children, vertical = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex", vertical ? "flex-col gap-3 md:gap-4" : "flex-wrap md:flex-row gap-3 md:gap-4", className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return child
          }
          return null
        })}
      </div>
    )
  },
)
