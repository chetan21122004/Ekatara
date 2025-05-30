import SectionHeading from "@/components/ui/section-heading"
import {
  CreditCard,
  FileText,
  DollarSign,
  Calendar,
  Users,
  AlertTriangle,
  Shield,
  Clock,
  CheckCircle,
  Upload,
  Mail,
  ExternalLink,
  Building,
  Wallet,
  BadgeCheck,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function PaymentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Modern Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-red-500/20 backdrop-blur-sm">
            <Shield className="mr-2" size={16} />
            Payment Information
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Complete Your <span className="text-red-500">Event Registration</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Clear guidelines on payment methods, deadlines, and processes for a smooth registration experience
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        {/* Payment Methods Cards - Elevated Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            {
              title: "Online Payment",
              icon: CreditCard,
              description: "Secure digital transactions",
              features: ["Credit/Debit Cards", "UPI Payments"],
              note: "Processed on secure platform",
              gradient: "from-blue-500 to-indigo-600",
            },
            {
              title: "Bank Transfer",
              icon: Building,
              description: "Direct bank payments",
              features: ["NEFT/RTGS Transfer", "Wire Transfer (International)"],
              note: "Details after registration",
              gradient: "from-emerald-500 to-teal-600",
            },
            {
              title: "Invoice Payment",
              icon: FileText,
              description: "For organizations",
              features: ["Corporate Billing", "Institutional Payment"],
              note: "Available for groups",
              gradient: "from-orange-500 to-red-600",
            },
          ].map((method) => (
            <Card key={method.title} className="relative group overflow-hidden border-0 bg-white/5 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-4`}>
                  <method.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{method.title}</h3>
                <p className="text-gray-500">{method.description}</p>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  {method.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                  <li className="text-sm text-gray-500 mt-4 italic">
                    {method.note}
                  </li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Periods - Timeline Design */}
        <section className="mb-24">
          <SectionHeading
            title="Payment Timeline"
            subtitle="Strategic pricing tiers to reward early registrations"
            centered
          />

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200" />
            <div className="space-y-16">
              {[
                {
                  phase: "Early Bird Rate",
                  date: "Till July 15",
                  price: "₹1,500",
                  tag: "BEST VALUE",
                  description: "Lock in the lowest rates by registering early",
                  color: "green",
                  icon: Calendar,
                },
                {
                  phase: "Standard Rate",
                  date: "July 16 - August 30",
                  price: "₹2,000",
                  tag: "CURRENT",
                  description: "Regular registration period with standard pricing",
                  color: "blue",
                  icon: Clock,
                },
                {
                  phase: "Late Registration",
                  date: "After August 30",
                  price: "₹2,500",
                  tag: "LATE FEE",
                  description: "Last-minute registration with premium rates",
                  color: "red",
                  icon: AlertTriangle,
                },
              ].map((period, index) => (
                <div key={period.phase} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 pr-8 text-right">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-2 bg-${period.color}-100 text-${period.color}-700`}>
                      {period.tag}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{period.phase}</h3>
                    <p className="text-gray-600 mb-2">{period.date}</p>
                    <div className="text-3xl font-bold text-red-600">{period.price}</div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white bg-white shadow-lg flex items-center justify-center">
                    <period.icon className={`h-5 w-5 text-${period.color}-600`} />
                  </div>
                  <div className="w-1/2 pl-8">
                    <p className="text-gray-600">{period.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Discounts - Modern Cards */}
        <section className="mb-24">
          <SectionHeading
            title="Available Discounts"
            subtitle="Special rates designed to make our event more accessible"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Group Registration",
                icon: Users,
                description: "Perfect for teams and organizations",
                discounts: [
                  { text: "15% off for groups of 3-5", highlight: "15%" },
                  { text: "20% off for groups of 6+", highlight: "20%" },
                ],
                gradient: "from-purple-500 to-indigo-600",
              },
              {
                title: "Student Discount",
                icon: BadgeCheck,
                description: "Supporting academic participation",
                discounts: [
                  { text: "50% off regular registration fee", highlight: "50%" },
                  { text: "Valid student ID required", highlight: "3 days" },
                ],
                gradient: "from-red-500 to-orange-600",
              },
            ].map((discount) => (
              <div key={discount.title} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${discount.gradient} opacity-50 blur-lg group-hover:opacity-75 transition-opacity duration-300 rounded-2xl`} />
                <Card className="relative bg-white/90 backdrop-blur-sm border-0">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${discount.gradient} flex items-center justify-center`}>
                        <discount.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{discount.title}</h3>
                        <p className="text-gray-500">{discount.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {discount.discounts.map((item) => (
                        <li key={item.text} className="flex items-center">
                          <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-600">
                              {item.highlight}
                            </span>
                          </span>
                          <span className="text-gray-700">{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Important Information - Modern Alerts */}
        <section className="mb-24">
          <SectionHeading
            title="Important Information"
            subtitle="Key details about our payment process"
            centered
          />

          <div className="space-y-6">
            {[
              {
                icon: AlertTriangle,
                title: "External Payment Processing",
                description: "All payments are processed on the official registration platform, not on this website.",
                gradient: "from-amber-500 to-orange-600",
              },
              {
                icon: FileText,
                title: "Invoice Generation",
                description: "Invoices are automatically generated and available for download after successful payment.",
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                icon: Upload,
                title: "Bank Transfer Process",
                description: "For bank transfers, you will receive payment instructions via email. Payment proof must be uploaded to complete registration.",
                gradient: "from-emerald-500 to-teal-600",
              },
            ].map((info) => (
              <div key={info.title} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`} />
                <Alert className="relative border-l-4 bg-white shadow-md">
                  <info.icon className={`h-5 w-5 bg-clip-text text-transparent bg-gradient-to-br ${info.gradient}`} />
                  <AlertTitle className="font-semibold">{info.title}</AlertTitle>
                  <AlertDescription className="text-gray-600">
                    {info.description}
                  </AlertDescription>
                </Alert>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section - Modern Design */}
        <section className="relative overflow-hidden rounded-3xl mb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
          <div className="relative px-8 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Complete Your Registration?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Proceed to our registration portal to secure your spot. For queries, contact{" "}
              <a
                href="mailto:payments@ekatrameetings.com"
                className="text-red-400 hover:text-red-300 underline decoration-dotted"
              >
                payments@ekatrameetings.com
              </a>
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              <span>Go to Registration Portal</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
