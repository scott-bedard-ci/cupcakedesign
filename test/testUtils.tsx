import type React from "react"
import { render, screen } from "@testing-library/react"
import { expect } from "@jest/globals"

export function testComponentRendering(Component: React.ComponentType<any>, props: any, expectedText: string) {
  render(<Component {...props}>{expectedText}</Component>)
  expect(screen.getByText(expectedText)).toBeInTheDocument()
}

export function testComponentVariants<T extends string>(
  Component: React.ComponentType<any>,
  variantProp: string,
  variants: T[],
  baseProps: any = {},
) {
  variants.forEach((variant) => {
    const props = { ...baseProps, [variantProp]: variant }
    const { container } = render(<Component {...props} />)
    expect(container.firstChild).toHaveAttribute(`data-cupcake-variant`, variant)
  })
}
