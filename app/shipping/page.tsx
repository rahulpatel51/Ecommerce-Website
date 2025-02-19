import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shipping Information</h1>
        <div className="space-y-4">
          <p>
            At TechBazaar, we strive to provide fast and reliable shipping for all our customers. Here's what you need
            to know about our shipping policies:
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Shipping Methods</h2>
          <ul className="list-disc pl-6">
            <li>Standard Shipping (3-5 business days)</li>
            <li>Express Shipping (1-2 business days)</li>
            <li>Next Day Delivery (order before 2 PM for next-day delivery)</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2">Shipping Costs</h2>
          <p>
            Shipping costs are calculated based on the weight of your order and your delivery location. You can view the
            exact shipping cost during checkout before completing your purchase.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Free Shipping</h2>
          <p>We offer free standard shipping on orders over $100 within the continental United States.</p>

          <h2 className="text-xl font-semibold mt-4 mb-2">International Shipping</h2>
          <p>
            We currently ship to select international destinations. International shipping rates and delivery times vary
            depending on the destination country.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Order Tracking</h2>
          <p>
            Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use
            this number to track your package's progress on our website or the carrier's website.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

