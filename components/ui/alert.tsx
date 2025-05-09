"use client"

import React from "react"
import { X, AlertCircle, Info, CheckCircle, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"

// Alert variants
export type AlertVariant = "error" | "informational" | "success" | "warning"

// Alert properties
export interface AlertProps {
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
  /**
   * Additional CSS classes
   */
  className?: string
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
    // Map alert variant to styles and icons
    const variantMap = {
      error: {
        containerClasses: "border-alert-error bg-alert-error-background text-alert-error-foreground",
        iconClasses: "text-alert-error",
        defaultIcon: <AlertCircle className="w-4 h-4 md:w-5 md:h-5" />,
      },
      informational: {
        containerClasses: "border-alert-info bg-alert-info-background text-alert-info-foreground",
        iconClasses: "text-alert-info",
        defaultIcon: <Info className="w-4 h-4 md:w-5 md:h-5" />,
      },
      success: {
        containerClasses: "border-alert-success bg-alert-success-background text-alert-success-foreground",
        iconClasses: "text-alert-success",
        defaultIcon: <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />,
      },
      warning: {
        containerClasses: "border-alert-warning bg-alert-warning-background text-alert-warning-foreground",
        iconClasses: "text-alert-warning",
        defaultIcon: <AlertTriangle className="w-4 h-4 md:w-5 md:h-5" />,
      },
    }

    // Get styles for current variant
    const currentVariant = variantMap[variant]

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "flex items-start border rounded-md p-3 md:p-4",
          currentVariant.containerClasses,
          fill ? "w-full" : "inline-flex",
          className,
        )}
        data-cupcake-component="alert"
        data-cupcake-variant={variant}
        {...props}
      >
        {showIcon && (
          <div className={cn("flex-shrink-0 mr-2 md:mr-3", currentVariant.iconClasses)}>
            {icon || currentVariant.defaultIcon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          {title && <h3 className="text-sm md:text-base font-semibold mb-0.5 md:mb-1">{title}</h3>}
          {children && <div className="text-xs md:text-sm">{children}</div>}
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

Alert.displayName = "Alert"

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const AlertTitle = React.forwardRef<HTMLHeadingElement, AlertTitleProps>(({ className, ...props }, ref) => {
  return <h3 ref={ref} className={cn("text-sm md:text-base font-semibold mb-0.5 md:mb-1", className)} {...props} />
})
AlertTitle.displayName = "AlertTitle"

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("text-xs md:text-sm", className)} {...props} />
  },
)
AlertDescription.displayName = "AlertDescription"
