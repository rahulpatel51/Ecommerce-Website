"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import OrderCompletionMessage from "@/components/OrderCompletionMessage"

const paymentMethods = [
  { id: "credit", name: "Credit Card" },
  { id: "debit", name: "Debit Card" },
  { id: "upi", name: "UPI" },
  { id: "cod", name: "Cash on Delivery" },
]

export default function PaymentPage() {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].id)
  const [orderCompleted, setOrderCompleted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setOrderCompleted(true)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-indigo-700">Payment</h1>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Select Payment Method</h2>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={method.id} id={`payment-${method.id}`} />
                  <Label htmlFor={`payment-${method.id}`}>{method.name}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {paymentMethod === "credit" || paymentMethod === "debit" ? (
            <>
              <div className="mb-4">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input id="cardNumber" type="text" placeholder="1234 5678 9012 3456" required />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" type="text" placeholder="MM/YY" required />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" type="text" placeholder="123" required />
                </div>
              </div>
              <div className="mb-6">
                <Label htmlFor="name">Name on Card</Label>
                <Input id="name" type="text" required />
              </div>
            </>
          ) : paymentMethod === "upi" ? (
            <div className="mb-6">
              <Label htmlFor="upiId">UPI ID</Label>
              <Input id="upiId" type="text" placeholder="yourname@upi" required />
            </div>
          ) : (
            <div className="mb-6">
              <p className="text-sm text-gray-600">You will pay in cash when your order is delivered.</p>
            </div>
          )}

          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isProcessing}>
            {isProcessing ? "Processing Payment..." : "Pay Now"}
          </Button>
        </form>
      </main>

      <Footer />

      {orderCompleted && <OrderCompletionMessage />}
    </div>
  )
}

