"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../lib/utils"
import { useState } from "react"
import { Menu, X } from "lucide-react"

interface DemoLayoutProps {
  children: React.ReactNode
}

export default function DemoLayout({ children }: DemoLayoutProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Alert", href: "/demo" },
    { name: "Avatar", href: "/avatar-demo" },
    { name: "Button", href: "/button-demo" },
  ]

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile header with menu button */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <Link href="/" className="text-2xl font-bold text-[#1046DF]">
          Cupcake
        </Link>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100"
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar - fixed on mobile when open, always visible on desktop */}
      <div
        className={cn(
          "bg-white border-r border-gray-200 z-20",
          "transition-all duration-300 ease-in-out",
          "md:static md:w-64 md:block",
          sidebarOpen ? "fixed inset-0 w-full h-full md:h-auto" : "hidden",
        )}
      >
        {/* Close button for mobile only */}
        <div className="md:hidden flex justify-between items-center p-4 border-b border-gray-200">
          <Link href="/" className="text-2xl font-bold text-[#1046DF]">
            Cupcake
          </Link>
          <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100" aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        {/* Desktop logo */}
        <div className="hidden md:block mb-8 p-4">
          <Link href="/" className="text-2xl font-bold text-[#1046DF]">
            Cupcake
          </Link>
        </div>

        {/* Navigation items */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "block px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100",
                    pathname === item.href && "bg-[#EBF0FF] text-[#1046DF] font-medium",
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-8">{children}</div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
