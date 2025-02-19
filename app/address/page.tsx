"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AddressPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      router.push("/payment")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shipping Address</h1>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <Input id="name" type="text" required />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <Input id="address" type="text" required />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <Input id="city" type="text" required />
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <Input id="state" type="text" required />
          </div>
          <div className="mb-4">
            <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
              ZIP Code
            </label>
            <Input id="zip" type="text" required />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Confirm Address"}
          </Button>
        </form>
      </main>

      <Footer />
    </div>
  )
}

