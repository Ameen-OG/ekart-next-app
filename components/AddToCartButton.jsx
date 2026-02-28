"use client";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="mt-6 bg-black text-white px-6 py-2 rounded"
    >
      Add to Cart
    </button>
  );
}