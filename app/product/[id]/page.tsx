"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ProductGrid from "@/components/ProductGrid"

const product = {
  id: 1,
  name: "Wireless Earbuds",
  price: 79.99,
  description: "High-quality wireless earbuds with noise cancellation and long battery life.",
  colors: ["Black", "White", "Blue"],
  images: [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ],
}

export default function ProductPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={product.images[currentImageIndex] || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={400}
                className="w-full rounded-lg shadow-md"
              />
            </motion.div>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 left-2 transform -translate-y-1/2"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 right-2 transform -translate-y-1/2"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <div className="flex justify-center mt-4 space-x-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentImageIndex ? "bg-primary" : "bg-muted"}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
            <p className="text-muted-foreground mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? "border-primary" : "border-muted"
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="flex-1 btn-primary">Add to Cart</Button>
              <Link href={`/order-confirmation/${product.id}`} className="flex-1">
                <Button variant="outline" className="w-full">
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Product Details</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <ProductGrid />
        </section>
      </main>

      <Footer />
    </div>
  )
}

