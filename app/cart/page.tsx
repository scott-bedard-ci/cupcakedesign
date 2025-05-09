"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Alert } from "@/components/ui/alert"

export default function CartPage() {
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(true)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Cart</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Review your order before checkout.</p>
      </div>

      {showEmptyCartMessage && (
        <div className="mb-8">
          <Alert
            variant="informational"
            title="Your cart is empty"
            showClose={true}
            onDismiss={() => setShowEmptyCartMessage(false)}
          >
            Head over to our menu to add some delicious cupcakes to your cart!
          </Alert>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-center">
        <img
          src="/placeholder.svg?height=200&width=200&query=empty+shopping+cart"
          alt="Empty cart"
          className="mx-auto mb-4 h-40 w-40"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Looks like you haven't added any cupcakes to your cart yet.</p>
        <Link href="/menu">
          <Button variant="primary" size="large">
            Browse Our Menu
          </Button>
        </Link>
      </div>
    </div>
  )
}
