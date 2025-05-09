"use client"

import React from "react"
import { cn } from "../lib/utils"
import { getSizeClasses } from "../lib/sizeUtils"
import type { SizeableComponentProps } from "../lib/types"

// Define button types
export type ButtonType = "primary" | "secondary" | "tertiary"

// Define button props
export interface ButtonProps extends SizeableComponentProps {
  /**
   * The type of button
   * @default "primary"
   */
  variant?: ButtonType
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
  /**
   * onClick handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
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

  // Get size classes with touch-friendly adjustments
  const sizeClasses = getSizeClasses(size, {
    small: "text-sm py-1.5 px-3 rounded-md",
    medium: "text-base py-2 px-4 rounded-md",
    large: "text-base py-2.5 px-5 rounded-md",
  })

  // Direct styling approach instead of using the color system
  const variantClasses = {
    primary:
      "bg-[#1046DF] text-white hover:bg-[#0D3AB7] active:bg-[#0A2E92] disabled:bg-[#CCCCCC] disabled:text-[#666666]",
    secondary:
      "bg-white border border-[#1046DF] text-[#1046DF] hover:bg-[#EBF0FF] active:bg-[#D1DFFF] disabled:border-[#CCCCCC] disabled:text-[#666666]",
    tertiary:
      "bg-white border border-[#da1e28] text-[#da1e28] hover:bg-[#fff1f1] active:bg-[#ffd7d9] disabled:border-[#CCCCCC] disabled:text-[#666666]",
  }

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1046DF]",
        "touch-manipulation", // Improves touch response
        sizeClasses,
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
const ButtonGroupComponent = (
  { children, vertical = false, className, ...props }: ButtonGroupProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) => {
  return (
    <div
      ref={ref}
      className={cn("flex", vertical ? "flex-col gap-3 md:gap-4" : "flex-wrap md:flex-row gap-3 md:gap-4", className)}
      data-cupcake-component="button-group"
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
}

export const ButtonGroup = React.forwardRef(ButtonGroupComponent)
ButtonGroup.displayName = "ButtonGroup"
