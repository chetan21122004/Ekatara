import Image from "next/image"
import { Globe, Users, Award, Target, CheckCircle, Star, TrendingUp, Heart, Lightbulb, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Executive Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "15+ years in global event management with expertise in scientific conferences and corporate events.",
    },
    {
      name: "Rajesh Patel",
      role: "Chief Technology Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Technology innovator specializing in event platforms and digital transformation solutions.",
    },
    {
      name: "Maria Rodriguez",
      role: "Head of European Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "International business expert with deep knowledge of European markets and cultural nuances.",
    },
  ]

  const milestones = [
    { year: "2018", title: "Company Founded", description: "Established in Pune with a vision for global excellence" },
    {
      year: "2019",
      title: "First International Event",
      description: "Successfully managed our first cross-border conference",
    },
    {
      year: "2020",
      title: "Virtual Innovation",
      description: "Pioneered hybrid event solutions during global challenges",
    },
    { year: "2021", title: "Dubai Expansion", description: "Opened Middle East operations to serve regional clients" },
    { year: "2022", title: "European Presence", description: "Established Rotterdam office for European market" },
    { year: "2023", title: "500+ Events Milestone", description: "Celebrated delivering over 500 successful events" },
    { year: "2024", title: "AI Integration", description: "Launched AI-powered event management solutions" },
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
        <div className="absolute top-40 right-20 w-16 h-16 bg-red-200 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-red-300 rounded-full opacity-50 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <span className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-100 to-red-50 border border-red-200 text-red-700 text-sm font-semibold">
                  <Heart className="w-4 h-4 mr-2" />
                  Our Story
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="text-gray-900">About</span>
                <br />
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  Ekatra Meetings
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A global leader in professional event management with a passion for creating exceptional experiences
                that bring people together and drive business success across three continents.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-red-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">Events Delivered</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-red-600 mb-1">50K+</div>
                  <div className="text-sm text-gray-600">Happy Attendees</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-red-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Global Offices</div>
                </div>
                <div className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-3xl font-bold text-red-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>

              <Button asChild className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-meeting.jpg"
                  alt="Ekatra Meetings Team"
                  width={600}
                  height={500}
                  className="object-cover w-full h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent"></div>
              </div>

              {/* Floating Achievement Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-xl">
                    <Award className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">ISO 9001</div>
                    <div className="text-sm text-gray-600">Certified Excellence</div>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-gradient-to-br from-red-200 to-red-300 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Story Behind <span className="text-red-600">Our Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with a clear mission to revolutionize event management through innovation, expertise, and global
              reach.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl border border-red-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ekatra Meetings was established with a clear mission: to deliver world-class event management services
                  that exceed expectations and create lasting impact. Our name "Ekatra" means "together" in Sanskrit,
                  reflecting our core belief in the power of bringing people together.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  With our global presence spanning three continents, we combine local expertise with international
                  standards to deliver events that resonate with diverse audiences. Our team brings together decades of
                  experience in scientific, academic, and corporate event management.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-3xl border border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  From intimate networking sessions to large-scale international conferences, we have successfully
                  managed thousands of events, always with the same commitment to excellence and attention to detail
                  that defines our brand.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/conference-room.jpg"
                alt="Professional Conference"
                width={600}
                height={600}
                className="rounded-3xl shadow-2xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            {/* Background decoration */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4 mr-2" />
                Our Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Milestones of <span className="text-red-600">Excellence</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key moments that shaped our journey from a startup to a global event management leader.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-200 via-red-300 to-red-200 transform -translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  } group`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div 
                    className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}
                  >
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group-hover:border-red-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-red-50 p-3 rounded-2xl">
                          {index === 0 && <Star className="text-red-600 w-6 h-6" />}
                          {index === 1 && <Globe className="text-red-600 w-6 h-6" />}
                          {index === 2 && <Lightbulb className="text-red-600 w-6 h-6" />}
                          {index === 3 && <Target className="text-red-600 w-6 h-6" />}
                          {index === 4 && <Users className="text-red-600 w-6 h-6" />}
                          {index === 5 && <Award className="text-red-600 w-6 h-6" />}
                          {index === 6 && <TrendingUp className="text-red-600 w-6 h-6" />}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      
                      {/* Decorative line */}
                      <div className="mt-6 border-t border-gray-100 pt-4">
                        <div className="flex items-center text-red-600 text-sm font-medium">
                          <span>Learn more</span>
                          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Global Reach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Strategic Offices Across <span className="text-red-600">Three Continents</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our global presence ensures local expertise with international standards, delivering exceptional events
              wherever your audience is located.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pune Office */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64">
                <Image
                  src="/images/office-pune.jpg"
                  alt="Pune Office"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="bg-red-600 p-3 rounded-2xl">
                    <Globe className="text-white" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Pune, India</h3>
                  <p className="text-gray-300 text-sm">Headquarters & Operations</p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Main Operations Hub
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Technology Development Center
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    24/7 Customer Support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Regional Event Management
                  </li>
                </ul>
              </div>
            </div>

            {/* Dubai Office */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64">
                <Image
                  src="/images/office-dubai.jpg"
                  alt="Dubai Office"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="bg-red-600 p-3 rounded-2xl">
                    <Globe className="text-white" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Dubai, UAE</h3>
                  <p className="text-gray-300 text-sm">Middle East Operations</p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Regional Coordination
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Client Relations Management
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Local Partnerships
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Cultural Adaptation Services
                  </li>
                </ul>
              </div>
            </div>

            {/* Rotterdam Office */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64">
                <Image
                  src="/images/office-rotterdam.jpg"
                  alt="Rotterdam Office"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <div className="bg-red-600 p-3 rounded-2xl">
                    <Globe className="text-white" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Rotterdam, Netherlands</h3>
                  <p className="text-gray-300 text-sm">European Operations</p>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    European Market Access
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Strategic Partnerships
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Compliance Management
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                    Innovation Hub
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Principles That <span className="text-red-600">Guide Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape everything we do and every event we create, ensuring consistent excellence across
              all our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-red-100 to-red-50 p-6 rounded-3xl mb-6 group-hover:from-red-200 group-hover:to-red-100 transition-all duration-300">
                <Target className="text-red-600 mx-auto" size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Delivering exceptional quality in every aspect of event management, from planning to execution.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-3xl mb-6 group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300">
                <Users className="text-blue-600 mx-auto" size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                Working together with clients as partners to achieve shared success and meaningful outcomes.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-3xl mb-6 group-hover:from-green-200 group-hover:to-green-100 transition-all duration-300">
                <Lightbulb className="text-green-600 mx-auto" size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Embracing new technologies and creative solutions to enhance event experiences.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-3xl mb-6 group-hover:from-purple-200 group-hover:to-purple-100 transition-all duration-300">
                <Globe className="text-purple-600 mx-auto" size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Connecting people and ideas across continents with local expertise and global standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Leadership Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-red-600">Expert Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals with deep expertise in scientific, academic, and corporate event management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-red-100 mb-12">
              Let's create something extraordinary together. Our team is ready to bring your vision to life with our
              global expertise and local knowledge.
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
                className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
