import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-indigo-700">About TechBazaar</h1>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <p className="text-lg mb-4 text-gray-700">
              TechBazaar is your premier destination for cutting-edge technology and gadgets. Founded in 2023, we've
              quickly become a leader in the e-commerce tech space, offering a wide range of products from smartphones
              and laptops to smart home devices and accessories.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Our mission is to make the latest technology accessible to everyone, providing not just products, but a
              gateway to the future of tech. We carefully curate our selection to ensure we offer only the highest
              quality items that we believe in.
            </p>
            <p className="text-lg text-gray-700">
              At TechBazaar, customer satisfaction is our top priority. We strive to provide an exceptional shopping
              experience, from browsing our website to receiving your package at your doorstep.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="About TechBazaar"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <Tabs defaultValue="shipping" className="mt-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="returns">Returns</TabsTrigger>
            <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            <TabsTrigger value="terms">Terms of Service</TabsTrigger>
          </TabsList>
          <TabsContent value="shipping" className="mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Shipping Information</h2>
            <p className="mb-4 text-gray-700">We offer various shipping options to meet your needs:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Standard Shipping (5-7 business days)</li>
              <li>Express Shipping (2-3 business days)</li>
              <li>Next Day Delivery (order before 2 PM)</li>
            </ul>
            <p className="text-gray-700">
              Shipping costs are calculated at checkout based on your location and chosen method.
            </p>
          </TabsContent>
          <TabsContent value="returns" className="mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Returns Policy</h2>
            <p className="mb-4 text-gray-700">
              We want you to be completely satisfied with your purchase. If you're not, we offer:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>30-day return policy for most items</li>
              <li>Free returns for defective products</li>
              <li>Easy online return process</li>
            </ul>
            <p className="text-gray-700">
              Please note that some items may have specific return conditions. Check the product page for details.
            </p>
          </TabsContent>
          <TabsContent value="privacy" className="mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Privacy Policy</h2>
            <p className="mb-4 text-gray-700">At TechBazaar, we take your privacy seriously. Our policy covers:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>What personal information we collect</li>
              <li>How we use your information</li>
              <li>Your rights regarding your data</li>
              <li>Our security measures to protect your information</li>
            </ul>
            <Link href="/privacy-policy" className="text-indigo-600 hover:underline">
              Read our full Privacy Policy
            </Link>
          </TabsContent>
          <TabsContent value="terms" className="mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Terms of Service</h2>
            <p className="mb-4 text-gray-700">By using TechBazaar, you agree to our Terms of Service, which cover:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>User responsibilities</li>
              <li>Intellectual property rights</li>
              <li>Limitation of liability</li>
              <li>Dispute resolution</li>
            </ul>
            <Link href="/terms-of-service" className="text-indigo-600 hover:underline">
              Read our full Terms of Service
            </Link>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}

