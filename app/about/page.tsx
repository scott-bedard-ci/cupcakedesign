import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Scott",
      role: "Design System Architect",
      bio: "The visionary behind the Cupcake Design System. Scott brought the initial concept and guided the development with a focus on usability and consistency.",
      avatar: "Scott",
    },
    {
      name: "v0",
      role: "AI Developer",
      bio: "Helped implement the components and refine the design system. Focused on accessibility, responsive design, and code quality.",
      avatar: "v0",
    },
    {
      name: "Button Betty",
      role: "Interaction Specialist",
      bio: "An expert in creating delightful button interactions. Betty ensures every click feels as satisfying as biting into a fresh cupcake.",
      avatar: "Button Betty",
    },
    {
      name: "Alex Alert",
      role: "Notification Expert",
      bio: "Crafts the perfect alerts that are both informative and visually appealing. Alex believes notifications should be as sweet as the message they deliver.",
      avatar: "Alex Alert",
    },
  ]

  const milestones = [
    {
      date: "May 6, 2025 12:00pm",
      title: "Initial Concept",
      description: "The idea for a delightful, cupcake-themed design system was born.",
    },
    {
      date: "May 6, 2025 1:00pm",
      title: "Component Development",
      description: "We started building the core components: Button, Alert, and Avatar.",
    },
    {
      date: "May 6, 2025 2:00pm",
      title: "Mobile Optimization",
      description: "Enhanced all components to be fully responsive and mobile-friendly.",
    },
    {
      date: "May 6, 2025 4:00pm",
      title: "Sweet Bytes Demo",
      description: "Created the cupcake shop demo to showcase the design system in action.",
    },
    {
      date: "Today",
      title: "Continuous Improvement",
      description: "Constantly refining and expanding the design system based on feedback.",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">The Story of Cupcake Design System</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          How a collaboration between human creativity and AI assistance created a delightful design system in just 4
          hours
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src="/cupcake-design-system.png"
            alt="Cupcakes and design system elements"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            The Cupcake Design System began as a simple idea: what if we created a component library that was as
            delightful to use as eating a cupcake? Scott had the vision for a design system that would be both
            functional and joyful, and together with v0, an AI assistant, brought that vision to life in just a few
            hours.
          </p>
          <p className="text-gray-600 mb-4">
            We started with the core components: Buttons as fluffy as cake, Alerts as attention-grabbing as colorful
            frosting, and Avatars as unique as cupcake toppings. Each component was crafted with care, ensuring they
            were not only beautiful but also accessible, responsive, and easy to implement.
          </p>
          <p className="text-gray-600">
            What makes Cupcake special isn't just its playful theme, but its attention to detail. Every component is
            designed to work seamlessly together, creating a cohesive user experience that's as satisfying as the
            perfect cupcake recipe. And just like baking, we believe in continuous improvement—constantly refining our
            ingredients and methods to create the best possible result.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <Avatar identifier={member.avatar} size="large" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-[#FF69B4] font-medium mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Our 4-Hour Journey</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-pink-200"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="md:w-1/2"></div>
                <div className="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#FF69B4] border-4 border-white z-10"></div>
                <div className="relative md:w-1/2 ml-10 md:ml-0 md:px-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="text-[#FF69B4] font-semibold">{milestone.date}</span>
                    <h3 className="text-lg font-semibold text-gray-800 mt-1">{milestone.title}</h3>
                    <p className="text-gray-600 mt-2">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#FFF0F5] p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Design Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-2">✨</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Delightful Simplicity</h3>
            <p className="text-gray-600">
              Components should be as easy to use as they are delightful to interact with.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">📱</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Responsive by Default</h3>
            <p className="text-gray-600">
              Every component is designed to work beautifully on all devices and screen sizes.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">♿</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Accessible for All</h3>
            <p className="text-gray-600">
              We believe great design should be accessible to everyone, regardless of ability.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Try It Yourself</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Explore the Cupcake Design System components and see how they can sweeten your next project.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/demo">
            <Button variant="primary" size="large">
              View Component Demo
            </Button>
          </Link>
          <Link href="/order">
            <Button variant="secondary" size="large">
              See It In Action
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
