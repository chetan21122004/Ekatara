import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HelpCircle, Search, MessageCircle, Phone, Mail, ChevronDown } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-500 hover:bg-indigo-600">FAQ</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about our conference organization services, registration process, and event
            management solutions.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search for answers..."
              className="pl-10 py-3 text-lg rounded-xl border-2 bg-gray-800 border-gray-600 text-gray-200 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-[#1E1E2E] border-gray-700">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-8 w-8 text-indigo-500" />
              </div>
              <CardTitle className="text-indigo-500">General Questions</CardTitle>
              <CardDescription className="text-gray-400">
                Basic information about our services and company
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-[#1E1E2E] border-gray-700">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-green-700">Event Planning</CardTitle>
              <CardDescription className="text-gray-400">
                Questions about conference organization and planning
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-[#1E1E2E] border-gray-700">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-purple-700">Registration & Payment</CardTitle>
              <CardDescription className="text-gray-400">
                Registration process and payment related queries
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* General Questions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-6">General Questions</h2>
            <div className="space-y-4">
              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">What is Ekatra Meetings?</CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Ekatra Meetings is a leading international scientific conference organizer with 8+ years of
                    experience. We specialize in organizing academic and business conferences in medical, nursing, and
                    healthcare fields, with offices in Rotterdam, Dubai, and Pune.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">What types of events do you organize?</CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    We organize various types of events including scientific conferences, medical symposiums, nursing
                    summits, healthcare workshops, trade shows, networking events, and corporate meetings. We handle
                    live, virtual, and hybrid event formats.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">Do you organize events globally?</CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Yes, we organize conferences worldwide. With our international presence and offices in Rotterdam,
                    Dubai, and Pune, we have the expertise and network to manage events across different continents and
                    time zones.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Event Planning */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Event Planning</h2>
            <div className="space-y-4">
              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">
                      How far in advance should I book your services?
                    </CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    We recommend booking 6-12 months in advance for large international conferences to ensure optimal
                    venue availability and comprehensive planning. However, we can accommodate shorter timelines
                    depending on event complexity and our availability.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">
                      What services are included in event management?
                    </CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Our comprehensive services include venue selection, registration management, speaker coordination,
                    marketing and promotion, technology solutions, on-site management, catering coordination, abstract
                    management, and post-event analysis and reporting.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">Can you help with speaker management?</CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    We provide complete speaker management including speaker identification and invitation, travel and
                    accommodation arrangements, presentation coordination, technical requirements management, and
                    on-site speaker support during the event.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">
                      Do you provide virtual and hybrid event solutions?
                    </CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Yes, we specialize in all event formats. Our virtual and hybrid solutions include advanced streaming
                    technology, interactive platforms, virtual networking tools, breakout rooms, digital engagement
                    features, and seamless integration between in-person and online experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Registration & Payment */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Registration & Payment</h2>
            <div className="space-y-4">
              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">How do I register for a conference?</CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Registration is simple through our online portal. Visit the registration page, select your package,
                    fill in your details, and complete the payment. You'll receive a confirmation email with all event
                    details and access information.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">What payment methods do you accept?</CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    We accept major credit cards (Visa, MasterCard, American Express), bank transfers, digital wallets
                    (PayPal, Apple Pay, Google Pay), and support multiple currencies including USD, EUR, and GBP.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">What is your cancellation policy?</CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Cancellations made 30+ days before the event receive a full refund minus processing fees.
                    Cancellations made 15-29 days before receive a 50% refund. No refunds are available for
                    cancellations made less than 15 days before the event.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">Are there group discounts available?</CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Yes, we offer group discounts for 5 or more registrations from the same organization. We also
                    provide special rates for students, association members, and early bird registrations. Contact us
                    for custom group pricing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Abstract Submission */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Abstract Submission</h2>
            <div className="space-y-4">
              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">How do I submit an abstract?</CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Use our online abstract submission portal. Fill in the required information including title,
                    authors, affiliations, keywords, and abstract text (max 300 words). Follow the structured format:
                    Background, Methods, Results, Conclusions.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">What are the abstract submission deadlines?</CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Deadlines vary by conference. Typically, early bird deadline is 3-4 months before the event, regular
                    deadline is 2 months before, and late submission deadline is 1 month before. Check the specific
                    conference page for exact dates.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">What presentation formats are available?</CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    We offer oral presentations (15 minutes + 5 minutes Q&A), poster presentations during dedicated
                    sessions, workshop formats for interactive content, and symposium sessions for thematic
                    presentations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technical Support */}
          <section>
            <h2 className="text-2xl font-bold text-gray-100 mb-6">Technical Support</h2>
            <div className="space-y-4">
              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">
                      Do you provide technical support during events?
                    </CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Yes, we provide comprehensive technical support including AV equipment management, live streaming
                    support, presentation assistance, internet connectivity, mobile app support, and dedicated technical
                    staff on-site throughout the event.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl shadow-lg bg-[#1E1E2E] border-gray-700">
                <CardHeader className="cursor-pointer">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-100">Is there a mobile app for conferences?</CardTitle>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Yes, we provide custom mobile applications for conferences featuring agenda management, speaker
                    information, networking tools, real-time updates, interactive maps, document sharing, and push
                    notifications for important announcements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Still Need Help */}
        <section className="mt-16 bg-gray-800 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Still Need Help?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is ready to assist you with any questions about
            our services or events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <MessageCircle className="mr-2 h-4 w-4" />
              Live Chat Support
            </Button>
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              Email Support
            </Button>
            <Button variant="outline">
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
