"use client"

import { useState, useRef } from "react"
import {
  useResponsiveContext,
  useViewportSize,
  responsiveText,
  responsiveGridCols,
  responsiveSpacing,
  fluidTypography,
} from "../../lib/responsiveUtils"
import {
  ResponsiveContainer,
  DeviceTypeRenderer,
  OrientationRenderer,
  ResponsiveRenderer,
} from "../../components/ResponsiveContainer"
import { ResponsiveProvider, useResponsive } from "../../components/ResponsiveProvider"
import { Button } from "../../components/Button"
import { cn } from "../../lib/utils"

export default function ResponsiveDemoPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const responsiveContext = useResponsiveContext()
  const { width, height } = useViewportSize()

  return (
    <ResponsiveProvider>
      <div className="p-4 md:p-8">
        <h1 className={responsiveText("heading")}>Responsive Utilities Demo</h1>

        <section className="mb-8">
          <h2 className={responsiveText("subheading")}>Current Device Information</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p>
              <strong>Device Type:</strong> {responsiveContext.deviceType}
            </p>
            <p>
              <strong>Breakpoint:</strong> {responsiveContext.breakpoint}
            </p>
            <p>
              <strong>Orientation:</strong> {responsiveContext.orientation}
            </p>
            <p>
              <strong>Viewport Size:</strong> {width}px × {height}px
            </p>
            <p>
              <strong>Touch Enabled:</strong> {responsiveContext.hasTouch ? "Yes" : "No"}
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className={responsiveText("subheading")}>Responsive Grid</h2>
          <p className="mb-4">This grid changes columns based on device size</p>

          <div className={cn("grid gap-4", responsiveGridCols(1, 2, 3))}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-primary text-white p-4 rounded-lg text-center">
                Item {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className={responsiveText("subheading")}>Device-Specific Content</h2>

          <DeviceTypeRenderer showOnMobile={true} showOnTablet={false} showOnDesktop={false}>
            <div className="bg-alert-error-background border border-alert-error p-4 rounded-lg mb-4">
              This content only shows on mobile devices
            </div>
          </DeviceTypeRenderer>

          <DeviceTypeRenderer showOnMobile={false} showOnTablet={true} showOnDesktop={false}>
            <div className="bg-alert-info-background border border-alert-info p-4 rounded-lg mb-4">
              This content only shows on tablet devices
            </div>
          </DeviceTypeRenderer>

          <DeviceTypeRenderer showOnMobile={false} showOnTablet={false} showOnDesktop={true}>
            <div className="bg-alert-success-background border border-alert-success p-4 rounded-lg mb-4">
              This content only shows on desktop devices
            </div>
          </DeviceTypeRenderer>
        </section>

        <section className="mb-8">
          <h2 className={responsiveText("subheading")}>Orientation-Specific Content</h2>

          <OrientationRenderer showOnPortrait={true} showOnLandscape={false}>
            <div className="bg-alert-warning-background border border-alert-warning p-4 rounded-lg mb-4">
              This content only shows in portrait orientation
            </div>
          </OrientationRenderer>

          <OrientationRenderer showOnPortrait={false} showOnLandscape={true}>
            <div className="bg-alert-info-background border border-alert-info p-4 rounded-lg mb-4">
              This content only shows in landscape orientation
            </div>
          </OrientationRenderer>
        </section>

        <section className="mb-8">
          <h2 className={responsiveText("subheading")}>Responsive Container</h2>
          <p className="mb-4">Resize this container to see different content based on container width</p>

          <div
            className="border border-gray-300 p-4 rounded-lg resize-x overflow-auto"
            style={{ maxWidth: "100%", minWidth: "200px" }}
          >
            <ResponsiveContainer
              smallContent={<div className="bg-alert-error-background p-4 rounded-lg">Small Container Content</div>}
              mediumContent={<div className="bg-alert-info-background p-4 rounded-lg">Medium Container Content</div>}
              largeContent={<div className="bg-alert-success-background p-4 rounded-lg">Large Container Content</div>}
            />
          </div>
        </section>

        <section className="mb-8">
          <h2 className={responsiveText("subheading")}>Responsive Renderer</h2>

          <ResponsiveRenderer
            mobileContent={<div className="bg-alert-error-background p-4 rounded-lg mb-4">Mobile Content</div>}
            tabletContent={<div className="bg-alert-info-background p-4 rounded-lg mb-4">Tablet Content</div>}
            desktopContent={<div className="bg-alert-success-background p-4 rounded-lg mb-4">Desktop Content</div>}
          />
        </section>

        <section className="mb-8">
          <h2 className={responsiveText("subheading")}>Fluid Typography</h2>

          <p style={{ fontSize: fluidTypography(16, 24) }} className="mb-4">
            This text scales smoothly from 16px on mobile to 24px on desktop
          </p>

          <h3 style={{ fontSize: fluidTypography(20, 36) }} className="font-bold mb-4">
            This heading scales from 20px to 36px
          </h3>
        </section>

        <section className="mb-8">
          <h2 className={responsiveText("subheading")}>Responsive Spacing</h2>

          <div className={cn(responsiveSpacing("p", "", 4, 6, 8), "bg-gray-100 rounded-lg mb-4")}>
            <p>This element has padding that increases on larger screens</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className={cn(responsiveSpacing("m", "b", 2, 4, 6), "bg-gray-100 p-2 rounded-lg")}>
              Item with responsive bottom margin
            </div>
            <div className="bg-gray-100 p-2 rounded-lg">Next item</div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className={responsiveText("subheading")}>Responsive Hook Usage</h2>

          <ResponsiveHookDemo />
        </section>
      </div>
    </ResponsiveProvider>
  )
}

// Component that demonstrates using the responsive hooks
function ResponsiveHookDemo() {
  const responsive = useResponsive()
  const [count, setCount] = useState(0)

  // Use responsive values for button size and variant
  const buttonSize = responsive.isMobile ? "small" : responsive.isTablet ? "medium" : "large"
  const buttonVariant = responsive.isMobile ? "secondary" : "primary"

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="mb-4">This component uses responsive hooks to adapt its UI</p>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <Button variant={buttonVariant} size={buttonSize} onClick={() => setCount(count + 1)}>
          Count: {count}
        </Button>

        <p>
          Button is using {buttonSize} size and {buttonVariant} variant based on device type
        </p>
      </div>
    </div>
  )
}
