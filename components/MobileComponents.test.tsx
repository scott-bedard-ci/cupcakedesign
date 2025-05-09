"use client"

import { render, screen, fireEvent } from "@testing-library/react"
import { renderWithViewport } from "../test/responsiveTestUtils"
import { SwipeableCard } from "./SwipeableCard"
import { MobileDrawer } from "./MobileDrawer"
import { MobileToast } from "./MobileToast"
import { BottomNavigation } from "./BottomNavigation"
import { Home, Search } from "lucide-react"

// Mock window.matchMedia for tests
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

describe("Mobile Components", () => {
  // SwipeableCard tests
  describe("SwipeableCard", () => {
    test("renders correctly", () => {
      render(
        <SwipeableCard>
          <div>Card Content</div>
        </SwipeableCard>,
      )

      expect(screen.getByText("Card Content")).toBeInTheDocument()
    })

    test("calls onSwipeLeft when swiped left", () => {
      const onSwipeLeft = jest.fn()
      render(
        <SwipeableCard onSwipeLeft={onSwipeLeft}>
          <div>Card Content</div>
        </SwipeableCard>,
      )

      // Mock touch events
      const card = screen.getByText("Card Content").parentElement
      if (card) {
        // Start touch
        fireEvent.touchStart(card, { touches: [{ clientX: 150, clientY: 0 }] })
        // Move touch left
        fireEvent.touchMove(card, { touches: [{ clientX: 50, clientY: 0 }] })
        // End touch
        fireEvent.touchEnd(card)

        // Expect onSwipeLeft to be called
        expect(onSwipeLeft).toHaveBeenCalled()
      }
    })
  })

  // MobileDrawer tests
  describe("MobileDrawer", () => {
    test("renders when isOpen is true", () => {
      render(
        <MobileDrawer isOpen={true} onClose={() => {}}>
          <div>Drawer Content</div>
        </MobileDrawer>,
      )

      expect(screen.getByText("Drawer Content")).toBeInTheDocument()
    })

    test("does not render when isOpen is false", () => {
      render(
        <MobileDrawer isOpen={false} onClose={() => {}}>
          <div>Drawer Content</div>
        </MobileDrawer>,
      )

      expect(screen.queryByText("Drawer Content")).not.toBeInTheDocument()
    })

    test("calls onClose when backdrop is clicked", () => {
      const onClose = jest.fn()
      render(
        <MobileDrawer isOpen={true} onClose={onClose}>
          <div>Drawer Content</div>
        </MobileDrawer>,
      )

      // Click the backdrop
      const backdrop = document.querySelector(".bg-black")
      if (backdrop) {
        fireEvent.click(backdrop)
        expect(onClose).toHaveBeenCalled()
      }
    })
  })

  // MobileToast tests
  describe("MobileToast", () => {
    test("renders when isVisible is true", () => {
      render(<MobileToast variant="success" message="Success message" isVisible={true} onClose={() => {}} />)

      expect(screen.getByText("Success message")).toBeInTheDocument()
    })

    test("does not render when isVisible is false", () => {
      render(<MobileToast variant="success" message="Success message" isVisible={false} onClose={() => {}} />)

      expect(screen.queryByText("Success message")).not.toBeInTheDocument()
    })

    test("calls onClose when close button is clicked", () => {
      const onClose = jest.fn()
      render(<MobileToast variant="success" message="Success message" isVisible={true} onClose={onClose} />)

      // Click the close button
      const closeButton = screen.getByLabelText("Close toast")
      fireEvent.click(closeButton)
      expect(onClose).toHaveBeenCalled()
    })
  })

  // BottomNavigation tests
  describe("BottomNavigation", () => {
    const navItems = [
      { label: "Home", href: "/", icon: <Home data-testid="home-icon" /> },
      { label: "Search", href: "/search", icon: <Search data-testid="search-icon" /> },
    ]

    test("renders all navigation items", () => {
      render(<BottomNavigation items={navItems} />)

      expect(screen.getByText("Home")).toBeInTheDocument()
      expect(screen.getByText("Search")).toBeInTheDocument()
      expect(screen.getByTestId("home-icon")).toBeInTheDocument()
      expect(screen.getByTestId("search-icon")).toBeInTheDocument()
    })

    test("is visible on mobile viewport", () => {
      renderWithViewport(<BottomNavigation items={navItems} />, "mobile")

      const nav = screen.getByRole("navigation")
      expect(nav).toBeVisible()
    })

    test("has correct links", () => {
      render(<BottomNavigation items={navItems} />)

      const homeLink = screen.getByText("Home").closest("a")
      const searchLink = screen.getByText("Search").closest("a")

      expect(homeLink).toHaveAttribute("href", "/")
      expect(searchLink).toHaveAttribute("href", "/search")
    })
  })
})
