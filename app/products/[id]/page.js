import { getProduct } from "@/lib/api";
import AddToCartButton from "@/components/AddToCartButton";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import { notFound } from 'next/navigation';

// Dynamic Metadata
export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const product = await getProduct(id);
    if (!product) return { title: "Product Not Found" };

    return {
      title: `${product.title} | Ekart Store`,
      description: product.description,
    };
  } catch (error) {
    return { title: "Ekart Store" };
  }
}

// Main Page Component
export default async function ProductDetail({ params }) {
  const { id } = await params;
  
  try {
    const product = await getProduct(id);

    // SAFETY CHECK: If product doesn't exist
    if (!product) {
      notFound(); // This will show the 404 page
    }

    return (
      <PageWrapper>
        <div className="grid md:grid-cols-2 gap-10 py-10">
          <div className="relative w-full h-96 bg-white rounded-xl p-4">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <span>No image available</span>
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-2xl font-semibold text-blue-600 mb-4">
              ${Number(product.price).toFixed(2)}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>
            <AddToCartButton product={product} />
          </div>
        </div>
      </PageWrapper>
    );
  } catch (error) {
    console.error("Error in ProductDetail:", error);
    notFound();
  }
}