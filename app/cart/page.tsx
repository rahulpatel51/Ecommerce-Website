"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const initialCartItems = [
  { id: 1, name: "Wireless Earbuds", price: 79.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "Smart Watch", price: 199.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-xl mb-4">Your cart is empty</p>
            <Link href="/products">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 border-b py-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      -
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                      className="w-16 text-center"
                    />
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Link href="/checkout">
                  <Button className="w-full mt-6">Proceed to Checkout</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

