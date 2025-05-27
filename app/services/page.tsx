import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  Users,
  Video,
  CheckCircle,
  MapPin,
  DollarSign,
  Mic,
  Smartphone,
  BarChart,
  FileText,
  Camera,
  Share2,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Comprehensive Event Management Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From initial planning to post-event analysis, we provide end-to-end services for successful scientific
            conferences and events.
          </p>
        </div>

        {/* Hero Video */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-indigo-900 to-cyan-900">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Conference event management"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Professional Event Management</h3>
                <p className="text-gray-200">Delivering exceptional scientific conferences worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-Event Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Pre-Event Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive planning and preparation to ensure your event's success from the very beginning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Registration & Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Complete registration system setup with marketing tools, promotional campaigns, and attendee
                  management platforms.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Venue & Vendor Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Strategic venue selection and vendor management to ensure the perfect setting for your scientific
                  conference.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Event Flow & Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Detailed event planning, timeline management, and coordination to ensure seamless execution.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Approvals & Budgeting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Financial planning, budget management, and necessary approvals to keep your event on track and within
                  budget.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Speaker Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Complete speaker coordination including invitations, travel arrangements, and presentation management.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Banquet & Room Blocks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Conference room arrangements, banquet planning, and accommodation block management for attendees.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* During Event Services */}
        <section className="mb-16 bg-[#1E1E2E] rounded-2xl p-8 border border-gray-700">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">During Event Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Real-time event management and attendee engagement solutions for a memorable conference experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Event App</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Custom mobile application with agenda, networking features, and real-time updates for attendees.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Check-in & Badging</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Streamlined registration process with digital check-in systems and professional badge printing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Attendee Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Interactive sessions, networking opportunities, and engagement tools to maximize attendee
                  participation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Trade Show Lead Capture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Advanced lead capture systems for exhibitions and trade show components of your conference.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Virtual Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Hybrid and virtual event capabilities with live streaming, breakout rooms, and online networking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Webinars</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Professional webinar hosting with interactive features and seamless integration with your event
                  platform.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Post-Event Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Post-Event Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive follow-up services to maximize the impact and value of your scientific conference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Event & Attendee Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Detailed analytics and insights on event performance, attendee engagement, and key metrics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Share2 className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Seamless integration with your existing systems and platforms for data synchronization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Surveys</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Comprehensive feedback collection and analysis to improve future events and measure satisfaction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Lead Retrieval</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Efficient lead retrieval and follow-up systems for exhibitors and sponsors to maximize ROI.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Event Video</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Professional video production and editing services to capture and share key moments from your event.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-4">
                  <Share2 className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Media & Social Media Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Post-event media management and social media campaigns to extend your event's reach and impact.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Scientific Conference?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let our experienced team handle every aspect of your event, from initial planning to post-event analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              <Link href="/capabilities">View Our Capabilities</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
