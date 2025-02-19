"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "High-quality wireless earbuds with noise cancellation.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Feature-packed smartwatch with health tracking.",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Portable Bluetooth speaker with excellent sound quality.",
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1616353071855-2c045c4458ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Ergonomic laptop stand for improved posture.",
  },
  {
    id: 5,
    name: "Wireless Charger",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1622835047827-b3d8a7da44ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Fast wireless charger compatible with most devices.",
  },
  {
    id: 6,
    name: "Noise-Canceling Headphones",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Premium noise-canceling headphones for immersive audio.",
  },
  {
    id: 7,
    name: "4K Monitor",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "High-resolution 4K monitor for crisp visuals.",
  },
  {
    id: 8,
    name: "Mechanical Keyboard",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Responsive mechanical keyboard for typing enthusiasts.",
  },
  {
    id: 9,
    name: "Wireless Mouse",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Ergonomic wireless mouse for comfortable use.",
  },
  {
    id: 10,
    name: "Portable SSD",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Fast and compact portable SSD for on-the-go storage.",
  },
  {
    id: 11,
    name: "Smartphone Gimbal",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1585155967849-91c736589c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Stabilizer for smooth smartphone video recording.",
  },
  {
    id: 12,
    name: "Gaming Mouse Pad",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Large, smooth mouse pad for precise gaming control.",
  },
]

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-primary">{product.name}</h3>
              <p className="text-muted-foreground mb-2">${product.price.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}

