import  {getProducts}  from "@/lib/api";
import AddToCartButton from "@/components/AddToCartButton";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";

// 1. Dynamic Metadata Function (Cleaned for JavaScript)
export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getProducts(id);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.title} | Ekart Store`,
    description: product.description,
  };
}

// 2. Main Page Component
export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return <div className="py-20 text-center">Product not found.</div>;
  }

  return (
    <PageWrapper>
      <div className="grid md:grid-cols-2 gap-10 py-10">
        <div className="relative w-full h-96">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </PageWrapper>
  );
}