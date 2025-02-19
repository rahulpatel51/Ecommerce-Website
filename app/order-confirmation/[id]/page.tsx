"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

const product = {
  id: 1,
  name: "Wireless Earbuds",
  price: 79.99,
  image: "/placeholder.svg?height=200&width=200",
}

export default function OrderConfirmationPage() {
  const router = useRouter()
  const [isConfirming, setIsConfirming] = useState(false)

  const handleConfirm = () => {
    setIsConfirming(true)
    setTimeout(() => {
      router.push("/checkout")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Order Confirmation</h1>

        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <div className="flex items-center mb-6">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={100}
              height={100}
              className="rounded-md mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${product.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>${(product.price * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${(product.price * 1.1).toFixed(2)}</span>
            </div>
          </div>

          <Button className="w-full mt-6" onClick={handleConfirm} disabled={isConfirming}>
            {isConfirming ? "Confirming..." : "Confirm Order"}
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

