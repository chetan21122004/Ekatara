import Image from "next/image"
import {
  Smartphone,
  BarChart3,
  Users,
  Globe,
  Zap,
  Shield,
  Camera,
  Headphones,
  Calendar,
  CreditCard,
  FileText,
  Settings,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  TrendingUp,
  Lock,
  Wifi,
  Monitor,
  Database,
  Cloud,
  Cpu,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CapabilitiesPage() {
  const technologyCapabilities = [
    {
      icon: Smartphone,
      title: "Mobile Event Apps",
      description:
        "Custom mobile applications with networking features, agenda management, and real-time notifications.",
      features: [
        "Native iOS & Android apps",
        "Real-time push notifications",
        "Interactive networking",
        "Offline functionality",
        "Custom branding",
        "Multi-language support",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live event dashboards with attendance tracking, engagement metrics, and performance indicators.",
      features: [
        "Live attendance tracking",
        "Engagement heatmaps",
        "Session analytics",
        "ROI measurement",
        "Custom reporting",
        "Predictive insights",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      icon: Globe,
      title: "Virtual Event Platforms",
      description:
        "Comprehensive virtual and hybrid event solutions with interactive features and global accessibility.",
      features: [
        "Custom virtual environments",
        "HD video streaming",
        "Interactive breakout rooms",
        "Virtual networking",
        "Global CDN delivery",
        "Multi-timezone support",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      icon: Zap,
      title: "Lead Capture Systems",
      description:
        "Advanced lead generation tools with QR code scanning, business card exchange, and automated follow-up.",
      features: [
        "QR code lead capture",
        "Digital business cards",
        "CRM integration",
        "Automated follow-up",
        "Lead scoring",
        "Export capabilities",
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures, GDPR compliance, and data protection protocols.",
      features: [
        "GDPR compliance",
        "End-to-end encryption",
        "SOC 2 certification",
        "Data anonymization",
        "Audit trails",
        "Privacy controls",
      ],
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
    },
    {
      icon: Camera,
      title: "Live Streaming & Production",
      description:
        "Professional broadcasting capabilities with multi-camera setups, interactive features, and global reach.",
      features: [
        "Multi-camera production",
        "4K streaming quality",
        "Interactive overlays",
        "Global distribution",
        "Recording & playback",
        "Social media integration",
      ],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
    },
  ]

  const platformFeatures = [
    {
      category: "Registration & Management",
      icon: Users,
      capabilities: [
        {
          title: "Custom Registration Forms",
          description: "Tailored registration workflows with conditional logic and custom fields",
          icon: FileText,
        },
        {
          title: "Payment Processing",
          description: "Secure payment gateways with multiple currency support",
          icon: CreditCard,
        },
        {
          title: "Automated Communications",
          description: "Email sequences, confirmations, and reminder systems",
          icon: Headphones,
        },
        {
          title: "Attendee Management",
          description: "Complete attendee lifecycle management and tracking",
          icon: Users,
        },
      ],
    },
    {
      category: "Event Operations",
      icon: Settings,
      capabilities: [
        {
          title: "Agenda Management",
          description: "Dynamic scheduling with speaker coordination and room management",
          icon: Calendar,
        },
        {
          title: "Technical Support",
          description: "24/7 technical assistance and troubleshooting during events",
          icon: Headphones,
        },
        {
          title: "Integration Hub",
          description: "Seamless integration with CRM, marketing, and business systems",
          icon: Settings,
        },
        {
          title: "Real-time Monitoring",
          description: "Live event monitoring with instant issue detection and resolution",
          icon: Monitor,
        },
      ],
    },
  ]

  const infrastructureStats = [
    { label: "Global CDN Nodes", value: "150+", icon: Globe },
    { label: "Concurrent Users", value: "100K+", icon: Users },
    { label: "Uptime Guarantee", value: "99.9%", icon: TrendingUp },
    { label: "Data Centers", value: "12", icon: Database },
    { label: "Security Certifications", value: "5", icon: Shield },
    { label: "API Endpoints", value: "200+", icon: Cpu },
  ]

  const innovationAreas = [
    {
      title: "AI-Powered Insights",
      description: "Machine learning algorithms for attendee behavior analysis and event optimization",
      icon: Lightbulb,
      features: ["Predictive analytics", "Behavior tracking", "Recommendation engine", "Smart scheduling"],
    },
    {
      title: "Blockchain Integration",
      description: "Secure, transparent credentialing and certificate management using blockchain technology",
      icon: Lock,
      features: ["Digital certificates", "Secure verification", "Immutable records", "Smart contracts"],
    },
    {
      title: "IoT Event Solutions",
      description: "Internet of Things integration for smart venues and enhanced attendee experiences",
      icon: Wifi,
      features: ["Smart badges", "Environmental monitoring", "Crowd flow analysis", "Automated check-ins"],
    },
    {
      title: "AR/VR Experiences",
      description: "Augmented and virtual reality solutions for immersive event experiences",
      icon: Monitor,
      features: ["Virtual venues", "AR networking", "3D presentations", "Immersive demos"],
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

        {/* Floating Tech Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-300 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-100 rounded-full opacity-30 animate-bounce"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-100 to-red-50 border border-red-200 text-red-700 text-sm font-semibold">
                  <Cpu className="w-4 h-4 mr-2" />
                  Advanced Technology
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Cutting-Edge</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  Event Technology
                </span>
                <br />
                <span className="text-gray-700 text-4xl md:text-5xl">& Innovation</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Advanced event management tools and technologies that enable us to deliver exceptional experiences and
                measurable results for every event, powered by enterprise-grade infrastructure.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-blue-600 mb-1">AI</div>
                  <div className="text-xs text-gray-600">Powered</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-green-600 mb-1">Cloud</div>
                  <div className="text-xs text-gray-600">Native</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-purple-600 mb-1">Global</div>
                  <div className="text-xs text-gray-600">Scale</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-red-600 mb-1">Secure</div>
                  <div className="text-xs text-gray-600">Enterprise</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3">
                  <Link href="/contact">
                    Schedule Demo
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
                <Button  
                  asChild
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50 rounded-full px-8 py-3"
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Tech Showcase */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/virtual-event.jpg"
                  alt="Event Technology Platform"
                  width={600}
                  height={500}
                  className="object-cover w-full h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>

                {/* Tech Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <Monitor className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">Live Platform</div>
                        <div className="text-sm text-gray-600">Real-time Analytics</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-xl">
                    <BarChart3 className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Analytics</div>
                    <div className="text-xs text-gray-600">Real-time</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-2 rounded-xl">
                    <Smartphone className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Mobile</div>
                    <div className="text-xs text-gray-600">Native Apps</div>
                  </div>
                </div>
              </div>

              {/* Background Tech Decoration */}
              <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Capabilities Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              Technology Stack
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced <span className="text-red-600">Technology Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge tools and platforms that power modern event experiences and deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyCapabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${capability.color}`}></div>
                <div className="p-8">
                  <div className={`bg-gradient-to-r ${capability.bgColor} p-4 rounded-2xl w-fit mb-6`}>
                    <capability.icon className="text-gray-700" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                  <p className="text-gray-600 mb-6">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
              <Settings className="w-4 h-4 mr-2" />
              Platform Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-red-600">Event Management</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end platform capabilities covering every aspect of event planning, execution, and analysis.
            </p>
          </div>

          {platformFeatures.map((category, categoryIndex) => (
            <div key={category.category} className="mb-16">
              <div className="text-center mb-12">
                <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 w-fit mx-auto mb-4">
                  <category.icon className="text-red-600" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.capabilities.map((capability, capIndex) => (
                  <div
                    key={capability.title}
                    className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300"
                  >
                    <div className="bg-red-50 p-3 rounded-2xl w-fit mb-4 group-hover:bg-red-100 transition-colors">
                      <capability.icon className="text-red-600" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h4>
                    <p className="text-gray-600 text-sm">{capability.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              Global Infrastructure
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade <span className="text-red-500">Infrastructure</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Robust, scalable infrastructure that ensures reliable performance for events of any size, anywhere in the
              world.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {infrastructureStats.map((stat, index) => (
              <div key={stat.label} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 mb-4 group-hover:bg-white/20 transition-colors">
                  <stat.icon className="text-red-500 mx-auto mb-4" size={32} />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Infrastructure Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="bg-blue-600 p-3 rounded-2xl w-fit mb-4">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global CDN</h3>
              <p className="text-gray-300 text-sm">
                Worldwide content delivery network ensuring fast, reliable access from any location with 150+ edge
                nodes.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="bg-green-600 p-3 rounded-2xl w-fit mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
              <p className="text-gray-300 text-sm">
                Enterprise-grade security with SOC 2 compliance, end-to-end encryption, and comprehensive audit trails.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="bg-purple-600 p-3 rounded-2xl w-fit mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Auto-Scaling</h3>
              <p className="text-gray-300 text-sm">
                Intelligent auto-scaling infrastructure that adapts to demand, ensuring optimal performance during peak
                usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Future Innovation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Next-Generation <span className="text-red-600">Event Technology</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering the future of events with cutting-edge technologies like AI, blockchain, IoT, and immersive
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovationAreas.map((area, index) => (
              <div
                key={area.title}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-red-100 to-red-50 p-4 rounded-2xl group-hover:from-red-200 group-hover:to-red-100 transition-colors">
                    <area.icon className="text-red-600" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                    <p className="text-gray-600 mb-6">{area.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {area.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
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
      </section>

      {/* Global Capabilities */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Global Reach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Worldwide <span className="text-red-600">Event Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              International expertise and local knowledge to deliver successful events worldwide with multi-language
              support and cultural adaptation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Globe className="text-red-600 mr-3" size={24} />
                  Multi-Language Support
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Real-time translation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Multilingual platforms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Cultural adaptation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Local compliance</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="text-red-600 mr-3" size={24} />
                  Time Zone Management
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Global scheduling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Multi-timezone events</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">Regional customization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">24/7 global support</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/trade-show.jpg"
                alt="Global Event Capabilities"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>

              {/* Floating Global Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Globe className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Countries Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
