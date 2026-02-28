"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col">
      
      {/* Product Image */}
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="mt-3 font-semibold line-clamp-1">
        {product.title}
      </h3>

      {/* Price */}
      <p className="text-lg font-bold mt-2">${product.price}</p>

      {/* Buttons */}
      <div className="mt-auto flex gap-2">
        
        {/* View Details Button */}
        <Link
          href={`/products/${product.id}`}
          className="flex-1 bg-gray-800 text-white text-center py-2 rounded hover:bg-black transition"
        >
          View Details
        </Link>

        {/* Add To Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-orange-700 transition"
        >
          Add To Cart
        </button>

      </div>
    </div>
  );
}