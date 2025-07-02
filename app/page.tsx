import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CupcakeCard } from "@/components/CupcakeCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  const featuredCupcakes = [
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
  ];

  const testimonials = [
    {
      id: 1,
      name: "Jane Smith",
      quote: "The best cupcakes I've ever had! Sweet Bytes never disappoints.",
      avatar: "Jane Smith",
    },
    {
      id: 2,
      name: "John Doe",
      quote:
        "I ordered a dozen for my office and everyone loved them. Will definitely order again!",
      avatar: "John Doe",
    },
    {
      id: 3,
      name: "Emily Johnson",
      quote: "Their Red Velvet cupcake is to die for. Absolutely delicious!",
      avatar: "Emily Johnson",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#FFF0F5] pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Delicious Cupcakes Made with{" "}
                <span className="text-[#FF69B4]">Love</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Handcrafted cupcakes for every occasion. Made fresh daily with
                the finest ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/order">
                  <Button variant="primary" size="large">
                    Order Now
                  </Button>
                </Link>
                <Link href="/menu">
                  <Button variant="secondary" size="large">
                    View Menu
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/cupcake-display.png"
                alt="Assorted cupcakes"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cupcakes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Featured Cupcakes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular flavors that customers love. Each cupcake is
              baked fresh daily.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCupcakes.map((cupcake) => (
              <CupcakeCard key={cupcake.id} cupcake={cupcake} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/menu">
              <Button variant="secondary" size="large">
                View All Flavors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#FF69B4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Place your order now and enjoy our delicious cupcakes delivered to
            your doorstep.
          </p>
          <Link href="/order">
            <Button
              variant="primary"
              size="large"
              className="bg-white text-[#FF69B4] hover:bg-gray-100"
            >
              Order Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our happy customers
              have to say.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
