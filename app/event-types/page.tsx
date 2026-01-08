"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Users,
  Building,
  Handshake,
  Store,
  Zap,
  Calendar,
  Globe,
  CheckCircle,
  ArrowRight,
  Award,
  Target,
  Briefcase,
  Lightbulb,
  PieChart,
  Presentation,
  UserPlus,
  MessageSquare,
  Coffee,
  Laptop,
  Monitor,
  Star,
  BarChart3,
} from "lucide-react"

export default function EventTypesPage() {
  const eventTypes = [
    {
      icon: Users,
      title: "Conference",
      description:
        "Large-scale professional conferences with multiple tracks, keynote speakers, and networking opportunities.",
      features: [
        "Multi-track agenda management",
        "Keynote speaker coordination",
        "Exhibition space management",
        "Networking facilitation",
        "Live streaming capabilities",
      ],
      idealFor: "Academic institutions, professional associations, industry leaders",
      image: "/images/conference-room.jpg",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      icon: Building,
      title: "Internal Event",
      description: "Corporate internal events including town halls, training sessions, and company-wide meetings.",
      features: [
        "Employee engagement tools",
        "Internal communication systems",
        "Training module integration",
        "Feedback collection",
        "Performance tracking",
      ],
      idealFor: "Corporations, HR departments, training organizations",
      image: "/images/team-meeting.jpg",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      icon: Handshake,
      title: "Networking",
      description:
        "Focused networking events designed to facilitate meaningful business connections and relationships.",
      features: [
        "AI-powered matchmaking",
        "Digital business card exchange",
        "Structured networking sessions",
        "Follow-up automation",
        "ROI measurement",
      ],
      idealFor: "Business associations, chambers of commerce, professional groups",
      image: "/images/networking-event.jpg",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      icon: Store,
      title: "Trade Show",
      description: "Comprehensive trade show management with exhibitor coordination and lead generation tools.",
      features: [
        "Exhibitor management portal",
        "Lead capture systems",
        "Floor plan management",
        "Visitor tracking",
        "Post-show analytics",
      ],
      idealFor: "Industry associations, exhibition organizers, B2B companies",
      image: "/images/trade-show.jpg",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
    },
    {
      icon: Zap,
      title: "Sales Kickoff",
      description: "High-energy sales events designed to motivate teams and launch new initiatives or products.",
      features: [
        "Motivational content delivery",
        "Product launch coordination",
        "Team building activities",
        "Performance recognition",
        "Goal setting workshops",
      ],
      idealFor: "Sales organizations, product companies, franchise networks",
      image: "/images/speaker-stage.jpg",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
    },
  ]

  const eventFormats = [
    {
      title: "Live Events",
      icon: Users,
      description: "In-person events with full on-site management, technical support, and attendee services.",
      features: [
        "On-site registration and check-in",
        "Audio/visual equipment management",
        "Catering and logistics coordination",
        "Real-time technical support",
      ],
      image: "/images/conference-room.jpg",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      title: "Hybrid Events",
      icon: Calendar,
      description: "Combined in-person and virtual experiences that maximize reach and engagement.",
      features: [
        "Synchronized live and virtual content",
        "Interactive Q&A across formats",
        "Unified registration system",
        "Cross-platform networking",
      ],
      image: "/images/virtual-event.jpg",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      title: "Virtual Events",
      icon: Zap,
      description: "Fully digital experiences with interactive features and global accessibility.",
      features: [
        "Custom virtual event platforms",
        "Live streaming and on-demand content",
        "Virtual networking rooms",
        "Digital exhibitor booths",
      ],
      image: "/images/networking-event.jpg",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
  ]

  const industrySpecificEvents = [
    {
      industry: "Healthcare & Medical",
      icon: Briefcase,
      events: ["Medical Conferences", "Healthcare Symposiums", "Pharmaceutical Launches", "Medical Training"],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      industry: "Technology & Innovation",
      icon: Lightbulb,
      events: ["Tech Conferences", "Product Launches", "Developer Meetups", "Innovation Summits"],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      industry: "Finance & Business",
      icon: PieChart,
      events: ["Investment Summits", "Financial Conferences", "Shareholder Meetings", "Economic Forums"],
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      industry: "Education & Research",
      icon: Presentation,
      events: ["Academic Conferences", "Research Symposiums", "Educational Workshops", "Student Competitions"],
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
    },
  ]

  const eventExperiences = [
    {
      title: "Networking Lounges",
      icon: Coffee,
      description: "Dedicated spaces for meaningful connections with AI-powered matchmaking.",
    },
    {
      title: "Interactive Workshops",
      icon: Laptop,
      description: "Hands-on learning experiences with real-time collaboration tools.",
    },
    {
      title: "Immersive Presentations",
      icon: Monitor,
      description: "Engaging presentations with interactive elements and audience participation.",
    },
    {
      title: "VIP Experiences",
      icon: Star,
      description: "Exclusive access and personalized experiences for key stakeholders.",
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
                  <Calendar className="w-4 h-4 mr-2" />
                  Specialized Expertise
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Diverse</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  Event Types
                </span>
                <br />
                <span className="text-gray-700 text-4xl md:text-5xl">Tailored Solutions</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We specialize in managing diverse event types, each with unique requirements and objectives. Our
                expertise spans across industries and event formats to deliver exceptional experiences.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600 mb-1">5+</div>
                  <div className="text-xs text-gray-600">Event Types</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-red-600 mb-1">3</div>
                  <div className="text-xs text-gray-600">Formats</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-green-600 mb-1">12+</div>
                  <div className="text-xs text-gray-600">Industries</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3">
                  <Link href="/contact">
                    Discuss Your Event
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50 rounded-full px-8 py-3"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/conference-room.jpg"
                  alt="Professional Conference"
                  width={600}
                  height={500}
                  className="object-cover w-full h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent"></div>
              </div>

              {/* Floating Event Type Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-xl">
                    <Users className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Conference</div>
                    <div className="text-xs text-gray-600">Multi-track</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-xl">
                    <Handshake className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Networking</div>
                    <div className="text-xs text-gray-600">AI-Powered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Specialized Events
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Event Types We <span className="text-red-600">Excel In</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each event type requires specific expertise and approach. We've mastered the unique requirements of
              diverse event formats to deliver exceptional experiences.
            </p>
          </div>

          <div className="space-y-16">
            {eventTypes.map((eventType, index) => (
              <div
                key={eventType.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="lg:w-1/2 relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={eventType.image || "/placeholder.svg"}
                      alt={eventType.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-80"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${eventType.color
                        .replace("to-", "to-")
                        .replace("from-", "from-")}/20 to-transparent`}
                    ></div>
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className={`bg-gradient-to-r ${eventType.bgColor} p-3 rounded-xl`}>
                        <eventType.icon className="text-gray-700" size={24} />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">{eventType.title}</div>
                        <div className="text-sm text-gray-600">Specialist</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{eventType.title}</h3>
                  <p className="text-xl text-gray-600 mb-6">{eventType.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {eventType.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`bg-gradient-to-r ${eventType.bgColor} p-6 rounded-2xl`}>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Ideal For:</h4>
                      <p className="text-gray-700">{eventType.idealFor}</p>
                    </div>

                    <Button
                      asChild
                      className={`bg-gradient-to-r ${eventType.color} text-white hover:opacity-90 rounded-full px-6 py-2`}
                    >
                      <Link href="/contact">
                        Explore {eventType.title} Events
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Formats */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Delivery Options
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Flexible <span className="text-red-600">Event Formats</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the delivery format that best suits your objectives, audience, and budget. We excel in all three
              major event formats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventFormats.map((format, index) => (
              <div
                key={format.title}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={format.image || "/placeholder.svg"}
                    alt={format.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${format.color
                      .replace("to-", "to-")
                      .replace("from-", "from-")}/40 to-transparent`}
                  ></div>
                  <div className="absolute top-6 left-6">
                    <div className={`bg-white p-3 rounded-2xl shadow-lg`}>
                      <format.icon className={`text-${format.color.split("-")[1].split(" ")[0]}-600`} size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white">{format.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6">{format.description}</p>
                  <div className="space-y-3">
                    {format.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 bg-${format.color.split("-")[1].split(" ")[0]}-600 rounded-full`}
                        ></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-8">
              Not sure which format is right for your event? Our experts can help you determine the ideal approach.
            </p>
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3">
              <Link href="/contact">Get Format Recommendations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industry-Specific Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Industry Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry-Specific <span className="text-red-600">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique requirements and expectations of different industries, allowing us to deliver
              tailored event experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySpecificEvents.map((industry, index) => (
              <div
                key={industry.industry}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300 p-8"
              >
                <div className={`bg-gradient-to-r ${industry.bgColor} p-4 rounded-2xl w-fit mb-6`}>
                  <industry.icon className="text-gray-700" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.industry}</h3>
                <ul className="space-y-2">
                  {industry.events.map((event, eventIndex) => (
                    <li key={eventIndex} className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 bg-${industry.color.split("-")[1].split(" ")[0]}-600 rounded-full`}
                      ></div>
                      <span className="text-gray-600">{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Event Experiences */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Enhanced Experiences
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Elevate Your <span className="text-red-500">Event Experience</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Add specialized experiences to any event type to create memorable moments and enhance engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventExperiences.map((experience, index) => (
              <div
                key={experience.title}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="bg-red-600 p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <experience.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{experience.title}</h3>
                <p className="text-gray-300">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Planning Process */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6 animate-pulse">
              <Calendar className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Journey to an <span className="text-red-600">Exceptional Event</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've refined our process to ensure every event is meticulously planned and flawlessly executed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Objectives",
                description: "Understanding your goals, audience, and vision",
                icon: Target,
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100",
              },
              {
                step: "02",
                title: "Strategic Planning",
                description: "Creating a comprehensive event strategy and timeline",
                icon: Lightbulb,
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100",
              },
              {
                step: "03",
                title: "Execution & Management",
                description: "Delivering a flawless event experience",
                icon: Calendar,
                gradient: "from-red-500 to-red-600",
                bgGradient: "from-red-50 to-red-100",
              },
              {
                step: "04",
                title: "Analysis & Follow-up",
                description: "Measuring success and planning future improvements",
                icon: BarChart3,
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Top Gradient Bar */}
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                
                <div className="p-8">
                  {/* Icon and Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`bg-gradient-to-r ${item.bgGradient} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`text-${item.gradient.split("-")[1].split(" ")[0]}-600`} size={24} />
                    </div>
                    <span className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      {item.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-red-500 group-hover:to-transparent transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Updates",
                description: "Stay informed with live progress tracking",
                icon: Zap,
              },
              {
                title: "Dedicated Support",
                description: "Expert assistance throughout the process",
                icon: MessageSquare,
              },
              {
                title: "Flexible Adaptation",
                description: "Quick adjustments to changing requirements",
                icon: Target,
              },
            ].map((feature) => (
              <div key={feature.title} className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <feature.icon className="text-red-600" size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Find the Perfect Event Format</h2>
            <p className="text-xl text-red-100 mb-12">
              Let our experts help you determine the ideal event type and format to achieve your specific objectives and
              engage your target audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact">
                  <UserPlus className="mr-2" size={20} />
                  Schedule a Consultation
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                <Link href="/services">
                  <MessageSquare className="mr-2" size={20} />
                  Speak With an Expert
                </Link>
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
                <div className="text-red-200 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">12+</div>
                <div className="text-red-200 text-sm">Industries Served</div>
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