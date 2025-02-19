"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import OrderTracking from "@/components/OrderTracking"

const userInfo = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main St, Anytown, AT 12345",
  image:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
}

const orderHistory = [
  {
    id: 1,
    date: "2023-05-15",
    status: "Completed",
    total: 79.99,
    items: [
      {
        name: "Wireless Earbuds",
        image:
          "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      },
    ],
    estimatedDelivery: "2023-05-20",
  },
  {
    id: 2,
    date: "2023-06-01",
    status: "Processing",
    total: 129.99,
    items: [
      {
        name: "Smart Watch",
        image:
          "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      },
      {
        name: "Phone Case",
        image:
          "https://images.unsplash.com/photo-1541877944-ac82a091518a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      },
    ],
    estimatedDelivery: "2023-06-10",
  },
  {
    id: 3,
    date: "2023-06-10",
    status: "Cancelled",
    total: 59.99,
    items: [
      {
        name: "Bluetooth Speaker",
        image:
          "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      },
    ],
    estimatedDelivery: "N/A",
  },
]

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userDetails, setUserDetails] = useState(userInfo)
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null)
  const [trackingOrder, setTrackingOrder] = useState<number | null>(null)
  const [cancellingOrder, setCancellingOrder] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditing(false)
    // Here you would typically update the user's profile information
    alert("Profile updated successfully!")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserDetails((prev) => ({ ...prev, [name]: value }))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-600 dark:text-green-400"
      case "Processing":
        return "text-yellow-600 dark:text-yellow-400"
      case "Cancelled":
        return "text-red-600 dark:text-red-400"
      default:
        return "text-muted-foreground"
    }
  }

  const handleCancelOrder = (orderId: number) => {
    setCancellingOrder(orderId)
  }

  const confirmCancelOrder = () => {
    // Here you would typically send a request to your backend to cancel the order
    alert(`Order #${cancellingOrder} has been cancelled.`)
    setCancellingOrder(null)
    // Update the order status in the UI
    // This is a simplified example. In a real application, you'd want to update the state properly.
    const updatedOrders = orderHistory.map((order) =>
      order.id === cancellingOrder ? { ...order, status: "Cancelled" } : order,
    )
    // setOrderHistory(updatedOrders)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="md:flex items-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
              <div className="flex-shrink-0">
                <Image
                  src={userDetails.image || "/placeholder.svg"}
                  alt={userDetails.name}
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-primary">{userDetails.name}</h1>
                <p className="text-muted-foreground">{userDetails.email}</p>
              </div>
            </div>

            <Tabs defaultValue="info">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="info">Personal Info</TabsTrigger>
                <TabsTrigger value="orders">Order History</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="info">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={userDetails.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={userDetails.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={userDetails.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        value={userDetails.address}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  {isEditing ? (
                    <div className="flex justify-end space-x-4">
                      <Button type="submit" className="btn-primary">
                        Save Changes
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <div className="flex justify-end">
                      <Button type="button" className="btn-secondary" onClick={() => setIsEditing(true)}>
                        Edit Profile
                      </Button>
                    </div>
                  )}
                </form>
              </TabsContent>
              <TabsContent value="orders">
                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <Card key={order.id} className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold">Order #{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${order.total.toFixed(2)}</p>
                          <p className={`text-sm ${getStatusColor(order.status)}`}>{order.status}</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-muted-foreground">Estimated Delivery: {order.estimatedDelivery}</p>
                      </div>
                      <div className="flex mt-2 space-x-2">
                        {order.items.map((item, index) => (
                          <Image
                            key={index}
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="rounded"
                          />
                        ))}
                      </div>
                      <div className="mt-4 flex justify-between">
                        <Button variant="outline" onClick={() => setSelectedOrder(order.id)}>
                          View Details
                        </Button>
                        {order.status === "Processing" && (
                          <Button variant="destructive" onClick={() => handleCancelOrder(order.id)}>
                            Cancel Order
                          </Button>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="settings">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Notification Preferences</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Email notifications
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        SMS notifications
                      </label>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Privacy Settings</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Make profile public
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        Show order history
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button className="btn-primary">Save Settings</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>

      <Footer />

      {selectedOrder && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Order Details</h2>
              <p>Order #{selectedOrder}</p>
              {/* Add more order details here */}
              <div className="mt-4 space-x-2">
                <Button className="btn-primary" onClick={() => setTrackingOrder(selectedOrder)}>
                  Track Order
                </Button>
                <Button className="btn-secondary" onClick={() => setSelectedOrder(null)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {trackingOrder && <OrderTracking orderId={trackingOrder} onClose={() => setTrackingOrder(null)} />}

      {cancellingOrder && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <Card className="w-full max-w-md">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Cancel Order</h2>
              <p>Are you sure you want to cancel Order #{cancellingOrder}?</p>
              <div className="mt-4 space-x-2">
                <Button variant="destructive" onClick={confirmCancelOrder}>
                  Confirm Cancel
                </Button>
                <Button variant="outline" onClick={() => setCancellingOrder(null)}>
                  Keep Order
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  )
}

