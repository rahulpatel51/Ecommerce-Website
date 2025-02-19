"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const initialAddresses = [
  { id: 1, name: "Home", address: "123 Main St, Anytown, AT 12345" },
  { id: 2, name: "Work", address: "456 Office Blvd, Workville, WV 67890" },
]

const cartItems = [
  { id: 1, name: "Wireless Earbuds", price: 79.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "Smart Watch", price: 199.99, quantity: 1, image: "/placeholder.svg?height=100&width=100" },
]

const countries = [
  {
    name: "United States",
    code: "US",
    states: [
      { name: "California", code: "CA", cities: ["Los Angeles", "San Francisco", "San Diego"] },
      { name: "New York", code: "NY", cities: ["New York City", "Buffalo", "Albany"] },
      { name: "Texas", code: "TX", cities: ["Houston", "Austin", "Dallas"] },
    ],
  },
  {
    name: "Canada",
    code: "CA",
    states: [
      { name: "Ontario", code: "ON", cities: ["Toronto", "Ottawa", "Hamilton"] },
      { name: "Quebec", code: "QC", cities: ["Montreal", "Quebec City", "Laval"] },
      { name: "British Columbia", code: "BC", cities: ["Vancouver", "Victoria", "Surrey"] },
    ],
  },
]

export default function CheckoutPage() {
  const router = useRouter()
  const [addresses, setAddresses] = useState(initialAddresses)
  const [selectedAddress, setSelectedAddress] = useState(addresses[0].id)
  const [isConfirming, setIsConfirming] = useState(false)
  const [newAddress, setNewAddress] = useState({
    name: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  })
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  const handleConfirm = () => {
    setIsConfirming(true)
    setTimeout(() => {
      router.push("/payment")
    }, 1500)
  }

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault()
    const newId = addresses.length + 1
    const fullAddress = `${newAddress.address1}, ${selectedCity}, ${selectedState} ${newAddress.zipCode}, ${selectedCountry}`
    setAddresses([...addresses, { id: newId, name: newAddress.name, address: fullAddress }])
    setSelectedAddress(newId)
    setNewAddress({
      name: "",
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    })
    setSelectedCountry("")
    setSelectedState("")
    setSelectedCity("")
  }

  const handleCountryChange = (value: string) => {
    setSelectedCountry(value)
    setSelectedState("")
    setSelectedCity("")
  }

  const handleStateChange = (value: string) => {
    setSelectedState(value)
    setSelectedCity("")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-card rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
              <RadioGroup
                value={selectedAddress.toString()}
                onValueChange={(value) => setSelectedAddress(Number.parseInt(value))}
              >
                {addresses.map((address) => (
                  <div key={address.id} className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value={address.id.toString()} id={`address-${address.id}`} />
                    <Label htmlFor={`address-${address.id}`}>
                      <span className="font-semibold">{address.name}</span>: {address.address}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-4">Add New Address</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Address</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddAddress} className="space-y-4">
                    <div>
                      <Label htmlFor="new-address-name">Address Name</Label>
                      <Input
                        id="new-address-name"
                        value={newAddress.name}
                        onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="new-address-first-name">First Name</Label>
                        <Input
                          id="new-address-first-name"
                          value={newAddress.firstName}
                          onChange={(e) => setNewAddress({ ...newAddress, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="new-address-last-name">Last Name</Label>
                        <Input
                          id="new-address-last-name"
                          value={newAddress.lastName}
                          onChange={(e) => setNewAddress({ ...newAddress, lastName: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="new-address-address1">Address Line 1</Label>
                      <Input
                        id="new-address-address1"
                        value={newAddress.address1}
                        onChange={(e) => setNewAddress({ ...newAddress, address1: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="new-address-address2">Address Line 2 (Optional)</Label>
                      <Input
                        id="new-address-address2"
                        value={newAddress.address2}
                        onChange={(e) => setNewAddress({ ...newAddress, address2: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="new-address-country">Country</Label>
                      <Select value={selectedCountry} onValueChange={handleCountryChange}>
                        <SelectTrigger id="new-address-country">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country.code} value={country.name}>
                              {country.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {selectedCountry && (
                      <div>
                        <Label htmlFor="new-address-state">State</Label>
                        <Select value={selectedState} onValueChange={handleStateChange}>
                          <SelectTrigger id="new-address-state">
                            <SelectValue placeholder="Select a state" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries
                              .find((c) => c.name === selectedCountry)
                              ?.states.map((state) => (
                                <SelectItem key={state.code} value={state.name}>
                                  {state.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    {selectedState && (
                      <div>
                        <Label htmlFor="new-address-city">City</Label>
                        <Select value={selectedCity} onValueChange={setSelectedCity}>
                          <SelectTrigger id="new-address-city">
                            <SelectValue placeholder="Select a city" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries
                              .find((c) => c.name === selectedCountry)
                              ?.states.find((s) => s.name === selectedState)
                              ?.cities.map((city) => (
                                <SelectItem key={city} value={city}>
                                  {city}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    <div>
                      <Label htmlFor="new-address-zip">ZIP Code</Label>
                      <Input
                        id="new-address-zip"
                        value={newAddress.zipCode}
                        onChange={(e) => setNewAddress({ ...newAddress, zipCode: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit">Add Address</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="bg-card rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-muted-foreground">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-card rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Total</h2>
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
              <Button className="w-full mt-6 btn-primary" onClick={handleConfirm} disabled={isConfirming}>
                {isConfirming ? "Confirming..." : "Confirm Order"}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

