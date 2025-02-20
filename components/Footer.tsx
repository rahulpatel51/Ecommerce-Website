import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Github } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About TechBazaar</h3>
            <p className="text-sm">
              Your one-stop shop for all things tech. We offer the latest gadgets and accessories at competitive prices.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-sm hover:underline">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-sm hover:underline">
                  Deals
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-sm hover:underline">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm hover:underline">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/rahulpatel51" className="text-primary-foreground hover:text-secondary transition-colors">
                <Github />
              </a>
              <a href="https://x.com/RahulPatel11131" className="text-primary-foreground hover:text-secondary transition-colors">
                <Twitter />
              </a>
              <a href="https://www.instagram.com/rahulislost_/" className="text-primary-foreground hover:text-secondary transition-colors">
                <Instagram />
              </a>
              <a href="https://www.youtube.com/@rahulislost_" className="text-primary-foreground hover:text-secondary transition-colors">
                <Youtube />
              </a>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-r-none bg-primary-foreground text-primary"
                />
                <Button
                  type="submit"
                  className="rounded-l-none bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p>&copy; {new Date().getFullYear()} TechBazaar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

