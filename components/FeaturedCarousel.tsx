"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface FeaturedCarouselProps {
  products: Product[]
}

export default function FeaturedCarousel({ products }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center"
        >
          <Image
            src={products[currentIndex].image || "/placeholder.svg"}
            alt={products[currentIndex].name}
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-background/80 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{products[currentIndex].name}</h3>
            <p className="text-muted-foreground mb-2">${products[currentIndex].price.toFixed(2)}</p>
            <Button className="btn-primary">View Details</Button>
          </div>
        </motion.div>
      </AnimatePresence>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

