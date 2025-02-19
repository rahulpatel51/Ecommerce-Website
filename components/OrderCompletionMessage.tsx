"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function OrderCompletionMessage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/profile?tab=orders")
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-50"
    >
      <div className="bg-card p-8 rounded-lg shadow-lg text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        </motion.div>
        <h2 className="text-2xl font-bold mb-4">Order Completed Successfully!</h2>
        <p className="text-muted-foreground">Thank you for your purchase. Redirecting to order history...</p>
      </div>
    </motion.div>
  )
}

