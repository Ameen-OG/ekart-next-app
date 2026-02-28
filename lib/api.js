const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://fakestoreapi.com"; 
// Adding a fallback ensures it doesn't crash if the env var is missing!

export async function getProducts() {
  try {
    const res = await fetch(`${API_URL}/products`, {
      next: { revalidate: 60 }, // Better than no-store for production e-commerce
    });

    if (!res.ok) {
      console.error(`Fetch failed with status: ${res.status}`);
      return []; // Return empty array instead of crashing the whole page
    }

    return await res.json();
  } catch (error) {
    console.error("API Error (getProducts):", error);
    return []; 
  }
}