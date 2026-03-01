// lib/api.js
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://fakestoreapi.com";

// Mock data as fallback
const MOCK_PRODUCTS = [
  {
    id: 1,
    title: "Men's Casual Slim Fit",
    price: 15.99,
    description: "Great product for casual wear",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: 2,
    title: "Women's Printed T-Shirt",
    price: 22.3,
    description: "Comfortable and stylish",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear for spring/fall",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "Slim-fitting style, comfortable fabric",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  }
];

export async function getProducts() {
  try {
    console.log("Fetching products from API...");
    
    const res = await fetch(`${API_URL}/products`, {
      cache: "no-store",
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Next.js/15)',
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      console.warn(`API returned ${res.status}, using mock data`);
      return MOCK_PRODUCTS; // Return mock data on error
    }
    
    const data = await res.json();
    console.log("Products fetched successfully:", data?.length);
    return data;
  } catch (error) {
    console.error("Error in getProducts, using mock data:", error);
    return MOCK_PRODUCTS; // Return mock data on exception
  }
}

export async function getProduct(id) {
  try {
    console.log(`Fetching product ${id} from API...`);
    
    const res = await fetch(`${API_URL}/products/${id}`, {
      cache: "no-store",
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Next.js/15)',
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      console.warn(`API returned ${res.status} for product ${id}, using mock data`);
      // Find mock product by id
      return MOCK_PRODUCTS.find(p => p.id === parseInt(id)) || MOCK_PRODUCTS[0];
    }
    
    const data = await res.json();
    console.log(`Product ${id} fetched successfully:`, data?.title);
    return data;
  } catch (error) {
    console.error(`Error in getProduct for id ${id}, using mock data:`, error);
    // Return mock product as fallback
    return MOCK_PRODUCTS.find(p => p.id === parseInt(id)) || MOCK_PRODUCTS[0];
  }
}