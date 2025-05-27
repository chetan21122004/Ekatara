"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Calendar, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/capabilities", label: "Capabilities" },
    { href: "/event-types", label: "Event Types" },
  ]

  const resourceItems = [
    { href: "/abstract", label: "Abstract Submission" },
    { href: "/registration", label: "Registration" },
    { href: "/payment", label: "Payment" },
    { href: "/media", label: "Media" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Ekatra
              </span>
              <div className="text-xs text-cyan-600 font-medium">MEETINGS</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2">
                  {resourceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-xl transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button asChild variant="ghost" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              <Link href="/contact">Contact</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-500 to-cyan-400 hover:from-indigo-600 hover:to-cyan-500 text-white rounded-xl px-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-gray-700 hover:text-indigo-600">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white border-gray-200">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm font-semibold text-gray-500 mb-3">Resources</div>
                  <div className="space-y-3">
                    {resourceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <Button
                  asChild
                  className="mt-6 bg-gradient-to-r from-indigo-500 to-cyan-400 hover:from-indigo-600 hover:to-cyan-500 text-white rounded-xl"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
