import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Video,
  Globe,
  Palette,
  Database,
  DollarSign,
  BarChart,
  Share2,
  CheckCircle,
  Smartphone,
  Calendar,
  Mic,
} from "lucide-react"
import Link from "next/link"

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Our Capabilities</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Advanced Tools & Technologies</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge event management tools and comprehensive capabilities to deliver exceptional scientific
            conferences and events.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-indigo-900 to-cyan-900">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Advanced event technology"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Cutting-Edge Event Technology</h3>
                <p className="text-gray-200 text-lg">Powering exceptional conference experiences worldwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Event Capabilities */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core Event Capabilities</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive event formats and delivery methods to meet diverse conference requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Live Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Live conference event"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardDescription className="text-center text-gray-300">
                  In-person conferences with full venue management, attendee engagement, and on-site coordination for
                  maximum networking opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Hybrid Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Hybrid event setup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardDescription className="text-center text-gray-300">
                  Seamless combination of in-person and virtual experiences, allowing global participation while
                  maintaining local engagement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Virtual Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Virtual conference"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardDescription className="text-center text-gray-300">
                  Fully digital conferences with interactive features, breakout rooms, virtual networking, and global
                  accessibility.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technology & Tools */}
        <section className="mb-16 bg-[#1E1E2E] rounded-2xl p-8 border border-gray-700">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Technology & Tools</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              State-of-the-art technology solutions to enhance attendee experience and streamline event management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-sm text-indigo-400">Event App</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-sm text-gray-300">
                  Custom mobile applications with agenda, networking, and real-time updates
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-sm text-cyan-400">Check-in App</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-sm text-gray-300">
                  Digital check-in systems with QR code scanning and badge printing
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BarChart className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-sm text-indigo-400">Lead Capture</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-sm text-gray-300">
                  Advanced lead capture systems for exhibitions and networking
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Database className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-sm text-cyan-400">Delegate Management</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-sm text-gray-300">
                  Comprehensive attendee database and communication management
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Marketing & Promotion */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Marketing & Promotion</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive marketing solutions to maximize event visibility and attendee engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Share2 className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Social Media Promotions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300">
                  Strategic social media campaigns across platforms to increase event awareness and engagement
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BarChart className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Media Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300">
                  Comprehensive media strategy and planning to reach target audiences effectively
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Sponsorships</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300">
                  Sponsorship management and partnership development to enhance event value
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Palette className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Event Creative</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300">
                  Professional design and branding services for cohesive event identity
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Registration & Payment Features */}
        <section className="mb-16 bg-gradient-to-br from-indigo-900/20 to-cyan-900/20 rounded-2xl p-8 border border-indigo-500/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Registration & Payment Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Advanced registration systems with comprehensive payment processing and attendee management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-2xl shadow-lg border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <CardTitle className="text-indigo-400">Registration Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                    <span className="text-sm text-gray-300">Marketing tools and promotional campaigns</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                    <span className="text-sm text-gray-300">Custom registration websites</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                    <span className="text-sm text-gray-300">Interactive agenda management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                    <span className="text-sm text-gray-300">Comprehensive tracking & reporting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-3" />
                    <span className="text-sm text-gray-300">AI-driven workflow automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <CardTitle className="text-cyan-400">Payment Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-indigo-400 mr-3" />
                    <span className="text-sm text-gray-300">Multiple payment methods support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-indigo-400 mr-3" />
                    <span className="text-sm text-gray-300">Multi-currency processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-indigo-400 mr-3" />
                    <span className="text-sm text-gray-300">Early bird and discount management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-indigo-400 mr-3" />
                    <span className="text-sm text-gray-300">Automated invoicing systems</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-indigo-400 mr-3" />
                    <span className="text-sm text-gray-300">Secure payment processing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Event Types We Handle */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Event Types We Handle</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Specialized expertise across various event formats and industry requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mic className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Conferences</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300">
                  Large-scale academic and scientific conferences with multiple tracks and sessions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Internal Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300">
                  Corporate meetings, training sessions, and organizational gatherings
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300">
                  Professional networking events and industry meetups
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BarChart className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Sales Kickoff</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300">
                  Sales team meetings, product launches, and business development events
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Trade Shows</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300">
                  Industry exhibitions, product showcases, and vendor exhibitions
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Experience Our Advanced Capabilities</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Discover how our cutting-edge tools and comprehensive capabilities can transform your next scientific
            conference into an exceptional experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              <Link href="/event-types">Explore Event Types</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
