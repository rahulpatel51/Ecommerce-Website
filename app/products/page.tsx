import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ProductGrid from "@/components/ProductGrid"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <ProductGrid />
      </main>

      <Footer />
    </div>
  )
}

