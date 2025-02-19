"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden"
    >
      <Image
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-muted-foreground mb-4">${product.price.toFixed(2)}</p>
        <Button className="w-full btn-primary">Add to Cart</Button>
      </div>
    </motion.div>
  )
}

