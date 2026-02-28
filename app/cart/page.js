"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import Image from 'next/image'

export default function Cart() {
  const { cart, increment, decrement } = useCart();
  const [isClient, setIsClient] = useState(false);

  // Fix hydration issues by waiting for client-side mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 0),
    0
  );

  // Prevent "flash" of empty cart or hydration errors
  if (!isClient) return <div className="p-10 text-center">Loading cart...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* NOTE: Metadata (<title>, <meta>) removed from here. 
         Place them in the parent page.tsx or layout.tsx instead.
      */}

      <h2 className="text-2xl font-bold mb-6">Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-lg">
           <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div>
                <div className="relative w-16 h-16 mb-2">
  <Image 
    src={item.image} 
    alt={item.title} 
    fill 
    className="object-contain"
  />
</div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-blue-600 font-medium">${item.price.toFixed(2)}</p>
              </div>

              <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-lg">
                <button
                  onClick={() => decrement(item.id)}
                  className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-gray-200 transition"
                >
                  -
                </button>

                <span className="font-bold min-w-[20px] text-center">{item.quantity}</span>

                <button
                  onClick={() => increment(item.id)}
                  className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-gray-200 transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 p-6 bg-gray-50 rounded-lg flex justify-between items-center">
            <span className="text-gray-600 text-lg">Subtotal:</span>
            <span className="text-2xl font-bold text-gray-900">
              ${total.toFixed(2)}
            </span>
          </div>
        </>
      )}
    </div>
  );
}