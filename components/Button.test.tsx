"use client"
import { render, screen, fireEvent } from "@testing-library/react"
import { Button, ButtonGroup } from "./Button"
import { testComponentVariants } from "../test/testUtils"

describe("Button Component", () => {
  // Rendering tests
  test("renders with default props", () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole("button", { name: "Click me" })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute("data-cupcake-variant", "primary")
    expect(button).toHaveAttribute("data-cupcake-size", "large")
  })

  // Variant tests
  test("renders variants correctly", () => {
    testComponentVariants(Button, "variant", ["primary", "secondary", "tertiary"], {
      children: "Test Button",
    })
  })

  // Size tests
  test.each(["small", "medium", "large"] as const)("renders %s size correctly", (size) => {
    render(<Button size={size}>{size} button</Button>)
    const button = screen.getByRole("button", { name: `${size} button` })
    expect(button).toHaveAttribute("data-cupcake-size", size)
  })

  // Disabled state test
  test("renders disabled state correctly", () => {
    render(<Button disabled>Disabled button</Button>)
    const button = screen.getByRole("button", { name: "Disabled button" })
    expect(button).toBeDisabled()
  })

  // Icon tests
  test("renders with left icon", () => {
    render(<Button leftIcon={<span data-testid="left-icon" />}>Button with left icon</Button>)

    expect(screen.getByTestId("left-icon")).toBeInTheDocument()
    expect(screen.getByText("Button with left icon")).toBeInTheDocument()
  })

  test("renders with right icon", () => {
    render(<Button rightIcon={<span data-testid="right-icon" />}>Button with right icon</Button>)

    expect(screen.getByTestId("right-icon")).toBeInTheDocument()
    expect(screen.getByText("Button with right icon")).toBeInTheDocument()
  })

  test("renders icon-only button", () => {
    render(<Button leftIcon={<span data-testid="icon" />} iconOnly aria-label="Icon button" />)

    expect(screen.getByTestId("icon")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Icon button" })).toBeInTheDocument()
  })

  // Event tests
  test("calls onClick when clicked", () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable button</Button>)

    const button = screen.getByRole("button", { name: "Clickable button" })
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  // Accessibility tests
  test("has appropriate ARIA attributes for icon-only button", () => {
    render(<Button leftIcon={<span data-testid="icon" />} iconOnly aria-label="Accessible icon button" />)

    const button = screen.getByRole("button", { name: "Accessible icon button" })
    expect(button).toBeInTheDocument()
  })

  // Snapshot test
  test("matches snapshot", () => {
    const { container } = render(
      <Button variant="primary" size="large">
        Snapshot Test
      </Button>,
    )

    expect(container).toMatchSnapshot()
  })
})

describe("ButtonGroup Component", () => {
  // Rendering tests
  test("renders button group with children", () => {
    render(
      <ButtonGroup>
        <Button data-testid="button-1">Button 1</Button>
        <Button data-testid="button-2">Button 2</Button>
      </ButtonGroup>,
    )

    expect(screen.getByTestId("button-1")).toBeInTheDocument()
    expect(screen.getByTestId("button-2")).toBeInTheDocument()
  })

  test("renders vertical button group", () => {
    render(
      <ButtonGroup vertical data-testid="button-group">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </ButtonGroup>,
    )

    const buttonGroup = screen.getByTestId("button-group")
    expect(buttonGroup).toHaveClass("flex-col")
  })

  // Snapshot test
  test("matches snapshot", () => {
    const { container } = render(
      <ButtonGroup>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </ButtonGroup>,
    )

    expect(container).toMatchSnapshot()
  })
})
