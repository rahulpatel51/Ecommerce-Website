"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on your location. Typically, orders are delivered within 3-5 business days for domestic orders and 7-14 business days for international orders.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Please check our Returns page for more detailed information.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to many countries worldwide. Shipping costs and delivery times may vary depending on the destination.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package on our website or the carrier's website.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-muted rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

