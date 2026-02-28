import  {getProducts}  from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import PageWrapper from "@/components/PageWrapper";

export async function generateMetadata({ searchParams }) {
  // Only await if you are actually going to use 'params'
  const params = await searchParams;
  return {
    title: params?.q ? `Search results for "${params.q}" | Ekart` : "All Products List of Ekart",
    description: "Browse the latest products on Ekart ecommerce platform.",
  };
}

export default async function Products({ searchParams }) {
  try {
    const params = await searchParams;
    const products = await getProducts();
    
    // Safety check: if getProducts returns null or undefined
    if (!products) {
      throw new Error("No products returned from API");
    }

    const query = params?.q?.toLowerCase() || "";

  // Replace your existing filter logic with this safer version:
const filteredProducts = products.filter((product) => {
  const title = product.title?.toLowerCase() || "";
  const description = product.description?.toLowerCase() || "";
  return title.includes(query) || description.includes(query);
});

    return (
      <PageWrapper>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-gray-500">
            {query ? `Results for "${query}"` : "All Products"}
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
  } catch (error) {
    console.error("Products Page Error:", error);
    return (
      <PageWrapper>
        <div className="text-center py-20">
          <h2 className="text-red-500 text-xl font-bold">Oops! Something went wrong.</h2>
          <p className="text-gray-500">We couldn't load the products. Check your internet or API source.</p>
        </div>
      </PageWrapper>
    );
  }
}