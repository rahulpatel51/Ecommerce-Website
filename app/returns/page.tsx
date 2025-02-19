import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Returns Policy</h1>
        <div className="space-y-4">
          <p>
            At TechBazaar, we want you to be completely satisfied with your purchase. If you're not happy with your
            order, we're here to help. Here's our returns policy:
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Return Period</h2>
          <p>You have 30 days from the date of delivery to return your item(s).</p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Condition of Returns</h2>
          <p>
            Items must be returned in their original condition, unused, and with all original packaging and accessories.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Refund Process</h2>
          <p>
            Once we receive and inspect your return, we will process your refund. The refund will be credited to your
            original payment method within 5-10 business days.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Return Shipping</h2>
          <p>
            Customers are responsible for return shipping costs unless the item is defective or we made an error in your
            order.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Exceptions</h2>
          <p>
            Some items, such as personalized products or software with opened seals, may not be eligible for return.
            Please check the product description for any specific return restrictions.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">How to Initiate a Return</h2>
          <ol className="list-decimal pl-6">
            <li>Log into your TechBazaar account</li>
            <li>Go to your order history</li>
            <li>Select the item you wish to return</li>
            <li>Follow the prompts to generate a return label and instructions</li>
          </ol>

          <p className="mt-4">
            If you have any questions about our returns policy, please don't hesitate to contact our customer service
            team.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

