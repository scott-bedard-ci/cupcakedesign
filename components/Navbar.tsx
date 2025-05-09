"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-[#FFF0F5] border-b border-pink-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#FF69B4]">Sweet Bytes</span>
              <span className="ml-2 text-2xl">🧁</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-[#FF69B4] px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-[#FF69B4] px-3 py-2 rounded-md font-medium">
              Menu
            </Link>
            <Link href="/order" className="text-gray-700 hover:text-[#FF69B4] px-3 py-2 rounded-md font-medium">
              Order Now
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#FF69B4] px-3 py-2 rounded-md font-medium">
              About Us
            </Link>
            <Link href="/demo" className="text-gray-700 hover:text-[#FF69B4] px-3 py-2 rounded-md font-medium">
              Design System
            </Link>
            <Link href="/cart">
              <Button variant="secondary" size="small" leftIcon={<ShoppingCart className="w-4 h-4" />}>
                Cart
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#FF69B4] hover:bg-pink-100 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FFF0F5] border-t border-pink-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF69B4] hover:bg-pink-100"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF69B4] hover:bg-pink-100"
              onClick={toggleMenu}
            >
              Menu
            </Link>
            <Link
              href="/order"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF69B4] hover:bg-pink-100"
              onClick={toggleMenu}
            >
              Order Now
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF69B4] hover:bg-pink-100"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/demo"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF69B4] hover:bg-pink-100"
              onClick={toggleMenu}
            >
              Design System
            </Link>
            <Link
              href="/cart"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#FF69B4] hover:bg-pink-100"
              onClick={toggleMenu}
            >
              <div className="flex items-center">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
