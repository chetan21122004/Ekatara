"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Search, Target } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "@/components/ui/logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Event Types", href: "/event-types" },
    { name: "Abstract Submission", href: "/abstract" },
    { name: "Registration", href: "/registration" },
    { name: "Payment", href: "/payment" },
    { name: "Media", href: "/media" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-red-500 mb-3
          ${scrolled 
            ? "bg-white/80 shadow-lg backdrop-blur-lg h-16" 
            : "bg-transparent h-24"
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/50 backdrop-blur-md" />
        
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-shrink-0 z-10"
            >
              <Link href="/" className="block">
                <Image
                  src="/images/ekatra-logo.png"
                  alt="Ekatra Meetings"
                  width={160}
                  height={50}
                  className={`transition-all duration-300 ${scrolled ? "h-8" : "h-10"} w-auto`}
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Primary Navigation */}
              <div className="flex items-center space-x-6">
                {navigation.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 text-[15px] font-medium transition-all duration-200 group
                      ${pathname === item.href 
                        ? "text-red-600" 
                        : "text-gray-700 hover:text-red-600"}`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className={`absolute inset-0 rounded-lg bg-red-50 opacity-0 transform scale-95 transition-all duration-200
                      ${pathname === item.href 
                        ? "opacity-100 scale-100" 
                        : "group-hover:opacity-100 group-hover:scale-100"}`} 
                    />
                    <span className={`absolute inset-x-3 -bottom-px h-0.5 bg-red-600 transform transition-transform duration-200
                      ${pathname === item.href 
                        ? "scale-x-100" 
                        : "scale-x-0 group-hover:scale-x-100"}`} 
                    />
                  </Link>
                ))}
                
                {/* Mega Menu Dropdown */}
                <div className="relative group">
                  <button className="flex items-center px-3 py-2 text-[15px] font-medium text-gray-700 hover:text-red-600 transition-all duration-200">
                    More
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 w-[500px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pt-4">
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100/50 p-6">
                      <div className="grid grid-cols-2 gap-4">
                        {navigation.slice(4).map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200
                              ${pathname === item.href
                                ? "bg-red-50 text-red-600"
                                : "hover:bg-gray-50 text-gray-700 hover:text-red-600"}`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-red-600 transition-all duration-200"
                >
                  <Search className="h-5 w-5" />
                </button>
                
                <Button
                  asChild
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full px-6 py-2.5 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                >
                  <Link href="/contact">
                    <Target className="h-4 w-4" />
                    <span>Plan My Scientific Event</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-10 p-2 rounded-full hover:bg-white/50 text-gray-700 hover:text-red-600 transition-all duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white/90 backdrop-blur-lg shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-gray-200/50">
                  <Image
                    src="/images/ekatra-logo.png"
                    alt="Ekatra Meetings"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-red-600 transition-all duration-200"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="flex-1 overflow-y-auto py-4">
                  <div className="px-4 space-y-1">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-200
                            ${pathname === item.href
                              ? "text-red-600 bg-red-50"
                              : "text-gray-700 hover:text-red-600 hover:bg-red-50/50"}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 border-t border-gray-200/50">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl py-6 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      <Target className="h-5 w-5" />
                      <span>Plan My Scientific Event</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
              onClick={() => setSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-4 inset-x-4 max-w-2xl mx-auto z-50"
            >
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-4">
                <div className="flex items-center space-x-3 bg-gray-50/80 rounded-xl px-4 py-3">
                  <Search className="h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 bg-transparent border-0 focus:outline-none text-gray-900 placeholder-gray-500"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="p-1 rounded-full hover:bg-gray-200 text-gray-500 transition-all duration-200"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
