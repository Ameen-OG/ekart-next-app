import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

export const metadata = {
  title: "Home Page of Ekart",
  description: "Learn more about Ekart ecommerce platform.",
};

export default function Home() {
  return (
    <PageWrapper>
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Welcome to <span className="text-blue-600">Ekart</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Discover the best products at unbeatable prices. 
          Shop electronics, fashion, and more with fast delivery 
          and secure checkout.
        </p>

        <Link
          href="/products"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Shop Now
        </Link>
      </section>
    </PageWrapper>
  );
}