"use client"

import React from "react"
import { X, AlertCircle, Info, CheckCircle, AlertTriangle } from "lucide-react"
import { cn } from "../lib/utils"
import type { BaseComponentProps } from "../lib/types"

// Alert variants
export type AlertVariant = "error" | "informational" | "success" | "warning"

// Alert properties
export interface AlertProps extends BaseComponentProps {
  /**
   * The title of the alert
   */
  title?: string
  /**
   * The message content of the alert
   */
  children?: React.ReactNode
  /**
   * The variant of the alert
   * @default "error"
   */
  variant?: AlertVariant
  /**
   * Whether to show the icon
   * @default true
   */
  showIcon?: boolean
  /**
   * Whether to show the close button
   * @default true
   */
  showClose?: boolean
  /**
   * Callback function when the alert is dismissed
   */
  onDismiss?: () => void
  /**
   * Custom icon to display in the alert
   */
  icon?: React.ReactNode
  /**
   * Whether the alert should fill the width of its container
   * @default true
   */
  fill?: boolean
}

/**
 * Cupcake Alert component for displaying important messages to users
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      title,
      children,
      variant = "error",
      showIcon = true,
      showClose = true,
      onDismiss,
      icon,
      className,
      fill = true,
      ...props
    },
    ref,
  ) => {
    // Map alert variant to styles
    const variantStyles = {
      error: {
        container: "border-[#da1e28] bg-[#fff1f1] text-[#171717]",
        icon: "text-[#da1e28]",
        defaultIcon: <AlertCircle className="w-4 h-4 md:w-5 md:h-5" />,
      },
      informational: {
        container: "border-[#0043ce] bg-[#edf5ff] text-[#171717]",
        icon: "text-[#0043ce]",
        defaultIcon: <Info className="w-4 h-4 md:w-5 md:h-5" />,
      },
      success: {
        container: "border-[#24a148] bg-[#defbe6] text-[#171717]",
        icon: "text-[#24a148]",
        defaultIcon: <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />,
      },
      warning: {
        container: "border-[#f1c21b] bg-[#fff8e1] text-[#171717]",
        icon: "text-[#f1c21b]",
        defaultIcon: <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />,
      },
    }

    // Get styles for current variant
    const currentStyle = variantStyles[variant]

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "flex items-start border rounded-md p-3 md:p-4",
          currentStyle.container,
          fill ? "w-full" : "inline-flex",
          className,
        )}
        data-cupcake-component="alert"
        data-cupcake-variant={variant}
        {...props}
      >
        {showIcon && <div className="flex-shrink-0 mr-2 md:mr-3">{icon || currentStyle.defaultIcon}</div>}
        <div className="flex-1 min-w-0">
          {title && <h3 className="text-sm md:text-base font-semibold mb-0.5 md:mb-1">{title}</h3>}
          {children && <div className="text-xs md:text-sm">{children}</div>}
        </div>
        {showClose && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 ml-2 md:ml-3 hover:opacity-70 transition-opacity"
            aria-label="Dismiss alert"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        )}
      </div>
    )
  },
)

Alert.displayName = "Alert"
