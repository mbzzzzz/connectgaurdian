"use client"

import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  const isProductPath = () => {
    return pathname?.startsWith("/products")
  }

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Support", path: "/support" },
    { name: "Account", path: "/account" },
    { name: "Business", path: "/business" },
    { name: "Contact", path: "/contact" },
  ]

  const productItems = [
    { name: "All Products", path: "/products" },
    { name: "Modems", path: "/products/modems" },
    { name: "5G Routers", path: "/products/5g-routers" },
    { name: "WiFi Dongles", path: "/products/wifi-dongles" },
    { name: "WiFi Receivers", path: "/products/wifi-receivers" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <ShieldCheck className="h-8 w-8 text-[#0A4DA6]" />
            <span className="text-xl font-bold">ConnectGuardian</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {/* Products Dropdown */}
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isProductPath() ? "text-[#0A4DA6] font-semibold" : "hover:text-[#0A4DA6]"
                }`}
              >
                Products <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              {productItems.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link
                    href={item.path}
                    className={`w-full ${isActive(item.path) ? "font-semibold" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Regular Nav Items */}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-sm font-medium transition-colors ${
                isActive(item.path) ? "text-[#0A4DA6] font-semibold" : "hover:text-[#0A4DA6]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <div className="border-b pb-2 mb-2">
                  <p className="font-medium mb-2">Products</p>
                  {productItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`block py-2 text-sm font-medium transition-colors ${
                        isActive(item.path) ? "text-[#0A4DA6] font-semibold" : "hover:text-[#0A4DA6]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.path) ? "text-[#0A4DA6] font-semibold" : "hover:text-[#0A4DA6]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/signin">Sign In</Link>
                  </Button>
                  <Button size="sm" className="bg-[#0A4DA6] hover:bg-[#0A4DA6]/90" asChild>
                    <Link href="/get-started">Get Started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
