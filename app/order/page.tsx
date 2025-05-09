"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Alert } from "@/components/ui/alert"
import { CupcakeSelector } from "@/components/CupcakeSelector"

export default function OrderPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedFlavor, setSelectedFlavor] = useState("chocolate")
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [error, setError] = useState("")
  const [showModal, setShowModal] = useState(false)

  const flavors = [
    { id: "chocolate", name: "Chocolate Delight", price: 3.99 },
    { id: "vanilla", name: "Vanilla Dream", price: 3.49 },
    { id: "strawberry", name: "Strawberry Bliss", price: 3.99 },
    { id: "redvelvet", name: "Red Velvet", price: 4.49 },
    { id: "lemon", name: "Lemon Zest", price: 3.99 },
    { id: "caramel", name: "Caramel Swirl", price: 4.29 },
  ]

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (value > 0 && value <= 100) {
      setQuantity(value)
    }
  }

  const handleFlavorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFlavor(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() // Prevent default form submission

    if (quantity <= 0) {
      setError("Please select at least 1 cupcake")
      return
    }

    if (quantity > 100) {
      setError("Maximum order quantity is 100 cupcakes")
      return
    }

    // Reset error if any
    setError("")

    // Show success modal
    setShowModal(true)

    // Also set orderPlaced for the inline alert
    setOrderPlaced(true)
  }

  // Close modal after 5 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false)
      }, 5000)
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [showModal])

  const selectedFlavorObj = flavors.find((flavor) => flavor.id === selectedFlavor)
  const totalPrice = selectedFlavorObj ? (selectedFlavorObj.price * quantity).toFixed(2) : "0.00"

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Modal Alert */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
          <div className="max-w-md w-full">
            <Alert
              variant="success"
              title="Order Received!"
              showClose={true}
              onDismiss={() => setShowModal(false)}
              className="bg-white shadow-xl"
            >
              <div className="py-2">
                <p className="mb-2">
                  Your {quantity} {selectedFlavorObj?.name} cupcake{quantity > 1 ? "s" : ""} are being baked with love!
                </p>
                <p>They'll be ready for pickup or delivery soon.</p>
                <div className="mt-4 text-center">
                  <Button variant="primary" size="small" onClick={() => setShowModal(false)}>
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </Alert>
          </div>
        </div>
      )}

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Order Your Cupcakes</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select your favorite flavors and quantity, and we'll bake them fresh for you!
        </p>
      </div>

      {orderPlaced && (
        <div className="mb-8">
          <Alert variant="success" title="Order Received!" showClose={true} onDismiss={() => setOrderPlaced(false)}>
            Your {quantity} {selectedFlavorObj?.name} cupcake{quantity > 1 ? "s" : ""} are being baked with love!
            They'll be ready for pickup or delivery soon.
          </Alert>
        </div>
      )}

      {error && (
        <div className="mb-8">
          <Alert variant="error" title="Order Error" showClose={true} onDismiss={() => setError("")}>
            {error}
          </Alert>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <CupcakeSelector flavors={flavors} selectedFlavor={selectedFlavor} onFlavorChange={handleFlavorChange} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Order</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="flavor" className="block text-gray-700 font-medium mb-2">
                Cupcake Flavor
              </label>
              <select
                id="flavor"
                value={selectedFlavor}
                onChange={handleFlavorChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF69B4]"
              >
                {flavors.map((flavor) => (
                  <option key={flavor.id} value={flavor.id}>
                    {flavor.name} (${flavor.price.toFixed(2)} each)
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                max="100"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF69B4]"
              />
            </div>

            <div className="mb-8 p-4 bg-gray-50 rounded-md">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Price per cupcake:</span>
                <span className="font-medium">${selectedFlavorObj?.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Quantity:</span>
                <span className="font-medium">{quantity}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span className="text-gray-700 font-bold">Total:</span>
                <span className="font-bold text-[#FF69B4]">${totalPrice}</span>
              </div>
            </div>

            <Button variant="primary" size="large" className="w-full" type="submit">
              Place Order
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
