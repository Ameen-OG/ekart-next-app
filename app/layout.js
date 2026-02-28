import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "Ekart Next",
  description: "Next.js Ecommerce Starter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Navbar />
          
          {/* Main Content */}
          <main className="flex-grow container mx-auto p-6">
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}