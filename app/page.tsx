"use client"

import { Suspense } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import Navbar from "@/components/Navbar"
import ProductGrid from "@/components/ProductGrid"
import Footer from "@/components/Footer"
import FAQ from "@/components/FAQ"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <section
          className="relative bg-cover bg-center py-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h1 className="text-4xl font-bold mb-4 text-white">Welcome to TechBazaar</h1>
              <p className="text-xl mb-8 text-gray-200">Discover the latest in tech gadgets and accessories.</p>
              <Link
                href="/products"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition duration-300"
              >
                Shop Now
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
            <Suspense fallback={<div>Loading...</div>}>
              <ProductGrid />
            </Suspense>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

