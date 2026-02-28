// lib/api.js

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://fakestoreapi.com";

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

// MAKE SURE THIS IS SINGULAR 'getProduct'
export async function getProduct(id) {
  const res = await fetch(`${API_URL}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}