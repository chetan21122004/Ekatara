import Image from "next/image"
import {
  Calendar,
  Zap,
  BarChart3,
  Users,
  Settings,
  Headphones,
  FileText,
  CreditCard,
  Camera,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Clock,
  Shield,
  Globe,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Pre-Event Excellence",
      description: "Comprehensive planning and preparation to ensure your event's success from day one.",
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      image: "/images/conference-room.jpg",
      services: [
        {
          icon: Users,
          title: "Registration Management",
          description:
            "Complete attendee registration system with custom forms, payment processing, and automated confirmations.",
          features: [
            "Custom registration forms",
            "Payment gateway integration",
            "Automated email sequences",
            "Real-time reporting",
          ],
        },
        {
          icon: CreditCard,
          title: "Budget Planning & Management",
          description:
            "Detailed financial planning and cost management to maximize your event ROI and stay within budget.",
          features: ["Comprehensive budget planning", "Cost tracking & control", "ROI analysis", "Financial reporting"],
        },
        {
          icon: Headphones,
          title: "Speaker Management",
          description:
            "End-to-end speaker coordination including invitations, travel arrangements, and presentation support.",
          features: ["Speaker recruitment", "Travel coordination", "Presentation support", "Green room management"],
        },
        {
          icon: Settings,
          title: "Venue Selection & Setup",
          description:
            "Strategic venue sourcing and negotiation to find the perfect location for your event requirements.",
          features: ["Venue sourcing", "Contract negotiation", "Layout planning", "Technical setup"],
        },
      ],
    },
    {
      title: "Live Event Execution",
      description:
        "Real-time event management and support to ensure seamless execution and exceptional attendee experience.",
      icon: Zap,
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      image: "/images/speaker-stage.jpg",
      services: [
        {
          icon: Zap,
          title: "Check-in & Badge Management",
          description:
            "Mobile and web-based check-in systems with QR codes, badge printing, and real-time attendance tracking.",
          features: ["QR code check-in", "On-site badge printing", "Attendance tracking", "Mobile check-in apps"],
        },
        {
          icon: Camera,
          title: "Live Streaming & Recording",
          description:
            "Professional streaming services with interactive features, Q&A management, and technical support.",
          features: ["Multi-camera setup", "Live streaming", "Interactive Q&A", "Professional recording"],
        },
        {
          icon: Settings,
          title: "Technical Production",
          description: "Complete A/V production, lighting, and technical support for flawless event execution.",
          features: ["Audio/visual production", "Stage lighting", "Technical direction", "Equipment management"],
        },
        {
          icon: Users,
          title: "Attendee Experience",
          description: "Interactive engagement tools, networking facilitation, and real-time support for attendees.",
          features: ["Networking facilitation", "Interactive polling", "Mobile event app", "Concierge services"],
        },
      ],
    },
    {
      title: "Post-Event Value",
      description: "Comprehensive follow-up and analysis to maximize the long-term value and impact of your event.",
      icon: BarChart3,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      image: "/images/networking-event.jpg",
      services: [
        {
          icon: FileText,
          title: "Analytics & Reporting",
          description: "Detailed event analytics including attendance patterns, engagement metrics, and ROI analysis.",
          features: ["Comprehensive analytics", "Engagement metrics", "ROI reporting", "Custom dashboards"],
        },
        {
          icon: BarChart3,
          title: "Feedback Collection",
          description:
            "Comprehensive survey systems to gather attendee feedback and measure event satisfaction and impact.",
          features: ["Post-event surveys", "Real-time feedback", "Sentiment analysis", "Improvement recommendations"],
        },
        {
          icon: Camera,
          title: "Content & Media Management",
          description:
            "Professional photography, videography, and content creation for post-event marketing and documentation.",
          features: ["Professional photography", "Video production", "Content editing", "Media distribution"],
        },
        {
          icon: Users,
          title: "Follow-up & Engagement",
          description:
            "Attendee follow-up campaigns, lead distribution, and networking facilitation to extend event value.",
          features: ["Lead nurturing", "Follow-up campaigns", "Networking continuation", "Future event planning"],
        },
      ],
    },
  ]

  const additionalServices = [
    {
      icon: Globe,
      title: "Virtual & Hybrid Events",
      description: "Cutting-edge virtual and hybrid event solutions with global reach and interactive features.",
      features: ["Custom virtual platforms", "Global accessibility", "Interactive features", "Hybrid integration"],
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Enterprise-grade security measures, GDPR compliance, and data protection protocols.",
      features: ["GDPR compliance", "Data security", "Privacy protection", "Audit trails"],
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Strategic consulting on event innovation, technology adoption, and future-ready solutions.",
      features: ["Technology consulting", "Innovation strategy", "Future planning", "Digital transformation"],
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-red-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23dc2626' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-300 rounded-full opacity-50 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-100 to-red-50 border border-red-200 text-red-700 text-sm font-semibold">
                  <Star className="w-4 h-4 mr-2" />
                  Comprehensive Solutions
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Complete Event</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  Lifecycle
                </span>
                <br />
                <span className="text-gray-700 text-4xl md:text-5xl">Management</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From initial concept to post-event analysis, we handle every aspect of your event with precision,
                creativity, and unwavering attention to detail across all phases.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Pre</div>
                  <div className="text-xs text-gray-600">Planning</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-red-600 mb-1">Live</div>
                  <div className="text-xs text-gray-600">Execution</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-green-600 mb-1">Post</div>
                  <div className="text-xs text-gray-600">Analysis</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50 rounded-full px-8 py-3"
                >
                  <Link href="/capabilities">View Capabilities</Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Video/Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-meeting.jpg"
                  alt="Event Management Services"
                  width={600}
                  height={500}
                  className="object-cover w-full h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent"></div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/90 hover:bg-white text-red-600 p-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110">
                    <Play size={32} fill="currentColor" />
                  </button>
                </div>
              </div>

              {/* Floating Service Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Calendar className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Pre-Event</div>
                    <div className="text-xs text-gray-600">Planning</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-xl">
                    <BarChart3 className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Analytics</div>
                    <div className="text-xs text-gray-600">Insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className={`py-24 ${categoryIndex % 2 === 0 ? "bg-white" : "bg-gradient-to-br from-gray-50 to-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="text-center mb-16">
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${category.bgColor} text-sm font-medium mb-6`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.title}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {category.title.split(" ").map((word, index) => (
                  <span key={index}>
                    {index === category.title.split(" ").length - 1 ? (
                      <span className="text-red-600">{word}</span>
                    ) : (
                      word + " "
                    )}
                  </span>
                ))}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
            </div>

            {/* Category Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Image Side */}
              <div className={`${categoryIndex % 2 === 0 ? "order-1" : "order-2"} relative`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-80"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${category.color.replace("to-", "to-").replace("from-", "from-")}/20 to-transparent`}
                  ></div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className={`bg-gradient-to-r ${category.bgColor} p-3 rounded-xl`}>
                      <CheckCircle className="text-gray-700" size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className={`${categoryIndex % 2 === 0 ? "order-2" : "order-1"} space-y-6`}>
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={service.title}
                    className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`bg-gradient-to-r ${category.bgColor} p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <service.icon className="text-gray-700" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                              <CheckCircle className="w-3 h-3 text-red-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              Specialized Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced <span className="text-red-500">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge services that set us apart in the event management industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500"
              >
                <div className="bg-red-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How We <span className="text-red-600">Deliver Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures every event is executed flawlessly from start to finish.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-red-200 transform md:-translate-x-1/2"></div>

            {/* Timeline Steps */}
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description: "Understanding your vision, goals, and requirements",
                },
                {
                  step: "02",
                  title: "Strategy & Design",
                  description: "Creating comprehensive event strategy and design",
                },
                {
                  step: "03",
                  title: "Execution & Management",
                  description: "Flawless delivery with real-time management",
                },
                {
                  step: "04",
                  title: "Analysis & Follow-up",
                  description: "Post-event analysis and continuous improvement",
                },
              ].map((item, index) => (
                <div key={item.step} className="relative flex flex-col md:flex-row items-center">
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:order-3"} order-2 mt-4 md:mt-0`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-red-600 font-bold text-sm mb-2">STEP {item.step}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white order-1 md:order-2">
                    <span className="font-bold text-sm">{index + 1}</span>
                  </div>

                  {index % 2 !== 0 && (
                    <div className="flex-1 md:pr-8 order-3 mt-4 md:mt-0">
                      <div className="hidden md:block"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Create Something Extraordinary?</h2>
            <p className="text-xl text-red-100 mb-12">
              Let our comprehensive services transform your vision into an unforgettable event experience. From concept
              to execution, we're with you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                <Link href="/event-types">Explore Event Types</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-red-200 text-sm">Events Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-red-200 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-red-200 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Global</div>
                <div className="text-red-200 text-sm">Reach</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
