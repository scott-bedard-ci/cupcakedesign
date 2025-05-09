"use client"

import React from "react"
import { cn } from "../lib/utils"
import { getSizeClasses } from "../lib/sizeUtils"
import type { SizeableComponentProps, TouchableComponentProps } from "../lib/types"
import { useTouchFeedback } from "../hooks/useTouchFeedback"

// Define button types
export type ButtonType = "primary" | "secondary" | "tertiary"

// Define button props
export interface ButtonProps extends SizeableComponentProps, TouchableComponentProps {
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
    touchFeedback = true,
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) => {
  // Determine if the button should have text
  const hasText = !iconOnly && children

  // Use touch feedback hook
  const { touchProps, touchClass } = useTouchFeedback(touchFeedback && !disabled)

  // Size classes with improved touch targets
  const sizeClasses = getSizeClasses(size, {
    small: "text-sm py-1.5 px-3 rounded-md min-h-[44px] min-w-[44px]",
    medium: "text-base py-2 px-4 rounded-md min-h-[44px] min-w-[44px]",
    large: "text-base py-2.5 px-5 rounded-md min-h-[48px] min-w-[48px]",
  })

  // Variant classes using color tokens from tailwind.config.js
  const variantClasses = {
    primary:
      "bg-primary text-white hover:bg-primary-hover active:bg-primary-active disabled:bg-disabled disabled:text-disabled-foreground",
    secondary:
      "bg-white border border-primary text-primary hover:bg-secondary-hover active:bg-secondary-active disabled:border-disabled disabled:text-disabled-foreground",
    tertiary:
      "bg-white border border-destructive text-destructive hover:bg-destructive-hover/10 active:bg-destructive-active/20 disabled:border-disabled disabled:text-disabled-foreground",
  }

  // Touch active styles
  const touchActiveStyles = {
    primary: "touch-active:bg-primary-active touch-active:scale-98",
    secondary: "touch-active:bg-secondary-active touch-active:scale-98",
    tertiary: "touch-active:bg-destructive-active/20 touch-active:scale-98",
  }

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
        "touch-manipulation", // Improves touch response
        sizeClasses,
        variantClasses[variant],
        !disabled && touchActiveStyles[variant],
        iconOnly && "p-2.5", // Slightly larger for touch targets
        touchClass,
        className,
      )}
      disabled={disabled}
      data-cupcake-component="button"
      data-cupcake-variant={variant}
      data-cupcake-size={size}
      {...touchProps}
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
