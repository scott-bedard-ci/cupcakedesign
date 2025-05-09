import { Avatar } from "@/components/ui/avatar"

interface Testimonial {
  id: number
  name: string
  quote: string
  avatar: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Avatar identifier={testimonial.avatar} size="large" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
          <div className="flex text-yellow-400">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
    </div>
  )
}
