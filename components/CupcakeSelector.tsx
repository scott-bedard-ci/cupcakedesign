"use client"

import type React from "react"

interface Flavor {
  id: string
  name: string
  price: number
}

interface CupcakeSelectorProps {
  flavors: Flavor[]
  selectedFlavor: string
  onFlavorChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export function CupcakeSelector({ flavors, selectedFlavor, onFlavorChange }: CupcakeSelectorProps) {
  const selectedFlavorObj = flavors.find((flavor) => flavor.id === selectedFlavor)

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Choose Your Flavor</h2>

      <div className="mb-6">
        <img
          src={`/abstract-geometric-shapes.png?height=300&width=300&query=${selectedFlavorObj?.name}+cupcake`}
          alt={selectedFlavorObj?.name}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
        />
        <h3 className="text-xl font-semibold text-[#FF69B4]">{selectedFlavorObj?.name}</h3>
        <p className="text-gray-600">
          Our {selectedFlavorObj?.name} is made with premium ingredients and baked fresh daily.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {flavors.map((flavor) => (
          <div
            key={flavor.id}
            className={`cursor-pointer p-3 rounded-md text-center transition-colors ${
              selectedFlavor === flavor.id ? "bg-[#FF69B4] text-white" : "bg-gray-100 hover:bg-pink-100 text-gray-800"
            }`}
            onClick={() => {
              const event = {
                target: { value: flavor.id },
              } as React.ChangeEvent<HTMLSelectElement>
              onFlavorChange(event)
            }}
          >
            <div className="font-medium">{flavor.name}</div>
            <div className="text-sm">${flavor.price.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
