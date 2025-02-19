"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface OrderTrackingProps {
  orderId: number
  onClose: () => void
}

const trackingSteps = [
  { id: 1, name: "Order Placed", date: "2023-06-15", location: "Warehouse" },
  { id: 2, name: "Processing", date: "2023-06-16", location: "Warehouse" },
  { id: 3, name: "Shipped", date: "2023-06-18", location: "Distribution Center" },
  { id: 4, name: "Out for Delivery", date: "2023-06-20", location: "Local Delivery Hub" },
  { id: 5, name: "Delivered", date: "2023-06-21", location: "Your Address" },
]

export default function OrderTracking({ orderId, onClose }: OrderTrackingProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [vehiclePosition, setVehiclePosition] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < trackingSteps.length) {
          setVehiclePosition((prevPos) => Math.min(prevPos + 20, 100))
          return prevStep + 1
        }
        return prevStep
      })
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <Card className="w-full max-w-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Order #{orderId} Tracking</h2>
          <div className="space-y-4">
            <div className="relative h-20 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-primary"
                style={{ width: `${vehiclePosition}%` }}
              />
              <motion.div className="absolute top-1/2 -translate-y-1/2" style={{ left: `${vehiclePosition}%` }}>
                <Image src="/delivery-truck.png" alt="Delivery Vehicle" width={40} height={40} />
              </motion.div>
            </div>
            {trackingSteps.map((step) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep >= step.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? "✓" : step.id}
                </div>
                <div className="ml-4 flex-grow">
                  <p className="font-semibold">{step.name}</p>
                  <p className="text-sm text-muted-foreground">{step.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{step.location}</p>
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-6" onClick={onClose}>
            Close
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

