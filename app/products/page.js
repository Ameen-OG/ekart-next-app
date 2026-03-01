import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import PageWrapper from "@/components/PageWrapper";

export default async function Products({ searchParams }) {
  // 1. Fetch products with error handling (now returns mock data if API fails)
  const products = await getProducts();

  // 2. Unpack the "envelope" (searchParams)
  const resolvedParams = await searchParams;
  
  // 3. Now safely extract 'q'
  const query = resolvedParams?.q?.toLowerCase() || "";

  // 4. Filter products
  const filteredProducts = products.filter((product) => {
    const title = product.title?.toLowerCase() || "";
    const description = product.description?.toLowerCase() || "";
    return title.includes(query) || description.includes(query);
  });
  
  // 5. Show count of products (helpful for debugging)
  console.log(`Showing ${filteredProducts.length} of ${products.length} products`);
  
  return (
    <PageWrapper>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-gray-500">
          {query ? `Results for "${query}"` : "All Products"}
          <span className="ml-2 text-sm">({filteredProducts.length} items)</span>
        </h2>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            No products match your search.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </PageWrapper>
  );
}