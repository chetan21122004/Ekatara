"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Phone,
  Mail,
  ArrowUpRight,
  ChevronRight
} from "lucide-react"
import Image from "next/image"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {/* Company Info */}
            <motion.div variants={item} className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/" className="block">
                  <Image
                    src="/images/ekatra-logo.png"
                    alt="Ekatra Meetings"
                    width={180}
                    height={60}
                    className="h-12 w-auto"
                    priority
                  />
                </Link>
              </motion.div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming visions into exceptional event experiences across three continents. Your success is our
                mission.
              </p>
              <motion.div 
                className="flex space-x-4"
                variants={container}
                initial="hidden"
                whileInView="show"
              >
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    variants={item}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/5 p-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                  >
                    <social.icon size={18} className="text-white" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={item}>
              <h3 className="text-red-400 font-semibold mb-6 text-lg flex items-center">
                Services
                <ArrowUpRight size={14} className="ml-1" />
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Event Management", href: "/services" },
                  { name: "Technology Solutions", href: "/capabilities" },
                  { name: "Event Types", href: "/event-types" },
                  { name: "Abstract Management", href: "/abstract" },
                  { name: "Registration Services", href: "/registration" }
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    whileHover={{ x: 5 }}
                    className="transform transition-transform"
                  >
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-red-400 transition-colors text-sm flex items-center group"
                    >
                      <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div variants={item}>
              <h3 className="text-red-400 font-semibold mb-6 text-lg flex items-center">
                Support
                <ArrowUpRight size={14} className="ml-1" />
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "FAQ", href: "/faq" },
                  { name: "Contact Support", href: "/contact" },
                  { name: "Media Resources", href: "/media" },
                  { name: "Payment Information", href: "/payment" },
                  { name: "Privacy Policy", href: "#" }
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    whileHover={{ x: 5 }}
                    className="transform transition-transform"
                  >
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-red-400 transition-colors text-sm flex items-center group"
                    >
                      <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Global Offices */}
            <motion.div variants={item}>
              <h3 className="text-red-400 font-semibold mb-6 text-lg flex items-center">
                Global Offices
                <ArrowUpRight size={14} className="ml-1" />
              </h3>
              <div className="space-y-6">
                {[
                  {
                    city: "Pune, India",
                    address: "Baner",
                    phone: "+91-9370172365"
                  },
                  {
                    city: "Dubai, UAE",
                    address: "Business Bay Tower",
                    phone: "+91 9823383177"
                  },
                  {
                    city: "Rotterdam, Netherlands",
                    address: "Wilhelminaplein 1",
                    phone: "+91 9823383177"
                  }
                ].map((office, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-start space-x-3 bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-colors">
                      <MapPin className="text-red-400 mt-1 flex-shrink-0" size={16} />
                      <div className="text-sm">
                        <p className="font-medium text-white">{office.city}</p>
                        <p className="text-gray-400">{office.address}</p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <Phone size={12} className="mr-1" />
                          {office.phone}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="border-t border-white/10 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p variants={item} className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Ekatra Meetings. All rights reserved.
              </motion.p>
              <motion.div variants={item} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Globe size={16} />
                  <span>Global Event Excellence</span>
                </div>
                <div className="flex space-x-6">
                  {["Terms", "Privacy", "Cookies"].map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="text-gray-500 hover:text-red-400 text-sm transition-colors relative group"
                    >
                      {item}
                      <span className="absolute -bottom-px left-0 w-0 h-px bg-red-400 transition-all group-hover:w-full" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
