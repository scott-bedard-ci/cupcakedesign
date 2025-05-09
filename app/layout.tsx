import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Sweet Bytes Cupcake Shop",
  description: "Delicious cupcakes made with code and love",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
