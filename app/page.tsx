"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Users,
  Globe,
  Zap,
  Calendar,
  Video,
  Building,
  CheckCircle,
  Star,
  TrendingUp,
  Play,
} from "lucide-react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import { ClientScroller } from "@/components/client-scroller"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  // Refs for animation targets
  const heroRef = useRef(null)
  const eventFormatsRef = useRef(null)
  const servicesRef = useRef(null)
  const globalPresenceRef = useRef(null)
  const ctaRef = useRef(null)

  // Hero section animations
  useGSAP(() => {
    const heroTl = gsap.timeline()
    
    heroTl.from(".hero-badge", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out"
    })
    .from(".hero-title span", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    })
    .from(".hero-description", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: "power2.out"
    })
    .from(".hero-buttons", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out"
    })
    .from(".achievement-card", {
      opacity: 0,
      x: -30,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out"
    })
    .from(".hero-image", {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power2.out"
    })
  }, { scope: heroRef })

  // Event Formats section animations
  useGSAP(() => {
    gsap.from(".format-card", {
      scrollTrigger: {
        trigger: ".format-card",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    })
  }, { scope: eventFormatsRef })

  // Services section animations
  useGSAP(() => {
    gsap.from(".service-item", {
      scrollTrigger: {
        trigger: ".service-item",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      x: -30,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out"
    })

    gsap.from(".service-image", {
      scrollTrigger: {
        trigger: ".service-image",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power2.out"
    })
  }, { scope: servicesRef })

  // Global Presence section animations
  useGSAP(() => {
    gsap.from(".office-card", {
      scrollTrigger: {
        trigger: ".office-card",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50, 
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    })
  }, { scope: globalPresenceRef })

  // CTA section animations
  useGSAP(() => {
    gsap.from(".cta-content", {
      scrollTrigger: {
        trigger: ".cta-content",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    })
  }, { scope: ctaRef })

  return (
    <div className="min-h-screen pt-14">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Abstract Background Elements */}
      

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="hero-badge inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-100 hover-scale">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-gradient">
                  Leading Scientific Conference Organizer
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="hero-title text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="block text-gray-900">Advancing</span>
                  <span className="block mt-1 text-gradient">
                    Scientific
                  </span>
                  <span className="block mt-1 text-gray-800">Innovation</span>
                </h1>

                <p className="hero-description text-xl text-gray-600 max-w-xl">
                  Empowering researchers and academicians worldwide through premier scientific conferences. 
                  From medical sciences to biotechnology, we create platforms for knowledge exchange and breakthrough discoveries.
                </p>
              </div>

              <div className="hero-buttons flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/registration">
                    Submit Abstract
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="glass border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 rounded-full px-8 py-6 text-lg font-medium transition-colors duration-300 hover:scale-105"
                >
                  <Link href="/about">Explore Conferences</Link>
                </Button>
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="achievement-card glass card-shadow rounded-2xl p-4">
                  <div className="text-3xl font-bold text-gradient">8+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="achievement-card glass card-shadow rounded-2xl p-4">
                  <div className="text-3xl font-bold text-gradient">3</div>
                  <div className="text-sm text-gray-600">Global Offices</div>
                </div>
                <div className="achievement-card glass card-shadow rounded-2xl p-4">
                  <div className="text-3xl font-bold text-gradient">100+</div>
                  <div className="text-sm text-gray-600">Scientific Events</div>
                </div>
                <div className="achievement-card glass card-shadow rounded-2xl p-4">
                  <div className="text-3xl font-bold text-gradient">50K+</div>
                  <div className="text-sm text-gray-600">Researchers</div>
                </div>
              </div>
            </div>

            {/* Right Content - Interactive Image Gallery */}
            <div className="hero-image relative h-[600px] hidden lg:block">
              <div className="absolute inset-0 grid grid-cols-2 gap-4 parallax">
                <div className="space-y-4">
                  <div className="relative h-72 rounded-2xl overflow-hidden card-shadow hover-scale">
                    <Image
                      src="/images/hero-conference.jpg"
                      alt="Professional Conference"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden card-shadow hover-scale">
                    <Image
                      src="/images/networking-event.jpg"
                      alt="Networking Event"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
                <div className="space-y-4 mt-12">
                  <div className="relative h-48 rounded-2xl overflow-hidden card-shadow hover-scale">
                    <Image
                      src="/images/virtual-event.jpg"
                      alt="Virtual Event"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="relative h-72 rounded-2xl overflow-hidden card-shadow hover-scale">
                    <Image
                      src="/images/team-meeting.jpg"
                      alt="Team Meeting"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Card */}
              <div className="absolute -bottom-6 -right-6 glass card-shadow rounded-2xl p-6 hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <TrendingUp className="text-green-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient">98%</div>
                    <div className="text-sm text-gray-600">Growth Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center glass">
            <div className="w-1 h-3 bg-red-600 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Event Formats Section */}
      <section ref={eventFormatsRef} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-red-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6 hover-scale">
              <TrendingUp className="w-4 h-4 mr-2" />
              Event Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Every Format, <span className="text-gradient">Every Scale</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate networking sessions to large-scale international conferences, we deliver exceptional
              experiences across all event formats with cutting-edge technology and expert management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Live Events */}
            <div className="format-card group relative overflow-hidden rounded-3xl bg-white card-shadow hover-scale">
              <div className="relative h-64">
                <Image
                  src="/images/conference-room.jpg"
                  alt="Live Events"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="bg-gradient-custom p-3 rounded-2xl">
                    <Users className="text-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Events</h3>
                <p className="text-gray-600 mb-6">
                  In-person conferences, trade shows, and networking events with full on-site management, technical
                  support, and seamless attendee experiences.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    On-site registration & check-in
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    Professional A/V management
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    Real-time technical support
                  </li>
                </ul>
              </div>
            </div>

            {/* Hybrid Events */}
            <div className="format-card group relative overflow-hidden rounded-3xl bg-white card-shadow hover-scale">
              <div className="relative h-64">
                <Image
                  src="/images/networking-event.jpg"
                  alt="Hybrid Events"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="bg-gradient-custom p-3 rounded-2xl">
                    <Globe className="text-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hybrid Events</h3>
                <p className="text-gray-600 mb-6">
                  Seamlessly blend physical and virtual experiences to reach global audiences and maximize engagement
                  with interactive features.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    Synchronized live & virtual content
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    Interactive Q&A across formats
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    Cross-platform networking
                  </li>
                </ul>
              </div>
            </div>

            {/* Virtual Events */}
            <div className="format-card group relative overflow-hidden rounded-3xl bg-white card-shadow hover-scale">
              <div className="relative h-64">
                <Image
                  src="/images/virtual-event.jpg"
                  alt="Virtual Events"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="bg-gradient-custom p-3 rounded-2xl">
                    <Video className="text-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual Events</h3>
                <p className="text-gray-600 mb-6">
                  Fully digital conferences and webinars with interactive features, global accessibility, and
                  comprehensive attendee management.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    Custom virtual platforms
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    Live streaming & on-demand
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-red-600 mr-2" />
                    Virtual networking rooms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Showcase Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Subtle background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6 hover:bg-blue-100 transition-colors">
              <Building className="w-4 h-4 mr-2" />
              Our Global Partners
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Leading <span className="text-gradient">Institutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with prestigious organizations worldwide to advance scientific research and knowledge sharing through exceptional events and conferences.
            </p>
          </div>

       

          {/* Scrollers with more spacing */}
          <div className="">
            <div className="bg-gradient-to-r from-white via-gray-50 to-white ">
              <ClientScroller direction="left" speed="slow" className="py-4" />
            </div>
            <div className="bg-gradient-to-r from-white via-gray-50 to-white ">
              <ClientScroller direction="right" speed="slow" className="py-4" />
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-4 text-center">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                End-to-End Solutions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Event <span className="text-red-600">Lifecycle Management</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                From initial concept to post-event analysis, we handle every aspect of your event with precision,
                creativity, and unwavering attention to detail.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-xl">
                    <Calendar className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Pre-Event Excellence</h3>
                    <p className="text-gray-600 text-sm">
                      Strategic planning, registration management, and comprehensive preparation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-xl">
                    <Zap className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Live Event Execution</h3>
                    <p className="text-gray-600 text-sm">
                      Real-time management, technical support, and seamless delivery
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-xl">
                    <Building className="text-red-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Post-Event Value</h3>
                    <p className="text-gray-600 text-sm">
                      Analytics, follow-up, and insights for continuous improvement
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3">
                  <Link href="/services">
                    Explore All Services
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-meeting.jpg"
                  alt="Event Management Team"
                  width={600}
                  height={400}
                  className="object-cover w-full h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <TrendingUp className="text-green-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-gradient-to-r from-red-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6 hover-scale">
              <Star className="w-4 h-4 mr-2" />
              Our Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Principles That <span className="text-gradient">Guide Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values shape every decision we make and every interaction we have. They're the foundation of our commitment to excellence in scientific event management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Innovation */}
            <div className="group relative bg-white rounded-3xl p-8 card-shadow hover-scale">
              <div className="bg-gradient-custom p-3 rounded-2xl w-fit mb-6">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Embracing cutting-edge technology and creative solutions to revolutionize scientific conferences and knowledge sharing.
              </p>
            </div>

            {/* Excellence */}
            <div className="group relative bg-white rounded-3xl p-8 card-shadow hover-scale">
              <div className="bg-gradient-custom p-3 rounded-2xl w-fit mb-6">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                Maintaining the highest standards in every aspect of our service, from planning to execution and follow-up.
              </p>
            </div>

            {/* Collaboration */}
            <div className="group relative bg-white rounded-3xl p-8 card-shadow hover-scale">
              <div className="bg-gradient-custom p-3 rounded-2xl w-fit mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                Fostering meaningful partnerships and creating platforms for researchers to connect and share knowledge globally.
              </p>
            </div>

            {/* Integrity */}
            <div className="group relative bg-white rounded-3xl p-8 card-shadow hover-scale">
              <div className="bg-gradient-custom p-3 rounded-2xl w-fit mb-6">
                <CheckCircle className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
              <p className="text-gray-600">
                Operating with transparency, ethical practices, and unwavering commitment to our clients' success.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-6 text-center card-shadow hover-scale">
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-gray-600">Client Retention</div>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center card-shadow hover-scale">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center card-shadow hover-scale">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-gray-600">Expert Team</div>
            </div>
            <div className="bg-white rounded-3xl p-6 text-center card-shadow hover-scale">
              <div className="text-4xl font-bold text-gradient mb-2">15+</div>
              <div className="text-gray-600">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Global Reach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Three Countries, <span className="text-red-500">One Vision</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our strategic global presence ensures local expertise with international standards, delivering exceptional
              events wherever your audience is located.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pune Office */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
              <div className="relative h-48">
                <Image
                  src="/images/office-pune.jpg"
                  alt="Pune Office"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Pune, India</h3>
                  <p className="text-gray-300 text-sm">Headquarters & Operations</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                    Main Operations Hub
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                    Technology Development
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                    24/7 Support Center
                  </li>
                </ul>
              </div>
            </div>

            {/* Dubai Office */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
              <div className="relative h-48">
                <Image
                  src="/images/office-dubai.jpg"
                  alt="Dubai Office"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Dubai, UAE</h3>
                  <p className="text-gray-300 text-sm">Middle East Operations</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                    Regional Coordination
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                    Client Relations
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                    Cultural Adaptation
                  </li>
                </ul>
              </div>
            </div>

            {/* Rotterdam Office */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500">
              <div className="relative h-48">
                <Image
                  src="/images/office-rotterdam.jpg"
                  alt="Rotterdam Office"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Rotterdam, Netherlands</h3>
                  <p className="text-gray-300 text-sm">European Operations</p>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                    European Market
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                    Strategic Partnerships
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-red-500 mr-2" />
                    Innovation Hub
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-32 relative overflow-hidden">
        {/* Modern Background with Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-red-600 to-orange-500 opacity-90"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/10 rounded-3xl p-12 shadow-2xl border border-white/20">
            <div className="cta-content text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
                <Star className="w-4 h-4 mr-2" />
                Transform Your Vision
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-white">Collaborate?</span>
              </h2>
              
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Let our experienced team transform your vision into an unforgettable event experience. From concept to
                execution, we're with you every step of the way.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white rounded-full px-10 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/registration" className="flex items-center">
                    Register Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-sm bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Link href="/about" className="flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5 opacity-70" />
                  </Link>
                </Button>
              </div>

            
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
