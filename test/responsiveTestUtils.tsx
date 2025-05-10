import type React from "react"
import type { RenderOptions } from "@testing-library/react"
import { render } from "@testing-library/react"

// Device viewport sizes
export const viewports = {
  mobile: {
    width: 375,
    height: 667,
  },
  tablet: {
    width: 768,
    height: 1024,
  },
  desktop: {
    width: 1280,
    height: 800,
  },
}

// Type for viewport sizes
export type Viewport = keyof typeof viewports

// Mock window resize for testing
export function mockWindowResize(viewport: Viewport) {
  const { width, height } = viewports[viewport]

  // Mock window dimensions
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  })

  Object.defineProperty(window, "innerHeight", {
    writable: true,
    configurable: true,
    value: height,
  })

  // Dispatch resize event
  window.dispatchEvent(new Event("resize"))
}

// Render component with specific viewport
export function renderWithViewport(
  ui: React.ReactElement,
  viewport: Viewport,
  options?: Omit<RenderOptions, "wrapper">,
) {
  mockWindowResize(viewport)
  return render(ui, options)
}

// Test component across multiple viewports
export function testAcrossViewports(ui: React.ReactElement, testFn: (viewport: Viewport) => void) {
  Object.keys(viewports).forEach((viewport) => {
    mockWindowResize(viewport as Viewport)
    testFn(viewport as Viewport)
  })
}
