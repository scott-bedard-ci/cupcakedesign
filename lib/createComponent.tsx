import React from "react"
import type { BaseComponentProps } from "./types"
import { cn } from "./utils"

export interface ComponentOptions<P> {
  displayName: string
  defaultProps?: Partial<P>
  dataAttributes?: string[]
}

/**
 * Creates a standardized component with consistent props handling, data attributes, and ref forwarding
 * @param options Component configuration options
 * @param Component The component implementation function
 * @returns A React component with standardized behavior
 */
export function createComponent<P extends BaseComponentProps, E extends React.ElementType = "div">(
  options: ComponentOptions<P>,
  Component: React.ForwardRefRenderFunction<any, P>,
) {
  const { displayName, defaultProps, dataAttributes = [] } = options

  const WrappedComponent = React.forwardRef<any, P>((props, ref) => {
    const { className, "data-testid": dataTestId, ...rest } = props as any
    const mergedProps = { ...defaultProps, ...rest } as P

    // Build data attributes
    const dataProps: Record<string, any> = {
      "data-cupcake-component": displayName.toLowerCase(),
      "data-testid": dataTestId,
    }

    // Add any component-specific data attributes
    dataAttributes.forEach((attr) => {
      if (mergedProps[attr as keyof P] !== undefined) {
        dataProps[`data-cupcake-${attr}`] = mergedProps[attr as keyof P]
      }
    })

    return Component(
      {
        className: cn(className),
        ...dataProps,
        ...mergedProps,
      },
      ref,
    )
  })

  WrappedComponent.displayName = displayName
  return WrappedComponent
}

/**
 * Creates a polymorphic component that can render as different HTML elements
 * @param options Component configuration options
 * @param Component The component implementation function
 * @returns A polymorphic React component
 */
export function createPolymorphicComponent<P extends BaseComponentProps, D extends React.ElementType = "div">(
  options: ComponentOptions<P & { as?: React.ElementType }>,
  Component: React.ForwardRefRenderFunction<any, P & { as?: React.ElementType }>,
) {
  const { displayName, defaultProps, dataAttributes = [] } = options

  const WrappedComponent = React.forwardRef<any, P & { as?: React.ElementType }>((props, ref) => {
    const { className, "data-testid": dataTestId, as, ...rest } = props as any
    const mergedProps = { ...defaultProps, ...rest } as P

    // Build data attributes
    const dataProps: Record<string, any> = {
      "data-cupcake-component": displayName.toLowerCase(),
      "data-testid": dataTestId,
    }

    // Add any component-specific data attributes
    dataAttributes.forEach((attr) => {
      if (mergedProps[attr as keyof P] !== undefined) {
        dataProps[`data-cupcake-${attr}`] = mergedProps[attr as keyof P]
      }
    })

    return Component(
      {
        className: cn(className),
        as,
        ...dataProps,
        ...mergedProps,
      },
      ref,
    )
  })

  WrappedComponent.displayName = displayName
  return WrappedComponent
}
