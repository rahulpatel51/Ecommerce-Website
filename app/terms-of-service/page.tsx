import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="space-y-4">
          <p>
            Welcome to TechBazaar. By using our website and services, you agree to comply with and be bound by the
            following terms and conditions. Please read these terms carefully before using our platform.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using TechBazaar, you agree to be bound by these Terms of Service and all applicable laws
            and regulations. If you do not agree with any part of these terms, you may not use our services.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">2. User Accounts</h2>
          <p>
            To access certain features of our platform, you may be required to create an account. You are responsible
            for maintaining the confidentiality of your account information and for all activities that occur under your
            account.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">3. Product Information and Pricing</h2>
          <p>
            We strive to provide accurate product information and pricing. However, errors may occur. We reserve the
            right to correct any errors and to change or update information at any time without prior notice.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">4. Ordering and Payment</h2>
          <p>
            By placing an order, you are making an offer to purchase the products. All orders are subject to acceptance
            and availability. We reserve the right to refuse any order.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">5. Shipping and Delivery</h2>
          <p>
            Shipping and delivery terms are as specified in our Shipping Policy. We are not responsible for delays
            outside our control.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">6. Returns and Refunds</h2>
          <p>
            Our return and refund policy is as specified in our Returns Policy. Please refer to it for detailed
            information.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">7. Intellectual Property</h2>
          <p>
            All content on TechBazaar, including text, graphics, logos, and software, is the property of TechBazaar or
            its content suppliers and is protected by copyright laws.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">8. Limitation of Liability</h2>
          <p>
            TechBazaar shall not be liable for any indirect, incidental, special, consequential or punitive damages
            resulting from your use of or inability to use our services.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of TechBazaar after changes
            constitutes acceptance of the new terms.
          </p>

          <p className="mt-4">If you have any questions about our Terms of Service, please contact us.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

