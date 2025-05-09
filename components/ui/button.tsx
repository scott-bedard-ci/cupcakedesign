"use client"

import React from "react"
import { cn } from "@/lib/utils"

// Define button types
export type ButtonType = "primary" | "secondary" | "tertiary"

// Define button props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The type of button
   * @default "primary"
   */
  variant?: ButtonType
  /**
   * The size of the button
   * @default "large"
   */
  size?: "small" | "medium" | "large"
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean
  /**
   * Icon to display on the left side of the button
   */
  leftIcon?: React.ReactNode
  /**
   * Icon to display on the right side of the button
   */
  rightIcon?: React.ReactNode
  /**
   * Whether the button should only display an icon
   * @default false
   */
  iconOnly?: boolean
  /**
   * The button's children
   */
  children?: React.ReactNode
}

/**
 * Cupcake Button component for actions and navigation
 */
const ButtonComponent = (
  {
    variant = "primary",
    size = "large",
    disabled = false,
    leftIcon,
    rightIcon,
    iconOnly = false,
    className,
    children,
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) => {
  // Determine if the button should have text
  const hasText = !iconOnly && children

  // Direct styling approach
  const variantClasses = {
    primary:
      "bg-[#FF69B4] text-white hover:bg-[#FF1493] active:bg-[#C71585] disabled:bg-[#CCCCCC] disabled:text-[#666666]",
    secondary:
      "bg-white border border-[#FF69B4] text-[#FF69B4] hover:bg-[#FFF0F5] active:bg-[#FFB6C1] disabled:border-[#CCCCCC] disabled:text-[#666666]",
    tertiary:
      "bg-white border border-[#da1e28] text-[#da1e28] hover:bg-[#fff1f1] active:bg-[#ffd7d9] disabled:border-[#CCCCCC] disabled:text-[#666666]",
  }

  // Size classes
  const sizeClasses = {
    small: "text-sm py-1.5 px-3 rounded-md",
    medium: "text-base py-2 px-4 rounded-md",
    large: "text-base py-2.5 px-5 rounded-md",
  }

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF69B4]",
        "touch-manipulation", // Improves touch response
        sizeClasses[size],
        variantClasses[variant],
        iconOnly && "p-2.5", // Slightly larger for touch targets
        className,
      )}
      disabled={disabled}
      data-cupcake-component="button"
      data-cupcake-variant={variant}
      data-cupcake-size={size}
      {...props}
    >
      {leftIcon && <span className={cn("flex-shrink-0", hasText && "mr-2")}>{leftIcon}</span>}
      {hasText && <span>{children}</span>}
      {rightIcon && <span className={cn("flex-shrink-0", hasText && "ml-2")}>{rightIcon}</span>}
    </button>
  )
}

export const Button = React.forwardRef(ButtonComponent)
Button.displayName = "Button"
