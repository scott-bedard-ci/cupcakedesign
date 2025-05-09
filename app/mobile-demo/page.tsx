"use client"

import { useState } from "react"
import { SwipeableCard } from "../../components/SwipeableCard"
import { MobileDrawer } from "../../components/MobileDrawer"
import { MobileToast } from "../../components/MobileToast"
import { BottomNavigation } from "../../components/BottomNavigation"
import { DevicePreview } from "../../components/DevicePreview"
import { Button } from "../../components/Button"
import { Home, Search, Bell, User } from "lucide-react"
import { useResponsive } from "../../hooks/useResponsive"
import { useOrientation } from "../../hooks/useOrientation"

export default function MobileDemoPage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerPosition, setDrawerPosition] = useState<"bottom" | "left" | "right">("bottom")
  const [toastVisible, setToastVisible] = useState(false)
  const [toastVariant, setToastVariant] = useState<"error" | "info" | "success" | "warning">("success")

  const { isMobile, isTablet, isDesktop } = useResponsive()
  const orientation = useOrientation()

  const navItems = [
    { label: "Home", href: "/mobile-demo", icon: <Home size={24} /> },
    { label: "Search", href: "/mobile-demo/search", icon: <Search size={24} /> },
    { label: "Notifications", href: "/mobile-demo/notifications", icon: <Bell size={24} /> },
    { label: "Profile", href: "/mobile-demo/profile", icon: <User size={24} /> },
  ]

  const handleSwipeLeft = () => {
    setToastVariant("error")
    setToastVisible(true)
  }

  const handleSwipeRight = () => {
    setToastVariant("success")
    setToastVisible(true)
  }

  const openDrawer = (position: "bottom" | "left" | "right") => {
    setDrawerPosition(position)
    setDrawerOpen(true)
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Mobile Components Demo</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Device Information</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>
            <strong>Current Device:</strong> {isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop"}
          </p>
          <p>
            <strong>Orientation:</strong> {orientation}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Swipeable Card</h2>
        <p className="mb-4 text-gray-600">Swipe left to dismiss or right to accept</p>

        <SwipeableCard onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight} className="max-w-sm mx-auto">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Swipeable Card Example</h3>
            <p className="text-gray-600">This card can be swiped left or right to trigger actions.</p>
          </div>
        </SwipeableCard>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Mobile Drawers</h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => openDrawer("bottom")}>Bottom Drawer</Button>
          <Button onClick={() => openDrawer("left")}>Left Drawer</Button>
          <Button onClick={() => openDrawer("right")}>Right Drawer</Button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Mobile Toast</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            onClick={() => {
              setToastVariant("success")
              setToastVisible(true)
            }}
          >
            Success Toast
          </Button>
          <Button
            onClick={() => {
              setToastVariant("error")
              setToastVisible(true)
            }}
          >
            Error Toast
          </Button>
          <Button
            onClick={() => {
              setToastVariant("info")
              setToastVisible(true)
            }}
          >
            Info Toast
          </Button>
          <Button
            onClick={() => {
              setToastVariant("warning")
              setToastVisible(true)
            }}
          >
            Warning Toast
          </Button>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-xl font-semibold mb-4">Device Preview</h2>
        <DevicePreview>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Preview Content</h3>
            <p className="mb-4">This content is displayed within the device preview.</p>
            <Button>Example Button</Button>
          </div>
        </DevicePreview>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} position={drawerPosition}>
        <h3 className="text-lg font-semibold mb-4">
          {drawerPosition.charAt(0).toUpperCase() + drawerPosition.slice(1)} Drawer
        </h3>
        <p className="mb-4">This is a mobile-optimized drawer that can be swiped to dismiss.</p>
        <Button onClick={() => setDrawerOpen(false)}>Close Drawer</Button>
      </MobileDrawer>

      {/* Mobile Toast */}
      <MobileToast
        variant={toastVariant}
        title={`${toastVariant.charAt(0).toUpperCase() + toastVariant.slice(1)} Message`}
        message={`This is a ${toastVariant} toast notification that can be swiped to dismiss.`}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      {/* Bottom Navigation */}
      <BottomNavigation items={navItems} />
    </div>
  )
}
