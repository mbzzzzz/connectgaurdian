import { ShieldCheck } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-6 w-6 text-white" />
              <span className="text-lg font-bold text-white">ConnectGuardian</span>
            </div>
            <p className="text-sm opacity-70">Your Digital Lifeline – Guarded 24/7</p>
          </div>
          <div>
            <h3 className="font-medium text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/dashboard" className="opacity-70 hover:opacity-100">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="opacity-70 hover:opacity-100">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/mobile-app" className="opacity-70 hover:opacity-100">
                  Mobile App
                </Link>
              </li>
              <li>
                <Link href="/business" className="opacity-70 hover:opacity-100">
                  Business Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/support" className="opacity-70 hover:opacity-100">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-70 hover:opacity-100">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/network-status" className="opacity-70 hover:opacity-100">
                  Network Status
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="opacity-70 hover:opacity-100">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-70 hover:opacity-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="opacity-70 hover:opacity-100">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="opacity-70 hover:opacity-100">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/legal" className="opacity-70 hover:opacity-100">
                  Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm opacity-70 text-center">
          <p>© {new Date().getFullYear()} ConnectGuardian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
