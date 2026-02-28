import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
 
    <footer className="bg-black text-gray-600 mt-12 shadow-[0_-1px_10px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center items-center justify-items-center">
        
        {/* Brand */}
        <div>
          {/* Changed text-white to text-gray-900 */}
          <h2 className="text-2xl font-bold text-gray-300 mb-3">
            Ekart Next
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Your one-stop shop for the latest products at the best prices.
            Built with modern web technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300">
            Quick Links
          </h3>
          <ul className="mt-2 text-sm space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-600 transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-blue-600 transition">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-4 text-xl text-gray-400">
            <a href="#" className="hover:text-blue-600 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* Changed border-gray-700 to border-gray-100 */}
      <div className="border-t border-gray-100 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Ekart Next. All rights reserved.
      </div>
    </footer>
  );
}