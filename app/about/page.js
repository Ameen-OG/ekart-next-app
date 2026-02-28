import PageWrapper from "@/components/PageWrapper";

export const metadata = {
  title: "About Us of Ekart",
  description: "Learn more about Ekart ecommerce platform.",
};
export default function About() {
  return (
    <PageWrapper>
      <section className="max-w-4xl mx-auto py-16">
        
        <h1 className="text-4xl font-extrabold mb-6 text-center">
          About <span className="text-blue-600">Ekart</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6 text-center">
          Ekart is a modern e-commerce platform built to provide 
          a seamless online shopping experience. We offer a wide 
          range of products including electronics, fashion, and 
          lifestyle items.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
          
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🚚 Fast Delivery</h3>
            <p className="text-gray-500">
              We ensure quick and reliable delivery services 
              across all regions.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">🔒 Secure Payments</h3>
            <p className="text-gray-500">
              Your transactions are protected with advanced 
              security systems.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">⭐ Quality Products</h3>
            <p className="text-gray-500">
              We provide high-quality products at affordable prices.
            </p>
          </div>

        </div>

      </section>
    </PageWrapper>
  );
}