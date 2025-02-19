import Link from "next/link"
import { Laptop, Smartphone, Headphones, Watch, Camera, Tv } from "lucide-react"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const categories = [
  { name: "Laptops", icon: Laptop, href: "/products?category=laptops" },
  { name: "Smartphones", icon: Smartphone, href: "/products?category=smartphones" },
  { name: "Audio", icon: Headphones, href: "/products?category=audio" },
  { name: "Wearables", icon: Watch, href: "/products?category=wearables" },
  { name: "Cameras", icon: Camera, href: "/products?category=cameras" },
  { name: "TVs", icon: Tv, href: "/products?category=tvs" },
]

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Product Categories</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <category.icon className="w-12 h-12 mb-4 text-blue-600" />
              <span className="text-lg font-semibold">{category.name}</span>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

