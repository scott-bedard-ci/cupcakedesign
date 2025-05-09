import { render, screen, fireEvent } from "@testing-library/react"
import { Avatar, AvatarGroup } from "./Avatar"

describe("Avatar Component", () => {
  // Rendering tests
  test("renders with identifier (account name)", () => {
    render(<Avatar identifier="John Doe" data-testid="avatar" />)
    const avatar = screen.getByTestId("avatar")
    expect(avatar).toBeInTheDocument()
    expect(screen.getByText("JD")).toBeInTheDocument()
  })

  test("renders with identifier (email address)", () => {
    render(<Avatar identifier="john.doe@example.com" data-testid="avatar" />)
    const avatar = screen.getByTestId("avatar")
    expect(avatar).toBeInTheDocument()
    expect(screen.getByText("JD")).toBeInTheDocument()
  })

  test("renders with image when src is provided", () => {
    render(<Avatar src="/test-image.jpg" alt="Test User" data-testid="avatar" />)
    const avatar = screen.getByTestId("avatar")
    const imgElement = screen.getByAltText("Test User")
    expect(avatar).toBeInTheDocument()
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute("src", "/test-image.jpg")
  })

  test("renders fallback when no identifier or src provided", () => {
    render(<Avatar data-testid="avatar" />)
    const avatar = screen.getByTestId("avatar")
    expect(avatar).toBeInTheDocument()
    expect(screen.getByText("?")).toBeInTheDocument()
  })

  // Size tests
  test.each(["small", "large"] as const)("renders %s size correctly", (size) => {
    render(<Avatar identifier="JD" size={size} data-testid="avatar" />)
    const avatar = screen.getByTestId("avatar")
    expect(avatar).toHaveAttribute("data-cupcake-size", size)
  })

  // Tooltip test
  test("shows tooltip on hover", () => {
    render(<Avatar identifier="John Doe" data-testid="avatar" />)
    const avatar = screen.getByTestId("avatar")

    // Tooltip should not be visible initially
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument()

    // Hover over avatar
    fireEvent.mouseEnter(avatar)

    // Tooltip should now be visible
    expect(screen.getByText("John Doe")).toBeInTheDocument()

    // Mouse leave
    fireEvent.mouseLeave(avatar)

    // Tooltip should be hidden again
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument()
  })

  // Snapshot test
  test("matches snapshot", () => {
    const { container } = render(<Avatar identifier="John Doe" />)
    expect(container).toMatchSnapshot()
  })
})

describe("AvatarGroup Component", () => {
  // Rendering tests
  test("renders avatar group with children", () => {
    render(
      <AvatarGroup data-testid="avatar-group">
        <Avatar identifier="JD" data-testid="avatar-1" />
        <Avatar identifier="AB" data-testid="avatar-2" />
      </AvatarGroup>,
    )

    const avatarGroup = screen.getByTestId("avatar-group")
    expect(avatarGroup).toBeInTheDocument()
    expect(screen.getByTestId("avatar-1")).toBeInTheDocument()
    expect(screen.getByTestId("avatar-2")).toBeInTheDocument()
  })

  test("limits visible avatars based on max prop", () => {
    render(
      <AvatarGroup max={2} data-testid="avatar-group">
        <Avatar identifier="JD" data-testid="avatar-1" />
        <Avatar identifier="AB" data-testid="avatar-2" />
        <Avatar identifier="CD" data-testid="avatar-3" />
      </AvatarGroup>,
    )

    const avatarGroup = screen.getByTestId("avatar-group")
    expect(avatarGroup).toBeInTheDocument()
    expect(screen.getByTestId("avatar-1")).toBeInTheDocument()
    expect(screen.queryByTestId("avatar-2")).not.toBeInTheDocument()
    expect(screen.queryByTestId("avatar-3")).not.toBeInTheDocument()
    expect(screen.getByText("+2")).toBeInTheDocument()
  })

  test("does not show remainder when max is not provided", () => {
    render(
      <AvatarGroup data-testid="avatar-group">
        <Avatar identifier="JD" data-testid="avatar-1" />
        <Avatar identifier="AB" data-testid="avatar-2" />
        <Avatar identifier="CD" data-testid="avatar-3" />
      </AvatarGroup>,
    )

    const avatarGroup = screen.getByTestId("avatar-group")
    expect(avatarGroup).toBeInTheDocument()
    expect(screen.getByTestId("avatar-1")).toBeInTheDocument()
    expect(screen.getByTestId("avatar-2")).toBeInTheDocument()
    expect(screen.getByTestId("avatar-3")).toBeInTheDocument()
    expect(screen.queryByText("+")).not.toBeInTheDocument()
  })

  // Snapshot test
  test("matches snapshot", () => {
    const { container } = render(
      <AvatarGroup max={3}>
        <Avatar identifier="JD" />
        <Avatar identifier="AB" />
        <Avatar identifier="CD" />
        <Avatar identifier="EF" />
      </AvatarGroup>,
    )

    expect(container).toMatchSnapshot()
  })
})
