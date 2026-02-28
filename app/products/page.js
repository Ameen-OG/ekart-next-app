import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import PageWrapper from "@/components/PageWrapper";

// 1. Dynamic Metadata to reflect the search term in the browser tab
export async function generateMetadata({ searchParams }) {
  const params = await searchParams;

  
  return {
    title:"All Products List of Ekart",
    description: "Browse the latest products on Ekart ecommerce platform.",
  };
}

export default async function Products({ searchParams }) {
  // 2. Await searchParams (Required in newer Next.js versions)
  const params = await searchParams;
  const products = await getProducts();
  
  const query = params?.q?.toLowerCase() || "";

  // 3. Filter logic
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query) || 
    product.description.toLowerCase().includes(query)
  );

  return (
    <PageWrapper>
      <div className="flex justify-between items-center mb-6">
        <h2 className=" text-gray-500">
          All Products
        </h2>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No products match your search.</p>
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