"use client"

import type React from "react"
import { cn } from "../lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
}

interface BottomNavigationProps {
  items: NavItem[]
  className?: string
}

export function BottomNavigation({ items, className }: BottomNavigationProps) {
  const pathname = usePathname()

  return (
    <div className={cn("fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden", className)}>
      <nav className="flex items-center justify-around">
        {items.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-4 min-h-[56px] w-full",
                "transition-colors duration-200",
                isActive ? "text-[#1046DF] font-medium" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50",
              )}
            >
              <div className="mb-1">{item.icon}</div>
              <span className="text-xs">{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
