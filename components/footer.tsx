import Link from "next/link"
import { Calendar, Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 relative overflow-hidden border-t border-gray-200">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-cyan-50/50"></div>
      <div className="relative container mx-auto px-4 pt-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <Calendar className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  Ekatra
                </span>
                <div className="text-xs text-cyan-600 font-medium">MEETINGS</div>
              </div>
            </div>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              Leading international scientific conference organizer with 8+ years of experience in medical, nursing, and
              healthcare events. Connecting global research communities through exceptional conferences.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-500 hover:text-cyan-600 hover:bg-cyan-50 rounded-xl"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Event Management
                </Link>
              </li>
              <li>
                <Link
                  href="/event-types"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Conference Types
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Technology Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/abstract"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Abstract Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/registration"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Registration Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/payment"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Payment Information
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-200 mt-16 py-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Global Offices</div>
                <div className="text-gray-600">Rotterdam • Dubai • Pune</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                <Mail className="h-6 w-6 text-cyan-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Email Us</div>
                <div className="text-gray-600">info@ekatrameetings.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Phone className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Call Us</div>
                <div className="text-gray-600">+31 (0) 123 456 789</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6 w-full flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Ekatra Meetings. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-indigo-600 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
