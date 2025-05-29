import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  CheckCircle,
  Users,
  Award,
  Target,
  Lightbulb,
  BookOpen,
  Calendar,
  ArrowRight,
  MessageSquare,
  Globe,
  Zap,
  Brain,
  Rocket,
  Trophy,
  Play,
  ChevronRight,
  Timer,
  BadgeCheck,
  Sparkles,
} from "lucide-react"

export default function AbstractPage() {
  const submissionSteps = [
    {
      step: "01",
      title: "Account Setup",
      description: "Create your researcher profile in minutes",
      icon: Users,
      details: [
        "Institutional email verification",
        "Professional profile creation",
        "Dashboard access granted",
        "Submission tracking enabled",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      duration: "2 mins",
    },
    {
      step: "02",
      title: "Abstract Preparation",
      description: "Use our smart tools and templates",
      icon: Brain,
      details: [
        "AI-powered writing assistant",
        "Real-time word count tracking",
        "Template auto-formatting",
        "Compliance checker included",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      duration: "15 mins",
    },
    {
      step: "03",
      title: "Smart Upload",
      description: "Intelligent submission with auto-validation",
      icon: Rocket,
      details: ["Drag & drop file upload", "Auto-format detection", "Category suggestions", "Keyword optimization"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      duration: "5 mins",
    },
    {
      step: "04",
      title: "Expert Review",
      description: "World-class peer review process",
      icon: Trophy,
      details: ["PhD-level reviewers", "Double-blind review", "Detailed feedback reports", "Real-time status updates"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      duration: "4-6 weeks",
    },
    {
      step: "05",
      title: "Publication Ready",
      description: "Get published and gain recognition",
      icon: Sparkles,
      details: ["Acceptance notification", "Presentation guidelines", "Speaker resources", "Global visibility"],
      color: "from-red-500 to-rose-500",
      bgColor: "from-red-50 to-rose-50",
      duration: "Instant",
    },
  ]

  const abstractCategories = [
    {
      title: "Research Excellence",
      icon: BookOpen,
      description: "Groundbreaking research and methodologies",
      features: ["Original findings", "Peer recognition", "Publication pathway", "Research grants"],
      color: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-500/10 to-blue-600/10",
      submissions: "2,500+",
      acceptance: "92%",
    },
    {
      title: "Innovation Showcase",
      icon: Lightbulb,
      description: "Cutting-edge technologies and breakthroughs",
      features: ["Tech demos", "Investor meetings", "Media coverage", "Patent support"],
      color: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-500/10 to-purple-600/10",
      submissions: "1,800+",
      acceptance: "88%",
    },
    {
      title: "Industry Impact",
      icon: Target,
      description: "Real-world applications and case studies",
      features: ["Industry partnerships", "Implementation guides", "ROI analysis", "Best practices"],
      color: "from-green-500 to-green-600",
      bgGradient: "from-green-500/10 to-green-600/10",
      submissions: "3,200+",
      acceptance: "95%",
    },
  ]

  const reviewMetrics = [
    { metric: "Review Speed", value: "48hrs", description: "Average initial review time", icon: Timer },
    { metric: "Acceptance Rate", value: "91%", description: "Overall acceptance rate", icon: BadgeCheck },
    { metric: "Expert Reviewers", value: "500+", description: "PhD-level reviewers", icon: Users },
    { metric: "Global Reach", value: "150+", description: "Countries represented", icon: Globe },
  ]

  const timelineEvents = [
    {
      event: "Submission Portal Opens",
      date: "Jan 15",
      status: "active",
      description: "Start your submission journey",
    },
    { event: "Early Bird Deadline", date: "Apr 30", status: "upcoming", description: "Priority review & feedback" },
    { event: "Regular Deadline", date: "Jun 15", status: "upcoming", description: "Final submission date" },
    { event: "Review Complete", date: "Jul 30", status: "upcoming", description: "All decisions announced" },
    { event: "Speaker Prep", date: "Aug 15", status: "upcoming", description: "Presentation materials due" },
    { event: "Conference Event", date: "Sep 15", status: "upcoming", description: "Present your research" },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-red-50 via-white to-blue-50 overflow-hidden">
        {/* Animated Background Elements */}
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
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-100 to-red-50 border border-red-200 text-red-700 text-sm font-semibold shadow-lg">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI-Powered Submission Platform
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">Share Your</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Research
                </span>
                <br />
                <span className="text-gray-700 text-5xl md:text-6xl">With The World</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join thousands of researchers using our intelligent submission platform. Get AI-powered assistance,
                expert reviews, and global recognition for your groundbreaking work.
              </p>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    7,500+
                  </div>
                  <div className="text-sm text-gray-600">Abstracts Published</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-1">
                    91%
                  </div>
                  <div className="text-sm text-gray-600">Acceptance Rate</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent mb-1">
                    48hrs
                  </div>
                  <div className="text-sm text-gray-600">Review Time</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-1">
                    150+
                  </div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="#submission">
                    <Rocket className="mr-2" size={20} />
                    Start Submission
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-red-200 text-red-600 hover:bg-red-50 rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="#demo">
                    <Play className="mr-2" size={20} />
                    Watch Demo
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Enhanced Visual */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/speaker-stage.jpg"
                  alt="Research Presentation"
                  width={600}
                  height={500}
                  className="object-cover w-full h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent"></div>
              </div>

              {/* Floating Achievement Cards */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Published</div>
                    <div className="text-sm text-gray-600">91% Success Rate</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl">
                    <Globe className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Global</div>
                    <div className="text-sm text-gray-600">150+ Countries</div>
                  </div>
                </div>
              </div>

              {/* AI Assistant Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Brain className="w-4 h-4 inline mr-2" />
                AI Powered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Submission Process */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white" id="submission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium mb-8 shadow-lg">
              <Zap className="w-5 h-5 mr-2" />
              Intelligent Submission Process
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              From Idea to{" "}
              <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                Publication
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our AI-powered platform guides you through every step, ensuring your research gets the recognition it
              deserves.
            </p>
          </div>

          <div className="space-y-20">
            {submissionSteps.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-16 items-center`}
              >
                {/* Visual Side */}
                <div className="lg:w-1/2 relative">
                  <div
                    className={`bg-gradient-to-br ${step.bgColor} p-12 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-sm`}
                  >
                    <div className="text-center">
                      <div className={`bg-gradient-to-r ${step.color} p-8 rounded-3xl w-fit mx-auto mb-8 shadow-xl`}>
                        <step.icon className="text-white" size={56} />
                      </div>
                      <div className="text-8xl font-bold text-gray-200 mb-6">{step.step}</div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 text-gray-700 text-sm font-medium">
                        <Timer className="w-4 h-4 mr-2" />
                        {step.duration}
                      </div>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-full p-6 shadow-2xl border border-gray-100">
                    <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2">
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">{step.title}</h3>
                  <p className="text-xl text-gray-600 mb-8">{step.description}</p>

                  <div className="space-y-6">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-4 group">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-300">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {index === 0 && (
                    <div className="mt-8">
                      <Button
                        asChild
                        className={`bg-gradient-to-r ${step.color} text-white hover:opacity-90 rounded-full px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                      >
                        <Link href="#create-account">
                          Get Started Now
                          <ArrowRight className="ml-2" size={20} />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Abstract Categories */}
      <section className="py-32 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-100 to-blue-100 text-green-700 text-sm font-medium mb-8 shadow-lg">
              <Award className="w-5 h-5 mr-2" />
              Research Categories
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Choose Your{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Impact Area
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Select the category that best showcases your research and maximizes your global impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {abstractCategories.map((category, index) => (
              <div
                key={category.title}
                className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>

                <div className="relative p-8">
                  <div className="bg-gray-50 p-6 rounded-2xl w-fit mb-8 group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                    <category.icon className="text-gray-700 group-hover:text-gray-900" size={40} />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">{category.title}</h3>
                  <p className="text-gray-600 mb-8 group-hover:text-gray-700">{category.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-gray-50 rounded-xl group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                      <div className="text-2xl font-bold text-gray-900">{category.submissions}</div>
                      <div className="text-xs text-gray-600">Submissions</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-xl group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                      <div className="text-2xl font-bold text-green-600">{category.acceptance}</div>
                      <div className="text-xs text-gray-600">Acceptance</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${category.color} rounded-full`}></div>
                        <span className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full mt-8 bg-gradient-to-r ${category.color} text-white hover:opacity-90 rounded-full py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Submit in This Category
                    <ChevronRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8 shadow-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Submission Timeline
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Your Journey to{" "}
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Recognition
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Track your progress through our streamlined submission and review process.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 rounded-full"></div>

            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-8`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div
                      className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                        event.status === "active" ? "ring-2 ring-red-400 shadow-2xl" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{event.event}</h3>
                        {event.status === "active" && (
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                            Active Now
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 mb-4">{event.description}</p>
                      <div className="text-2xl font-bold text-red-400">{event.date}</div>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div
                      className={`w-6 h-6 rounded-full ${
                        event.status === "active"
                          ? "bg-red-500 animate-pulse shadow-lg shadow-red-500/50"
                          : "bg-white/30"
                      } border-4 border-white`}
                    ></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Share Your Research?</h2>
            <p className="text-xl text-white/90 mb-12">
              Join thousands of researchers who have already shared their groundbreaking work with our global community.
              Start your submission journey today with AI-powered assistance.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="#submission-portal">
                  <Rocket className="mr-3" size={24} />
                  Start Your Submission
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 rounded-full px-12 py-6 text-xl font-semibold transition-all duration-300"
              >
                <Link href="/contact">
                  <MessageSquare className="mr-3" size={24} />
                  Get Expert Help
                </Link>
              </Button>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {reviewMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <metric.icon className="text-white mx-auto mb-4" size={32} />
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-white/80 text-sm font-medium mb-1">{metric.metric}</div>
                    <div className="text-white/60 text-xs">{metric.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
