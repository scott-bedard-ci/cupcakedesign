import { CupcakeCard } from "@/components/CupcakeCard"

export default function MenuPage() {
  const cupcakes = [
    {
      id: 1,
      name: "Chocolate Delight",
      description: "Rich chocolate cake with creamy chocolate frosting",
      price: 3.99,
      image: "/chocolate-cupcake.png",
    },
    {
      id: 2,
      name: "Vanilla Dream",
      description: "Classic vanilla cake with smooth vanilla buttercream",
      price: 3.49,
      image: "/vanilla-cupcake.png",
    },
    {
      id: 3,
      name: "Strawberry Bliss",
      description: "Strawberry-infused cake topped with strawberry frosting",
      price: 3.99,
      image: "/strawberry-cupcake.png",
    },
    {
      id: 4,
      name: "Red Velvet",
      description: "Velvety red cake with cream cheese frosting",
      price: 4.49,
      image: "/placeholder.svg?height=300&width=300&query=red+velvet+cupcake",
    },
    {
      id: 5,
      name: "Lemon Zest",
      description: "Tangy lemon cake with lemon buttercream",
      price: 3.99,
      image: "/placeholder.svg?height=300&width=300&query=lemon+cupcake",
    },
    {
      id: 6,
      name: "Caramel Swirl",
      description: "Vanilla cake with caramel swirl and caramel frosting",
      price: 4.29,
      image: "/placeholder.svg?height=300&width=300&query=caramel+cupcake",
    },
    {
      id: 7,
      name: "Mint Chocolate",
      description: "Chocolate cake with mint chocolate chip frosting",
      price: 4.29,
      image: "/placeholder.svg?height=300&width=300&query=mint+chocolate+cupcake",
    },
    {
      id: 8,
      name: "Cookies & Cream",
      description: "Vanilla cake with cookies and cream frosting",
      price: 4.29,
      image: "/placeholder.svg?height=300&width=300&query=cookies+and+cream+cupcake",
    },
    {
      id: 9,
      name: "Peanut Butter Cup",
      description: "Chocolate cake with peanut butter frosting",
      price: 4.49,
      image: "/placeholder.svg?height=300&width=300&query=peanut+butter+cupcake",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Menu</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our delicious cupcake flavors, each baked fresh daily with premium ingredients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cupcakes.map((cupcake) => (
          <CupcakeCard key={cupcake.id} cupcake={cupcake} />
        ))}
      </div>
    </div>
  )
}
