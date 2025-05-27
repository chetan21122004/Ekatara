import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MapPin, Clock, Send, MessageCircle, Calendar, Globe } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-500 hover:bg-indigo-600">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to organize your next scientific conference? Have questions about our services? We're here to help you
            create an exceptional event experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-indigo-500">
                  <Send className="mr-2 h-6 w-6" />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="mt-2 bg-gray-800 border-gray-600 text-gray-200"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="mt-2 bg-gray-800 border-gray-600 text-gray-200"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="mt-2 bg-gray-800 border-gray-600 text-gray-200"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        className="mt-2 bg-gray-800 border-gray-600 text-gray-200"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="organization">Organization/Institution</Label>
                    <Input
                      id="organization"
                      placeholder="Your organization name"
                      className="mt-2 bg-gray-800 border-gray-600 text-gray-200"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="inquiry">Inquiry Type *</Label>
                      <Select>
                        <SelectTrigger className="mt-2 bg-gray-800 border-gray-600 text-gray-200">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 text-gray-200">
                          <SelectItem value="conference">Conference Organization</SelectItem>
                          <SelectItem value="registration">Registration Support</SelectItem>
                          <SelectItem value="abstract">Abstract Submission</SelectItem>
                          <SelectItem value="sponsorship">Sponsorship Opportunities</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Estimated Budget</Label>
                      <Select>
                        <SelectTrigger className="mt-2 bg-gray-800 border-gray-600 text-gray-200">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 text-gray-200">
                          <SelectItem value="under-50k">Under $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                          <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                          <SelectItem value="over-500k">Over $500,000</SelectItem>
                          <SelectItem value="discuss">Prefer to discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Brief subject of your inquiry"
                      className="mt-2 bg-gray-800 border-gray-600 text-gray-200"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry, event requirements, timeline, and any specific questions you have..."
                      className="mt-2 min-h-[150px] bg-gray-800 border-gray-600 text-gray-200"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="newsletter" className="rounded bg-gray-800 border-gray-600" />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for event updates and industry insights
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="privacy" className="rounded bg-gray-800 border-gray-600" />
                    <Label htmlFor="privacy" className="text-sm">
                      I agree to the{" "}
                      <a href="#" className="text-indigo-500 hover:underline">
                        privacy policy
                      </a>{" "}
                      and consent to being contacted
                    </Label>
                  </div>

                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Start Live Chat
                  </Button>
                  <Button variant="outline" className="w-full text-gray-200 hover:bg-gray-700 hover:text-gray-200">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Button>
                  <Button variant="outline" className="w-full text-gray-200 hover:bg-gray-700 hover:text-gray-200">
                    <Phone className="mr-2 h-4 w-4" />
                    Request Callback
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Office Locations */}
            <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-indigo-500">
                  <Globe className="mr-2 h-6 w-6" />
                  Global Offices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-100 mb-2 flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-indigo-500" />
                      Rotterdam, Netherlands
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">European Headquarters</p>
                    <p className="text-gray-400 text-sm">
                      Weena 505, 3013 AL Rotterdam
                      <br />
                      +31 (0) 10 123 4567
                      <br />
                      europe@ekatrameetings.com
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-100 mb-2 flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-amber-600" />
                      Dubai, UAE
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">Middle East Hub</p>
                    <p className="text-gray-400 text-sm">
                      Business Bay, Dubai
                      <br />
                      +971 4 123 4567
                      <br />
                      middleeast@ekatrameetings.com
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-100 mb-2 flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-green-600" />
                      Pune, India
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">Asian Operations</p>
                    <p className="text-gray-400 text-sm">
                      Hinjewadi Phase 1, Pune 411057
                      <br />
                      +91 20 1234 5678
                      <br />
                      asia@ekatrameetings.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <Clock className="mr-2 h-6 w-6" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-blue-700 text-sm font-medium">24/7 Emergency Support</p>
                    <p className="text-blue-600 text-sm">Available during active events</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16 bg-gray-800">
          <h2 className="text-3xl font-bold text-gray-100 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-100 mb-3">How far in advance should I book your services?</h3>
                <p className="text-gray-400 text-sm">
                  We recommend booking 6-12 months in advance for large conferences. However, we can accommodate shorter
                  timelines depending on availability and event complexity.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-100 mb-3">Do you handle international events?</h3>
                <p className="text-gray-400 text-sm">
                  Yes, we organize conferences worldwide. With offices in Rotterdam, Dubai, and Pune, we have global
                  reach and local expertise in multiple regions.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-100 mb-3">What's included in your event management services?</h3>
                <p className="text-gray-400 text-sm">
                  Our services include venue selection, registration management, speaker coordination, marketing,
                  on-site management, technology solutions, and post-event analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-100 mb-3">Can you help with virtual and hybrid events?</h3>
                <p className="text-gray-400 text-sm">
                  We specialize in all event formats including live, virtual, and hybrid conferences with advanced
                  technology platforms and engagement tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Planning?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your conference vision and create an exceptional event that brings your scientific community
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
