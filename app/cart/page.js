"use client";

import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, increment, decrement } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>

      <title>Cart Page of Ekart</title>
      <meta name="description" content="Review the items in your cart before checkout." />

      <h2 className="text-2xl font-bold mb-6">Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h4 className="font-semibold">{item.title}</h4>
            <p>${item.price}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => decrement(item.id)}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              -
            </button>

            <span className="font-medium">{item.quantity}</span>

            <button
              onClick={() => increment(item.id)}
              className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              +
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div className="mt-6 text-xl font-bold">
          Total: ${total.toFixed(2)}
        </div>
      )}
    </div>
  );
}