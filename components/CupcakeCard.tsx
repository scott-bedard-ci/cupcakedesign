import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Cupcake {
  id: number
  name: string
  description: string
  price: number
  image: string
}

interface CupcakeCardProps {
  cupcake: Cupcake
}

export function CupcakeCard({ cupcake }: CupcakeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <img src={cupcake.image || "/placeholder.svg"} alt={cupcake.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{cupcake.name}</h3>
        <p className="text-gray-600 mb-4">{cupcake.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[#FF69B4]">${cupcake.price.toFixed(2)}</span>
          <Link href={`/order?product=${cupcake.id}`}>
            <Button variant="primary" size="small">
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
