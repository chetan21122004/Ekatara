import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Users,
  Video,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Target,
  Zap,
  Play,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1E1E2E] to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-400/20"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20 mb-8">
              <Star className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-gray-200 text-sm font-medium">Leading International Conference Organizer</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Connecting Global
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Scientific{" "}
              </span>
              Communities
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your scientific conferences with our 8+ years of expertise in organizing world-class academic
              events across medical, nursing, and healthcare sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-cyan-400 hover:from-indigo-600 hover:to-cyan-500 text-white px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Link href="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-200 hover:bg-gray-800 hover:text-cyan-400 px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-[#1E1E2E] relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-indigo-900 to-cyan-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">See Our Conferences in Action</h3>
                  <p className="text-indigo-200">Watch how we bring global scientific communities together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">8+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
              <div className="text-gray-400">Global Offices</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">100+</div>
              <div className="text-gray-400">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
              <div className="text-gray-400">Attendees Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Solutions */}
      <section className="py-24 bg-gradient-to-b from-[#1E1E2E] to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 px-4 py-2 text-sm font-medium border border-indigo-500/20">
              Event Solutions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Comprehensive Event Management</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From intimate workshops to large-scale international conferences, we deliver exceptional experiences
              across all formats
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5"></div>
              <CardHeader className="relative text-center pt-12 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-cyan-400 mb-3">Live Events</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  In-person conferences with immersive experiences and meaningful connections
                </CardDescription>
              </CardHeader>
              <CardContent className="relative px-8 pb-12">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Full venue management
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    On-site coordination
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Networking facilitation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5"></div>
              <CardHeader className="relative text-center pt-12 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-indigo-400 mb-3">Hybrid Events</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Seamless blend of physical and virtual experiences for global reach
                </CardDescription>
              </CardHeader>
              <CardContent className="relative px-8 pb-12">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-indigo-400 mr-3" />
                    Dual-format delivery
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-indigo-400 mr-3" />
                    Global accessibility
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-indigo-400 mr-3" />
                    Interactive engagement
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5"></div>
              <CardHeader className="relative text-center pt-12 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-cyan-400 mb-3">Virtual Events</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Fully digital conferences with cutting-edge technology and engagement
                </CardDescription>
              </CardHeader>
              <CardContent className="relative px-8 pb-12">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Advanced platform
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Breakout rooms
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                    Digital networking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Mission & Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Dedicated to excellence in scholarly research and innovation, connecting minds across the globe
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To provide the perfect platform for researchers and academicians to exchange ideas, share
                      insights, and participate in discussions that advance their fields and earn professional
                      development credits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To be the world's leading organization supporting scholarly research and innovation, fostering
                      global collaboration in medical sciences and technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Our Expertise</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Specialized in medical, nursing, and healthcare events with a team of science professionals
                      bringing over 20 years of combined experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 backdrop-blur-sm border border-gray-700 p-8 overflow-hidden">
                  <div className="h-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-[#1E1E2E]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 px-4 py-2 text-sm font-medium border border-cyan-400/20">
              Complete Solutions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">End-to-End Event Management</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial planning to post-event analysis, we handle every detail to ensure your conference's success
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="group rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E] overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-cyan-400"></div>
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-8 w-8 text-indigo-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-indigo-400 mb-3">Pre-Event</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Comprehensive planning and preparation services
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                    <span className="text-sm">Registration & Marketing</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                    <span className="text-sm">Venue & Vendor Sourcing</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                    <span className="text-sm">Speaker Management</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                    <span className="text-sm">Budgeting & Approvals</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E] overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-cyan-400 to-indigo-500"></div>
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-cyan-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-cyan-400 mb-3">During Event</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Real-time management and attendee engagement
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-indigo-400 mr-3" />
                    <span className="text-sm">Event App & Check-in</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-indigo-400 mr-3" />
                    <span className="text-sm">Attendee Engagement</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-indigo-400 mr-3" />
                    <span className="text-sm">Trade Show Management</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-indigo-400 mr-3" />
                    <span className="text-sm">Virtual Experience</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E] overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-indigo-500 to-cyan-400"></div>
              <CardHeader className="p-8">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-indigo-400" />
                </div>
                <CardTitle className="text-2xl font-bold text-indigo-400 mb-3">Post-Event</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Analysis, follow-up, and impact measurement
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                    <span className="text-sm">Event Insights & Analytics</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                    <span className="text-sm">Surveys & Feedback</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                    <span className="text-sm">Event Video Production</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                    <span className="text-sm">Media Management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-cyan-400 hover:from-indigo-600 hover:to-cyan-500 text-white px-8 py-4 text-lg rounded-xl shadow-xl"
            >
              <Link href="/services">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-[#1E1E2E] to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to Create Your Next
              <span className="block">Scientific Conference?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Join thousands of researchers and academicians who trust us to deliver exceptional conference experiences.
              Let's bring your vision to life with our expertise and global network.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg rounded-xl shadow-2xl hover:shadow-cyan-400/25 transition-all duration-300 bg-white text-gray-900 hover:bg-gray-100"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-400 text-gray-200 hover:bg-gray-800 hover:text-cyan-400 px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
