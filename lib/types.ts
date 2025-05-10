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

// Props for components with variants
export interface VariantComponentProps<V extends string> extends BaseComponentProps {
  variant?: V
}

// Props for components with icons
export interface IconComponentProps extends BaseComponentProps {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  iconOnly?: boolean
}

// Props for components with responsive behavior
export interface ResponsiveComponentProps extends BaseComponentProps {
  responsive?: boolean
  mobileOnly?: boolean
  desktopOnly?: boolean
}

// Props for components with accessibility features
export interface AccessibleComponentProps extends BaseComponentProps {
  "aria-label"?: string
  "aria-labelledby"?: string
  "aria-describedby"?: string
  "aria-expanded"?: boolean
  "aria-haspopup"?: boolean | "dialog" | "grid" | "listbox" | "menu" | "tree"
  "aria-controls"?: string
  "aria-owns"?: string
  "aria-hidden"?: boolean
}

// Props for form components
export interface FormComponentProps extends BaseComponentProps {
  name?: string
  value?: string | number | readonly string[]
  defaultValue?: string | number | readonly string[]
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  disabled?: boolean
  required?: boolean
  readOnly?: boolean
  placeholder?: string
  autoFocus?: boolean
  autoComplete?: string
  form?: string
  maxLength?: number
  minLength?: number
  pattern?: string
}

// Props for interactive components
export interface InteractiveComponentProps extends BaseComponentProps {
  onClick?: React.MouseEventHandler
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  onKeyDown?: React.KeyboardEventHandler
  onKeyUp?: React.KeyboardEventHandler
  onFocus?: React.FocusEventHandler
  onBlur?: React.FocusEventHandler
  tabIndex?: number
  disabled?: boolean
}
