import { render, screen, fireEvent } from "@testing-library/react"
import { Alert } from "./Alert"

describe("Alert Component", () => {
  // Rendering tests
  test("renders with default props", () => {
    render(<Alert>Test alert message</Alert>)
    expect(screen.getByRole("alert")).toBeInTheDocument()
    expect(screen.getByText("Test alert message")).toBeInTheDocument()
  })

  test("renders with title", () => {
    render(<Alert title="Alert Title">Test alert message</Alert>)
    expect(screen.getByText("Alert Title")).toBeInTheDocument()
    expect(screen.getByText("Test alert message")).toBeInTheDocument()
  })

  // Variant tests
  test.each(["error", "informational", "success", "warning"] as const)("renders %s variant correctly", (variant) => {
    render(
      <Alert variant={variant} title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Alert`}>
        This is a {variant} alert
      </Alert>,
    )

    const alertElement = screen.getByRole("alert")
    expect(alertElement).toHaveAttribute("data-cupcake-variant", variant)
    expect(screen.getByText(`${variant.charAt(0).toUpperCase() + variant.slice(1)} Alert`)).toBeInTheDocument()
    expect(screen.getByText(`This is a ${variant} alert`)).toBeInTheDocument()
  })

  // Icon tests
  test("renders with icon by default", () => {
    render(<Alert>Alert with icon</Alert>)
    // Check that there's an SVG element (icon)
    expect(document.querySelector("svg")).toBeInTheDocument()
  })

  test("does not render icon when showIcon is false", () => {
    render(<Alert showIcon={false}>Alert without icon</Alert>)
    // There should be no SVG element
    expect(document.querySelector("svg")).not.toBeInTheDocument()
  })

  // Close button tests
  test("calls onDismiss when close button is clicked", () => {
    const handleDismiss = jest.fn()
    render(<Alert onDismiss={handleDismiss}>Dismissible alert</Alert>)

    const dismissButton = screen.getByRole("button", { name: /dismiss alert/i })
    fireEvent.click(dismissButton)

    expect(handleDismiss).toHaveBeenCalledTimes(1)
  })

  test("does not render close button when showClose is false", () => {
    render(<Alert showClose={false}>Non-dismissible alert</Alert>)

    expect(screen.queryByRole("button", { name: /dismiss alert/i })).not.toBeInTheDocument()
  })

  // Fill width test
  test("has full width by default", () => {
    render(<Alert>Full width alert</Alert>)
    expect(screen.getByRole("alert")).toHaveClass("w-full")
  })

  test("has inline width when fill is false", () => {
    render(<Alert fill={false}>Inline width alert</Alert>)
    expect(screen.getByRole("alert")).toHaveClass("inline-flex")
    expect(screen.getByRole("alert")).not.toHaveClass("w-full")
  })

  // Content tests
  test("renders without title", () => {
    render(<Alert>Alert without title</Alert>)
    expect(screen.queryByRole("heading")).not.toBeInTheDocument()
    expect(screen.getByText("Alert without title")).toBeInTheDocument()
  })

  test("renders without children", () => {
    const { container } = render(<Alert title="Alert Title" />)
    expect(screen.getByText("Alert Title")).toBeInTheDocument()
    // The div that would contain children should be empty
    const textSmElement = container.querySelector(".alert-content-empty")
    expect(textSmElement).not.toBeNull()
    expect(textSmElement).toBeEmptyDOMElement()
  })

  // Custom icon test
  test("renders with custom icon", () => {
    const CustomIcon = () => <span data-testid="custom-icon">🔔</span>
    render(<Alert icon={<CustomIcon />}>Alert with custom icon</Alert>)

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument()
  })

  // Accessibility tests
  test("has appropriate ARIA attributes", () => {
    render(<Alert>Accessible alert</Alert>)

    const alertElement = screen.getByRole("alert")
    expect(alertElement).toBeInTheDocument()
  })

  // Snapshot test
  test("matches snapshot", () => {
    const { container } = render(
      <Alert title="Snapshot Test" variant="success" onDismiss={() => {}}>
        This is a snapshot test
      </Alert>,
    )

    // Update the snapshot
    expect(container).toMatchSnapshot()
  })
})
