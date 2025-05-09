import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#FFF0F5] border-t border-pink-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sweet Bytes</h3>
            <p className="text-gray-600">
              Delicious cupcakes made with code and love. Our digital treats are as sweet as our real ones!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-[#FF69B4]">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-gray-600 hover:text-[#FF69B4]">
                  Order Online
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#FF69B4]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#FF69B4]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600">
              <p>123 Byte Street</p>
              <p>Cupcake Valley, Digital Land</p>
              <p className="mt-2">Email: hello@sweetbytes.example</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-pink-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Sweet Bytes Cupcake Shop. All rights reserved.</p>
          <p className="mt-2 text-sm">Made with the Cupcake Design System</p>
        </div>
      </div>
    </footer>
  )
}
