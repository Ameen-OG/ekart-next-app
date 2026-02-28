"use client";
import { useEffect, useState } from "react"; // Added useEffect
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation"; // Added useSearchParams

export default function Navbar() {
  const { cart } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Initialize state with the current URL param so it doesn't clear on refresh
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  const cartItemsCount = cart.reduce((total, item) => total + (item.quantity || 0), 0);

  // Auto-filter effect: Updates the URL after user stops typing for 300ms
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim()) {
        router.push(`/products?q=${searchQuery.trim()}`);
      } else if (searchQuery === "" && searchParams.get("q")) {
        // Clear search if input is empty
        router.push(`/products`);
      }
    }, 300); // 300ms delay

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router]);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
            EKART<span className="text-blue-600">.</span>
          </Link>

          <div className="hidden md:block flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition">Home</Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition">Products</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm font-medium transition">Contact</Link>
            <Link href="/cart" className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full transition">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}