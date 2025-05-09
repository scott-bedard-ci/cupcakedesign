import React from "react"
import type { BaseComponentProps } from "./types"

export function createComponent<P extends BaseComponentProps>(
  displayName: string,
  Component: React.ForwardRefRenderFunction<any, P>,
) {
  const WrappedComponent = React.forwardRef<any, P>((props, ref) => {
    const { className, "data-testid": dataTestId, ...rest } = props as any

    return Component(
      {
        className,
        "data-testid": dataTestId,
        "data-cupcake-component": displayName.toLowerCase(),
        ...rest,
      },
      ref,
    )
  })

  WrappedComponent.displayName = displayName
  return WrappedComponent
}
