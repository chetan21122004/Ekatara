import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, Award, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            About Ekatra Meetings
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Connecting Global Scientific Communities</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With 8+ years of experience and a global presence, we are dedicated to excellence in scholarly research and
            innovation.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-indigo-900 to-cyan-900">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Scientific Conference"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="rounded-2xl shadow-lg border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
            <CardHeader>
              <CardTitle className="flex items-center text-indigo-400">
                <Target className="mr-2 h-6 w-6" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                To act as a forum where academics and researchers from all over the world can meet to exchange ideas on
                their research and discuss the future developments in their disciplines. We promote, support, expand,
                preserve, and disseminate scholarly research, knowledge, and creative endeavours in the medical sciences
                and technology.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
            <CardHeader>
              <CardTitle className="flex items-center text-cyan-400">
                <Award className="mr-2 h-6 w-6" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                To provide the perfect platform for all researchers and academicians to exchange ideas, share insights
                and innovations, meet a diverse group of colleagues, participate in discussions, learn about the latest
                research findings in their field and to earn credits for professional development.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Company Overview</h2>
          <div className="bg-gradient-to-br from-[#1E1E2E] to-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6">
                  Ekatra Meetings is the leading international scientific conference organizer with a vast and
                  tremendous experience in organizing biggest international academic and business conferences across the
                  globe. Our main strength is our highly qualified, experienced and dedicated team and also close
                  contacts with almost all major societies and association throughout the world.
                </p>
                <p className="text-lg text-gray-300">
                  We are specialized in organizing biggest academic & industry events, workshops and exhibitions mostly
                  in the field of medical, nursing and healthcare. Our international company headquarters are based in
                  Rotterdam, Dubai and Pune, and we already have 8 years of experience in the events industry.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Global Presence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl shadow-lg text-center border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Rotterdam</CardTitle>
                <CardDescription className="text-gray-400">European Headquarters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Rotterdam skyline"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-300">
                  Our European operations center, serving the European scientific community with comprehensive event
                  management services.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg text-center border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Dubai</CardTitle>
                <CardDescription className="text-gray-400">Middle East Hub</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Dubai skyline"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-300">
                  Strategic location connecting East and West, facilitating international collaborations and
                  cross-cultural exchanges.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg text-center border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Pune</CardTitle>
                <CardDescription className="text-gray-400">Asian Operations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Pune cityscape"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-300">
                  Our Asian headquarters, supporting the growing scientific community across the Asia-Pacific region.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Expert Team</h2>
          <Card className="rounded-2xl shadow-lg border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
            <CardHeader>
              <CardTitle className="flex items-center text-indigo-400">
                <Users className="mr-2 h-6 w-6" />
                Scientific Background & Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-300 mb-4">
                    The team comprises of professionals from Science background which helps them to understand the
                    requirements of the clients when it comes to the scientific events. With exposure of more than 2
                    decades in event organizing and execution, it's the perfect blend of knowledge and experience.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Scientific Expertise</h4>
                      <p className="text-gray-300">
                        Our team members have scientific backgrounds, ensuring deep understanding of academic
                        requirements and research methodologies.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Event Management Excellence</h4>
                      <p className="text-gray-300">
                        Over 20 years of combined experience in organizing and executing large-scale international
                        scientific conferences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Professional team meeting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Ekatra Meetings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-[#1E1E2E] border border-gray-700">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Professional Academic Event Organizer</h3>
              <p className="text-gray-300 text-sm">Specialized expertise in academic and scientific event management</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-[#1E1E2E] border border-gray-700">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Valuable Forum</h3>
              <p className="text-gray-300 text-sm">
                Platform for sharing best practices and exchanging innovative ideas
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-[#1E1E2E] border border-gray-700">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Collaboration Opportunities</h3>
              <p className="text-gray-300 text-sm">
                Initiating meaningful collaborations between researchers worldwide
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-[#1E1E2E] border border-gray-700">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Trusted by Researchers</h3>
              <p className="text-gray-300 text-sm">Recognized and trusted amongst the global research community</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
