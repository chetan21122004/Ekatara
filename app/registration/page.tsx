"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  CheckCircle,
  Users,
  Shield,
  Globe,
  Zap,
  Gift,
  Crown,
  ArrowRight,
  MapPin,
  Sparkles,
  Trophy,
  Rocket,
  Heart,
  Brain,
  Timer,
  BadgeCheck,
  ChevronRight,
  Play,
  MessageSquare,
  FileText,
  Calendar,
  CreditCard,
  AlertCircle,
  ExternalLink,
  Mail,
  GraduationCap,
  Clock,
  FileCheck,
  Building,
  Microscope,
  Pill,
  Apple,
  Beaker,
} from "lucide-react"

export default function RegistrationPage() {
  const [selectedPlan, setSelectedPlan] = useState("Professional")
  const [activeTab, setActiveTab] = useState("early-bird")
  const [activeSection, setActiveSection] = useState("overview")

  const registrationSteps = [
    {
      step: "01",
      title: "Quick Setup",
      description: "Create your profile in under 2 minutes",
      icon: Rocket,
      details: [
        "One-click social login",
        "Auto-fill professional info",
        "Instant email verification",
        "Smart recommendations",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      duration: "2 mins",
    },
    {
      step: "02",
      title: "Smart Selection",
      description: "AI recommends the perfect package for you",
      icon: Brain,
      details: [
        "Personalized recommendations",
        "Feature comparison tool",
        "Budget optimization",
        "Upgrade flexibility",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      duration: "3 mins",
    },
    {
      step: "03",
      title: "Experience Builder",
      description: "Customize your event experience",
      icon: Heart,
      details: ["Workshop selection", "Networking preferences", "Dietary requirements", "Accessibility options"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      duration: "5 mins",
    },
    {
      step: "04",
      title: "Secure Checkout",
      description: "Complete with enterprise-grade security",
      icon: Shield,
      details: ["256-bit encryption", "Multiple payment options", "Instant confirmation", "Digital receipts"],
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-50 to-orange-50",
      duration: "1 min",
    },
  ]

  const registrationTiers = [
    {
      name: "Essential",
      price: "$299",
      originalPrice: "$399",
      discount: "25% OFF",
      description: "Perfect for first-time attendees",
      features: [
        "Full 3-day event access",
        "Digital conference materials",
        "Networking app access",
        "Lunch & refreshments",
        "Basic workshop access",
        "Digital proceedings",
        "Certificate of attendance",
      ],
      color: "from-gray-500 to-gray-600",
      bgColor: "from-gray-50 to-gray-100",
      popular: false,
      savings: "$100",
      badge: "Great Value",
    },
    {
      name: "Professional",
      price: "$599",
      originalPrice: "$799",
      discount: "25% OFF",
      description: "Most popular for industry professionals",
      features: [
        "Everything in Essential",
        "Priority seating",
        "Exclusive workshops (5+)",
        "VIP networking reception",
        "Speaker meet & greet",
        "Professional headshots",
        "1-year digital library access",
        "Premium swag package",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      popular: true,
      savings: "$200",
      badge: "Most Popular",
    },
    {
      name: "Premium",
      price: "$899",
      originalPrice: "$1199",
      discount: "25% OFF",
      description: "Ultimate VIP experience",
      features: [
        "Everything in Professional",
        "VIP lounge access",
        "Private speaker sessions",
        "Exclusive dinner events",
        "Concierge service",
        "Priority support",
        "Custom networking",
        "Executive roundtables",
        "Airport transfers",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      popular: false,
      savings: "$300",
      badge: "VIP Experience",
    },
  ]

  const discountTabs = [
    {
      id: "early-bird",
      title: "Early Bird",
      subtitle: "Limited Time",
      discount: "25%",
      description: "Register before March 15th",
      color: "from-red-500 to-orange-500",
    },
    {
      id: "group",
      title: "Group Rates",
      subtitle: "Team Savings",
      discount: "Up to 20%",
      description: "3+ attendees from same organization",
      color: "from-blue-500 to-purple-500",
    },
    {
      id: "student",
      title: "Student",
      subtitle: "Academic Discount",
      discount: "50%",
      description: "Valid student ID required",
      color: "from-green-500 to-emerald-500",
    },
  ]

  const additionalServices = [
    {
      title: "Premium Accommodation",
      icon: MapPin,
      description: "Luxury hotel packages with exclusive rates",
      features: ["5-star partner hotels", "Complimentary breakfast", "Shuttle service", "Concierge support"],
      price: "From $199/night",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Travel Concierge",
      icon: Globe,
      description: "Complete travel assistance and coordination",
      features: ["Visa invitation letters", "Flight booking assistance", "Airport transfers", "Travel insurance"],
      price: "From $99",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Networking Plus",
      icon: Users,
      description: "Enhanced networking with AI-powered matching",
      features: ["AI-powered introductions", "Private meetup spaces", "Follow-up automation", "Contact management"],
      price: "From $149",
      color: "from-purple-500 to-purple-600",
    },
  ]

  const eligibleParticipants = [
    {
      title: "Researchers",
      icon: Microscope,
      description: "Academic and industry researchers in life sciences",
    },
    {
      title: "Students",
      icon: GraduationCap,
      description: "Graduate and post-graduate students",
    },
    {
      title: "Professionals",
      icon: Building,
      description: "Industry professionals and practitioners",
    },
    {
      title: "Faculty",
      icon: Users,
      description: "Academic faculty members and educators",
    },
  ]

  const fields = [
    {
      name: "Medical Research",
      icon: FileCheck,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Biotechnology",
      icon: Beaker,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Pharmaceutical",
      icon: Pill,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Food Science",
      icon: Apple,
      color: "from-red-500 to-red-600",
    },
  ]

  const requiredDocs = [
    {
      title: "Valid ID",
      description: "Government-issued photo identification",
      icon: BadgeCheck,
      note: "For students: Include valid student ID",
    },
    {
      title: "Abstract",
      description: "Required for presenters only",
      icon: FileText,
      note: "Must follow provided template",
    },
    {
      title: "Payment Confirmation",
      description: "If applicable for your registration type",
      icon: CreditCard,
      note: "Various payment methods accepted",
    },
  ]

  const timeline = [
    {
      phase: "Early Bird",
      deadline: "March 15, 2024",
      discount: "25% off",
      icon: Clock,
      status: "active",
    },
    {
      phase: "Standard",
      deadline: "April 30, 2024",
      discount: "Regular price",
      icon: Calendar,
      status: "upcoming",
    },
    {
      phase: "Late",
      deadline: "May 15, 2024",
      discount: "10% premium",
      icon: AlertCircle,
      status: "upcoming",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-red-50 via-white to-purple-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-25 animate-pulse"></div>
          <div className="absolute bottom-20 right-40 w-16 h-16 bg-gradient-to-br from-red-200 to-red-300 rounded-full opacity-20 animate-bounce"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-100 to-orange-100 border border-red-200 text-red-700 text-sm font-semibold shadow-lg animate-pulse">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Early Bird Special - Save 25%
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Join The</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Future
                </span>
                <br />
                <span className="text-gray-700 text-5xl md:text-6xl">Of Innovation</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Secure your spot at the world's most innovative conference. Connect with industry leaders, discover
                breakthrough technologies, and shape the future of your field.
              </p>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    25%
                  </div>
                  <div className="text-sm text-gray-600">Early Bird Savings</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                  <div className="text-sm text-gray-600">Experience Levels</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    5K+
                  </div>
                  <div className="text-sm text-gray-600">Global Attendees</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                    3
                  </div>
                  <div className="text-sm text-gray-600">Days of Innovation</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="#packages">
                    <Trophy className="mr-2" size={20} />
                    Choose Your Experience
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-red-200 text-red-600 hover:bg-red-50 rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="#demo">
                    <Play className="mr-2" size={20} />
                    Watch Preview
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Enhanced Visual */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/networking-event.jpg"
                  alt="Conference Experience"
                  width={600}
                  height={500}
                  className="object-cover w-full h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent"></div>
              </div>

              {/* Floating Experience Cards */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl">
                    <BadgeCheck className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Verified</div>
                    <div className="text-sm text-gray-600">Secure Registration</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-xl">
                    <Timer className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Limited</div>
                    <div className="text-sm text-gray-600">Early Bird Pricing</div>
                  </div>
                </div>
              </div>

              {/* Live Counter Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Users className="w-4 h-4 inline mr-2" />
                2,847 Registered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Registration Process */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium mb-8 shadow-lg">
              <Zap className="w-5 h-5 mr-2" />
              Lightning Fast Registration
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Register in{" "}
              <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                Under 10 Minutes
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our intelligent registration system gets you signed up quickly with personalized recommendations and
              seamless payment processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {registrationSteps.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div
                  className={`bg-gradient-to-br ${step.bgColor} p-8 rounded-3xl shadow-2xl mb-8 group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2 border border-white/50`}
                >
                  <div
                    className={`bg-gradient-to-r ${step.color} p-6 rounded-2xl w-fit mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="text-white" size={40} />
                  </div>
                  <div className="text-6xl font-bold text-gray-200 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 text-gray-700 text-xs font-medium">
                    <Timer className="w-3 h-3 mr-1" />
                    {step.duration}
                  </div>
                </div>
                <div className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Registration Packages */}
      <section className="py-32 bg-gradient-to-br from-white to-gray-50" id="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-green-700 text-sm font-medium mb-8 shadow-lg">
              <Crown className="w-5 h-5 mr-2" />
              Choose Your Experience
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Tailored{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Experiences
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Select the perfect package for your professional goals. Each tier is designed to maximize your learning
              and networking opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {registrationTiers.map((tier, index) => (
              <div
                key={tier.name}
                onClick={() => setSelectedPlan(tier.name)}
                className={`relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border-2 cursor-pointer ${
                  selectedPlan === tier.name ? "border-red-500 ring-4 ring-red-200" : "border-gray-100"
                } ${tier.popular ? "scale-105" : ""}`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-3 text-sm font-semibold">
                    {tier.badge}
                  </div>
                )}

                <div className={`h-2 bg-gradient-to-r ${tier.color}`}></div>

                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium mb-4">
                      {tier.badge}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-6">{tier.description}</p>

                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-5xl font-bold text-gray-900">{tier.price}</span>
                      <div className="text-left">
                        <div className="text-sm text-gray-500 line-through">{tier.originalPrice}</div>
                        <div className="text-sm font-semibold text-red-600">{tier.discount}</div>
                      </div>
                    </div>

                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                      <Gift className="w-4 h-4 mr-2" />
                      Save {tier.savings}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      selectedPlan === tier.name
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : tier.popular
                          ? "bg-red-600 hover:bg-red-700 text-white"
                          : `bg-gradient-to-r ${tier.color} text-white hover:opacity-90`
                    } rounded-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {selectedPlan === tier.name ? "Selected" : "Select Package"}
                    <ChevronRight className="ml-2" size={20} />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Discount Tabs */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Savings Available</h3>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {discountTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <div className="text-lg">{tab.title}</div>
                  <div className="text-sm opacity-80">{tab.subtitle}</div>
                </button>
              ))}
            </div>

            {discountTabs.map((tab) => (
              <div key={tab.id} className={`${activeTab === tab.id ? "block" : "hidden"} text-center`}>
                <div
                  className={`inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r ${tab.color} text-white mb-4`}
                >
                  <Sparkles className="w-6 h-6 mr-3" />
                  <div>
                    <div className="text-3xl font-bold">{tab.discount}</div>
                    <div className="text-sm opacity-90">Additional Savings</div>
                  </div>
                </div>
                <p className="text-xl text-gray-600 mb-6">{tab.description}</p>
                <Button
                  className={`bg-gradient-to-r ${tab.color} text-white hover:opacity-90 rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Apply This Discount
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Additional Services */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Premium Add-Ons
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Elevate Your{" "}
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Enhance your conference experience with our premium services designed for maximum convenience and
              networking success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div
                  className={`bg-gradient-to-r ${service.color} p-6 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                >
                  <service.icon className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                  <Button
                    className={`bg-gradient-to-r ${service.color} text-white hover:opacity-90 rounded-full px-6 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Add Service
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Transform Your Future?</h2>
            <p className="text-xl text-white/90 mb-12">
              Join thousands of innovators, thought leaders, and industry pioneers. Secure your spot now with our
              limited-time early bird pricing and start your journey to the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="#register">
                  <Rocket className="mr-3" size={24} />
                  Register Now - Save 25%
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">
                  <MessageSquare className="mr-3" size={24} />
                  Get Personal Assistance
                </Link>
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Timer className="text-white mx-auto mb-4" size={32} />
                  <div className="text-3xl font-bold text-white mb-2">25%</div>
                  <div className="text-white/80 text-sm font-medium mb-1">Early Bird</div>
                  <div className="text-white/60 text-xs">Limited Time Savings</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Shield className="text-white mx-auto mb-4" size={32} />
                  <div className="text-3xl font-bold text-white mb-2">Secure</div>
                  <div className="text-white/80 text-sm font-medium mb-1">Payment</div>
                  <div className="text-white/60 text-xs">Enterprise Grade Security</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <BadgeCheck className="text-white mx-auto mb-4" size={32} />
                  <div className="text-3xl font-bold text-white mb-2">Instant</div>
                  <div className="text-white/80 text-sm font-medium mb-1">Confirmation</div>
                  <div className="text-white/60 text-xs">Immediate Access</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <Users className="text-white mx-auto mb-4" size={32} />
                  <div className="text-3xl font-bold text-white mb-2">5K+</div>
                  <div className="text-white/80 text-sm font-medium mb-1">Attendees</div>
                  <div className="text-white/60 text-xs">Global Community</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Register Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who Can Register</h2>
            <p className="text-xl text-gray-600">
              Our events are open to professionals from various backgrounds in life sciences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eligibleParticipants.map((participant) => (
              <div
                key={participant.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <participant.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{participant.title}</h3>
                <p className="text-gray-600">{participant.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {fields.map((field) => (
              <div
                key={field.name}
                className="bg-gradient-to-r bg-opacity-10 rounded-lg p-4 flex items-center space-x-3"
              >
                <div className={`bg-gradient-to-r ${field.color} p-2 rounded-lg`}>
                  <field.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium">{field.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Documents Required</h2>
            <p className="text-xl text-gray-600">
              Please prepare the following documents before starting your registration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requiredDocs.map((doc) => (
              <div
                key={doc.title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <doc.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{doc.title}</h3>
                    <p className="text-gray-600">{doc.description}</p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <AlertCircle className="w-4 h-4 inline mr-2 text-red-600" />
                    {doc.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Registration Process</h2>
            <p className="text-xl text-gray-600">Follow these steps to complete your registration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {registrationSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div
                    className={`bg-gradient-to-r ${step.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6`}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-gray-200 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <p className="text-sm text-gray-500">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Registration Timeline</h2>
            <p className="text-xl text-gray-600">Important dates and deadlines for registration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timeline.map((phase) => (
              <div
                key={phase.phase}
                className={`bg-white rounded-xl p-8 shadow-lg border-2 ${
                  phase.status === "active"
                    ? "border-red-500 ring-4 ring-red-100"
                    : "border-transparent"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                    phase.status === "active" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <phase.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.phase}</h3>
                <p className="text-gray-600 mb-4">Deadline: {phase.deadline}</p>
                <div
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    phase.status === "active"
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {phase.discount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Important Notes</h2>
            <p className="text-xl text-gray-300">Please keep in mind the following information</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <AlertCircle className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">External Registration</h3>
              <p className="text-gray-300">
                This website does not handle live registrations. All registrations are processed through our
                official event portals.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Mail className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-300">
                For registration assistance, contact our support team at:
                <br />
                <a
                  href="mailto:register@ekatrameetings.com"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  register@ekatrameetings.com
                </a>
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <CreditCard className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
              <p className="text-gray-300">
                All payments are processed securely through our trusted payment gateway partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Register?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join thousands of professionals and secure your spot at our upcoming events.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Link href="https://register.ekatrameetings.com" target="_blank">
              Go to Registration Portal
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
