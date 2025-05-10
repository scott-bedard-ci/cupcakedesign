"use client"

import type React from "react"
import { X, AlertCircle, Info, CheckCircle, AlertTriangle } from "lucide-react"
import { cn } from "../lib/utils"
import { createComponent } from "../lib/createComponent"
import type { DismissableComponentProps } from "../lib/types"

// Alert variants
export type AlertVariant = "error" | "informational" | "success" | "warning"

// Alert properties
export interface AlertProps extends DismissableComponentProps, React.HTMLAttributes<HTMLDivElement> {
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
export const Alert = createComponent<AlertProps>(
  {
    displayName: "Alert",
    defaultProps: {
      variant: "error",
      showIcon: true,
      showClose: true,
      fill: true,
    },
    dataAttributes: ["variant"],
  },
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
        container: "border-alert-error bg-alert-error-background text-alert-error-foreground",
        icon: "text-alert-error",
        defaultIcon: <AlertCircle className="w-4 h-4 md:w-5 md:h-5" />,
      },
      informational: {
        container: "border-alert-info bg-alert-info-background text-alert-info-foreground",
        icon: "text-alert-info",
        defaultIcon: <Info className="w-4 h-4 md:w-5 md:h-5" />,
      },
      success: {
        container: "border-alert-success bg-alert-success-background text-alert-success-foreground",
        icon: "text-alert-success",
        defaultIcon: <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />,
      },
      warning: {
        container: "border-alert-warning bg-alert-warning-background text-alert-warning-foreground",
        icon: "text-alert-warning",
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
        {...props}
      >
        {showIcon && (
          <div className={cn("flex-shrink-0 mr-2 md:mr-3", currentStyle.icon)}>{icon || currentStyle.defaultIcon}</div>
        )}
        <div className="flex-1 min-w-0">
          {title && <h3 className="text-sm md:text-base font-semibold mb-0.5 md:mb-1">{title}</h3>}
          {children ? (
            <div className="text-xs md:text-sm">{children}</div>
          ) : (
            <div className="text-sm alert-content-empty"></div>
          )}
        </div>
        {showClose && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 ml-2 md:ml-3 hover:opacity-70 transition-opacity p-2 rounded-full flex items-center justify-center min-h-touch min-w-touch"
            aria-label="Dismiss alert"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        )}
      </div>
    )
  },
)
