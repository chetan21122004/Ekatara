"use client"

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Globe,
  CheckCircle,
  Users,
  Calendar,
  Building,
  ArrowRight,
  Star,
  Zap,
  Shield,
  HeartHandshake,
  Headphones,
  Video,
  FileText,
  Award,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    priority: "medium",
    message: "",
    terms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Create mailto link with form data
    const subject = encodeURIComponent(
      `[${formData.subject || "General Inquiry"}] Contact Form Submission`
    )
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n` +
      `Company: ${formData.company || "Not provided"}\n` +
      `Priority: ${formData.priority}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}`
    )
    
    // Open email client
    window.location.href = `mailto:info@ekatrameetings.com?subject=${subject}&body=${body}`
    
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/20 rounded-full backdrop-blur-sm mb-6">
              <Badge className="bg-white text-red-600 hover:bg-red-50">
                <Zap className="mr-1 h-3 w-3" />
                24/7 Global Support
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Let's{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-red-100 to-white">
                Connect
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto mb-12 leading-relaxed">
              Your success is our mission. Whether you're planning your first event or your hundredth, our global team
              is here to make it extraordinary.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">&lt; 1hr</div>
                <div className="text-red-100 text-sm">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-red-100 text-sm">Satisfaction Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-red-100 text-sm">Availability</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-red-100 text-sm">Global Offices</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Methods Grid */}
        <section className="py-20 -mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instant Support */}
            <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-gradient-to-r from-red-600 to-red-700 p-4 rounded-2xl w-fit mb-4">
                  <Zap className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-bold">Instant Support</CardTitle>
                <CardDescription>Get immediate assistance through our fastest channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <MessageCircle className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm text-gray-600">Available now</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">Online</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Phone className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Emergency Line</p>
                      <p className="text-sm text-gray-600">+1 800 URGENT1</p>
                    </div>
                  </div>
                  <Badge className="bg-red-100 text-red-800">24/7</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Video className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Video Call</p>
                      <p className="text-sm text-gray-600">Schedule instantly</p>
                    </div>
                  </div>
                  <ArrowRight className="text-gray-400" size={16} />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl">
                  Start Instant Support
                </Button>
              </CardFooter>
            </Card>

            {/* Professional Services */}
            <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-2xl w-fit mb-4">
                  <HeartHandshake className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-bold">Professional Services</CardTitle>
                <CardDescription>Dedicated support for your business needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Calendar className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Event Planning</p>
                      <p className="text-sm text-gray-600">Consultation & strategy</p>
                    </div>
                  </div>
                  <Badge variant="outline">Premium</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Users className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Account Manager</p>
                      <p className="text-sm text-gray-600">Dedicated support</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Enterprise</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Award className="text-indigo-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Custom Solutions</p>
                      <p className="text-sm text-gray-600">Tailored for your needs</p>
                    </div>
                  </div>
                  <ArrowRight className="text-gray-400" size={16} />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl">
                  Request Consultation
                </Button>
              </CardFooter>
            </Card>

            {/* Self-Service Hub */}
            <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-gradient-to-r from-green-600 to-green-700 p-4 rounded-2xl w-fit mb-4">
                  <Globe className="text-white" size={32} />
                </div>
                <CardTitle className="text-2xl font-bold">Self-Service Hub</CardTitle>
                <CardDescription>Find answers and resources instantly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <FileText className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Knowledge Base</p>
                      <p className="text-sm text-gray-600">500+ articles</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">Updated Daily</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Video className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Video Tutorials</p>
                      <p className="text-sm text-gray-600">Step-by-step guides</p>
                    </div>
                  </div>
                  <Badge variant="outline">50+ Videos</Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <Users className="text-orange-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium">Community Forum</p>
                      <p className="text-sm text-gray-600">Connect with peers</p>
                    </div>
                  </div>
                  <ArrowRight className="text-gray-400" size={16} />
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 rounded-xl"
                >
                  Explore Resources
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-200">Get in Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Send Us a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">Message</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team typically responds within 2 hours during business hours. For urgent matters, please use our
              instant support options above.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl bg-white">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-100 p-3 rounded-2xl">
                      <Send className="text-red-600" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Contact Form</CardTitle>
                      <CardDescription>Fill out the details below and we'll get back to you soon</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          required
                          className="rounded-xl border-gray-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          required
                          className="rounded-xl border-gray-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.doe@company.com"
                        required
                        className="rounded-xl border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className="rounded-xl border-gray-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-sm font-medium text-gray-700">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Corporation"
                          className="rounded-xl border-gray-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border-gray-300 focus:border-red-500 focus:ring-red-500 p-3"
                      >
                        <option value="">Select a subject</option>
                        <option value="event-planning">Event Planning Consultation</option>
                        <option value="registration">Registration Support</option>
                        <option value="abstract">Abstract Submission Help</option>
                        <option value="payment">Payment & Billing</option>
                        <option value="technical">Technical Support</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="media">Media & Press</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="priority" className="text-sm font-medium text-gray-700">
                        Priority Level
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        <label className="flex items-center p-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="priority"
                            value="low"
                            checked={formData.priority === "low"}
                            onChange={handleChange}
                            className="mr-3 text-red-600"
                          />
                          <div>
                            <div className="font-medium text-sm">Low</div>
                            <div className="text-xs text-gray-500">24-48 hours</div>
                          </div>
                        </label>
                        <label className="flex items-center p-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="priority"
                            value="medium"
                            checked={formData.priority === "medium"}
                            onChange={handleChange}
                            className="mr-3 text-red-600"
                          />
                          <div>
                            <div className="font-medium text-sm">Medium</div>
                            <div className="text-xs text-gray-500">4-8 hours</div>
                          </div>
                        </label>
                        <label className="flex items-center p-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50">
                          <input
                            type="radio"
                            name="priority"
                            value="high"
                            checked={formData.priority === "high"}
                            onChange={handleChange}
                            className="mr-3 text-red-600"
                          />
                          <div>
                            <div className="font-medium text-sm">High</div>
                            <div className="text-xs text-gray-500">1-2 hours</div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Please provide details about your inquiry, including any specific requirements or deadlines..."
                        required
                        className="rounded-xl border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        checked={formData.terms}
                        onChange={handleChange}
                        required
                        className="mt-1 h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the Privacy Policy and Terms of Service. I understand that my information will be used to respond to my inquiry.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl py-3 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="mr-2" size={20} />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-8">
              {/* Response Time Guarantee */}
              <Card className="border-none shadow-lg bg-gradient-to-br from-red-600 to-red-700 text-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                      <Clock className="text-white" size={20} />
                    </div>
                    <CardTitle className="text-xl">Response Guarantee</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div>
                      <p className="font-medium">High Priority</p>
                      <p className="text-sm text-red-100">Critical issues</p>
                    </div>
                    <Badge className="bg-white text-red-600">1-2 hrs</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div>
                      <p className="font-medium">Medium Priority</p>
                      <p className="text-sm text-red-100">General inquiries</p>
                    </div>
                    <Badge className="bg-white text-red-600">4-8 hrs</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div>
                      <p className="font-medium">Low Priority</p>
                      <p className="text-sm text-red-100">Information requests</p>
                    </div>
                    <Badge className="bg-white text-red-600">24-48 hrs</Badge>
                  </div>
                </CardContent>
              </Card>

            

              {/* Security & Privacy */}
              <Card className="border-none shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl">
                    <Shield className="mr-2 text-green-600" size={20} />
                    Security & Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-sm text-gray-700">SSL encrypted communication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-sm text-gray-700">GDPR compliant data handling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-sm text-gray-700">No spam or third-party sharing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-sm text-gray-700">Data deletion upon request</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Global Offices */}
        <section className="py-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Global Presence</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Offices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With offices across three continents, we provide local expertise with global reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Pune Office */}
            <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img
                  src="/images/office-pune.jpg"
                  alt="Pune Office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-red-600 text-white">Headquarters</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <MapPin className="text-white" size={16} />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Pune, India</h3>
                  <div className="flex items-center space-x-1">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600 font-medium">Open</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Main operations center and headquarters</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-red-600" size={14} />
                    <span className="text-gray-700">Tech Park, Hinjewadi Phase 2</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="text-red-600" size={14} />
                    <span className="text-gray-700">+91-9370172365</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="text-red-600" size={14} />
                    <span className="text-gray-700">Mon-Fri: 9:00 AM - 6:00 PM IST</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                  <MapPin className="mr-2" size={16} />
                  Get Directions
                </Button>
              </CardFooter>
            </Card>

            {/* Dubai Office */}
            <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img
                  src="/images/office-dubai.jpg"
                  alt="Dubai Office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-amber-600 text-white">Middle East Hub</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <MapPin className="text-white" size={16} />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Dubai, UAE</h3>
                  <div className="flex items-center space-x-1">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-green-600 font-medium">Open</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Middle East operations and client services</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-red-600" size={14} />
                    <span className="text-gray-700">Business Bay Tower, Dubai</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="text-red-600" size={14} />
                    <span className="text-gray-700">+91 9823383177</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="text-red-600" size={14} />
                    <span className="text-gray-700">Sun-Thu: 9:00 AM - 6:00 PM GST</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                  <MapPin className="mr-2" size={16} />
                  Get Directions
                </Button>
              </CardFooter>
            </Card>

            {/* Rotterdam Office */}
            <Card className="border-none shadow-xl bg-white hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <img
                  src="/images/office-rotterdam.jpg"
                  alt="Rotterdam Office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-blue-600 text-white">European Hub</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <MapPin className="text-white" size={16} />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Rotterdam, NL</h3>
                  <div className="flex items-center space-x-1">
                    <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
                    <span className="text-xs text-amber-600 font-medium">Closed</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">European operations and partnerships</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-red-600" size={14} />
                    <span className="text-gray-700">Wilhelminaplein 1, Rotterdam</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="text-red-600" size={14} />
                    <span className="text-gray-700">+91 9823383177</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="text-red-600" size={14} />
                    <span className="text-gray-700">Mon-Fri: 9:00 AM - 5:00 PM CET</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  <MapPin className="mr-2" size={16} />
                  Get Directions
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Interactive World Map */}
          <Card className="border-none shadow-xl bg-white overflow-hidden">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold">Global Coverage Map</CardTitle>
              <CardDescription>Click on any office location to view details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative h-96 bg-gradient-to-br from-blue-50 to-blue-100">
                {/* Simplified world map representation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-4xl">
                    {/* Office markers with animations */}
                    <div className="absolute top-[45%] left-[68%] group cursor-pointer">
                      <div className="relative">
                        <div className="h-6 w-6 bg-red-600 rounded-full animate-pulse"></div>
                        <div className="absolute -top-1 -left-1 h-8 w-8 bg-red-600/30 rounded-full animate-ping"></div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="bg-white p-3 rounded-lg shadow-lg text-sm whitespace-nowrap">
                            <p className="font-semibold">Pune, India</p>
                            <p className="text-gray-600">Headquarters</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[40%] left-[60%] group cursor-pointer">
                      <div className="relative">
                        <div className="h-6 w-6 bg-amber-600 rounded-full animate-pulse"></div>
                        <div className="absolute -top-1 -left-1 h-8 w-8 bg-amber-600/30 rounded-full animate-ping"></div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="bg-white p-3 rounded-lg shadow-lg text-sm whitespace-nowrap">
                            <p className="font-semibold">Dubai, UAE</p>
                            <p className="text-gray-600">Middle East Hub</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[30%] left-[48%] group cursor-pointer">
                      <div className="relative">
                        <div className="h-6 w-6 bg-blue-600 rounded-full animate-pulse"></div>
                        <div className="absolute -top-1 -left-1 h-8 w-8 bg-blue-600/30 rounded-full animate-ping"></div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="bg-white p-3 rounded-lg shadow-lg text-sm whitespace-nowrap">
                            <p className="font-semibold">Rotterdam, Netherlands</p>
                            <p className="text-gray-600">European Hub</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map legend */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h4 className="text-sm font-semibold mb-3">Office Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-red-600 rounded-full"></div>
                      <span className="text-xs">Headquarters (Pune)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-amber-600 rounded-full"></div>
                      <span className="text-xs">Regional Office (Dubai)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-blue-600 rounded-full"></div>
                      <span className="text-xs">Regional Office (Rotterdam)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from real clients who've experienced our exceptional support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The response time was incredible. Our event was saved by their quick thinking and 24/7 support. Truly
                  exceptional service!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-semibold">
                    SM
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Mitchell</p>
                    <p className="text-sm text-gray-600">Event Director, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Professional, knowledgeable, and always available. The team went above and beyond to ensure our
                  conference was a success."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-semibold">
                    RJ
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Raj Patel</p>
                    <p className="text-sm text-gray-600">CEO, Innovation Labs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "From initial planning to post-event support, every interaction was smooth and professional. Highly
                  recommend their services!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold">
                    EM
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Emma Rodriguez</p>
                    <p className="text-sm text-gray-600">Marketing Manager, Global Solutions</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

      
      </div>
    </div>
  )
}