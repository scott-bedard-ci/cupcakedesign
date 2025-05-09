import type React from "react"

// Common size types used across components
export type Size = "small" | "medium" | "large"

// Base props that all components share
export interface BaseComponentProps {
  className?: string
  "data-testid"?: string
}

// Props for components that have size variants
export interface SizeableComponentProps extends BaseComponentProps {
  size?: Size
}

// Props for components that can be dismissed
export interface DismissableComponentProps extends BaseComponentProps {
  showClose?: boolean
  onDismiss?: () => void
}

// Props for components with touch interactions
export interface TouchableComponentProps extends BaseComponentProps {
  touchFeedback?: boolean
}

// Props for components that can render as different elements
export interface PolymorphicComponentProps<E extends React.ElementType = React.ElementType> extends BaseComponentProps {
  as?: E
  children?: React.ReactNode
}
