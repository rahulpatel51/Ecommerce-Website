import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="space-y-4">
          <p>
            At TechBazaar, we are committed to protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our
            website and services.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when you create an account, make a purchase,
            or contact our customer service. This may include:
          </p>
          <ul className="list-disc pl-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Shipping address</li>
            <li>Payment information</li>
            <li>Phone number</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and account</li>
            <li>Provide customer support</li>
            <li>Improve our website and services</li>
            <li>Send you marketing communications (with your consent)</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 mb-2">Data Security</h2>
          <p>
            We implement a variety of security measures to protect your personal information, including encryption,
            secure servers, and regular security audits.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You can manage your information
            through your account settings or by contacting our customer service team.
          </p>

          <h2 className="text-xl font-semibold mt-4 mb-2">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page.
          </p>

          <p className="mt-4">If you have any questions about our Privacy Policy, please contact us.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

