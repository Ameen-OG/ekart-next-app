import { getProduct } from "@/lib/api"; // Changed to singular getProduct
import AddToCartButton from "@/components/AddToCartButton";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";

// 1. Dynamic Metadata
export async function generateMetadata({ params }) {
  const { id } = await params;
  try {
    const product = await getProduct(id); // Use singular
    if (!product) return { title: "Product Not Found" };

    return {
      title: `${product.title} | Ekart Store`,
      description: product.description,
    };
  } catch (error) {
    return { title: "Ekart Store" };
  }
}

// 2. Main Page Component
export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = await getProduct(id); // Use singular

  // SAFETY CHECK: If product doesn't exist or doesn't have an image
  if (!product || !product.image) {
    return (
      <PageWrapper>
        <div className="py-20 text-center">
          <h2 className="text-xl font-bold">Product not found.</h2>
          <p>The item you are looking for does not exist or has no image.</p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="grid md:grid-cols-2 gap-10 py-10">
        <div className="relative w-full h-96 bg-white rounded-xl p-4">
          <Image
            src={product.image} // Now guaranteed not to be ""
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            priority
          />
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
}