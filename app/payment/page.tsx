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
  Star,
  Calculator,
  Globe,
  Lock,
  Smartphone,
  Banknote,
  Receipt,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PaymentPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50 rounded-3xl -z-10"></div>
          <div className="py-16 px-8">
            <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="mr-2" size={16} />
              Secure Payment Processing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">
                Payment
              </span>{" "}
              <span className="text-red-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transparent pricing, flexible payment options, and enterprise-grade security for all your event needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={16} />
                256-bit SSL Encryption
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={16} />
                PCI DSS Compliant
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={16} />
                Instant Confirmation
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Pricing Calculator */}
        <section className="mb-20">
          <SectionHeading
            title="Interactive Pricing Calculator"
            subtitle="Calculate your total cost with real-time pricing updates and discount applications."
          />

          <div className="bg-gradient-to-br from-white to-red-50 rounded-3xl shadow-xl border border-red-100 p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Calculator Controls */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                  <Calculator className="text-red-600 mr-3" size={28} />
                  Configure Your Registration
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Registration Type */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-black">Registration Type</label>
                    <div className="space-y-2">
                      {[
                        { name: "Standard Registration", price: 599, popular: false },
                        { name: "Premium Registration", price: 899, popular: true },
                        { name: "Day Pass", price: 299, popular: false },
                        { name: "Student/Academic", price: 299, popular: false },
                      ].map((type) => (
                        <div key={type.name} className="relative">
                          <input
                            type="radio"
                            name="registration"
                            id={type.name}
                            className="peer sr-only"
                            defaultChecked={type.popular}
                          />
                          <label
                            htmlFor={type.name}
                            className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-xl cursor-pointer hover:border-red-300 peer-checked:border-red-600 peer-checked:bg-red-50 transition-all duration-200"
                          >
                            <div>
                              <span className="font-medium text-black">{type.name}</span>
                              {type.popular && <Badge className="ml-2 bg-red-600 text-white">Most Popular</Badge>}
                            </div>
                            <span className="font-bold text-red-600">${type.price}</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timing & Discounts */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-black">Registration Period</label>
                    <div className="space-y-2">
                      {[
                        { name: "Early Bird", discount: "20% OFF", until: "Mar 15", color: "green" },
                        { name: "Regular", discount: "Standard Rate", until: "Jul 31", color: "blue" },
                        { name: "Late", discount: "+10% Fee", until: "Event Date", color: "orange" },
                      ].map((period) => (
                        <div key={period.name} className="relative">
                          <input
                            type="radio"
                            name="period"
                            id={period.name}
                            className="peer sr-only"
                            defaultChecked={period.name === "Early Bird"}
                          />
                          <label
                            htmlFor={period.name}
                            className="flex items-center justify-between p-4 bg-white border-2 border-gray-200 rounded-xl cursor-pointer hover:border-red-300 peer-checked:border-red-600 peer-checked:bg-red-50 transition-all duration-200"
                          >
                            <div>
                              <span className="font-medium text-black">{period.name}</span>
                              <div className="text-xs text-gray-500">Until {period.until}</div>
                            </div>
                            <Badge className={`bg-${period.color}-100 text-${period.color}-700`}>
                              {period.discount}
                            </Badge>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-black mb-2 block">Number of Attendees</label>
                    <select className="w-full p-3 border border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-100">
                      <option>1 Attendee</option>
                      <option>2-3 Attendees (5% off)</option>
                      <option>4-5 Attendees (10% off)</option>
                      <option>6-10 Attendees (15% off)</option>
                      <option>11+ Attendees (20% off)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-black mb-2 block">Special Discounts</label>
                    <select className="w-full p-3 border border-gray-300 rounded-xl focus:border-red-600 focus:ring-2 focus:ring-red-100">
                      <option>No Additional Discount</option>
                      <option>Student Discount (50% off)</option>
                      <option>Non-profit Discount (25% off)</option>
                      <option>Returning Attendee (10% off)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-white rounded-2xl shadow-lg p-6 h-fit">
                <h4 className="text-xl font-bold text-black mb-4 flex items-center">
                  <Receipt className="text-red-600 mr-2" size={20} />
                  Price Summary
                </h4>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Premium Registration</span>
                    <span className="font-medium">$899.00</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Early Bird Discount (20%)</span>
                    <span>-$179.80</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Group Discount (5%)</span>
                    <span>-$35.96</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Fee</span>
                    <span className="font-medium">$25.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount</span>
                      <span className="text-red-600">$708.24</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">You save $190.76 with current discounts!</div>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white rounded-xl py-3">
                  <CreditCard className="mr-2" size={16} />
                  Proceed to Payment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Fee Structure */}
        <section className="mb-20">
          <SectionHeading
            title="Comprehensive Fee Structure"
            subtitle="Transparent pricing with detailed breakdowns and savings opportunities."
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Standard",
                description: "Perfect for individual attendees",
                earlyBird: 479,
                regular: 599,
                late: 659,
                features: ["Event Access", "Digital Materials", "Networking Sessions", "Certificate"],
                popular: false,
              },
              {
                name: "Premium",
                description: "Enhanced experience with extras",
                earlyBird: 719,
                regular: 899,
                late: 989,
                features: [
                  "Everything in Standard",
                  "VIP Seating",
                  "Exclusive Workshops",
                  "Premium Meals",
                  "1-on-1 Sessions",
                ],
                popular: true,
              },
              {
                name: "Day Pass",
                description: "Single day attendance",
                earlyBird: 239,
                regular: 299,
                late: 329,
                features: ["Single Day Access", "Basic Materials", "Lunch Included", "Certificate"],
                popular: false,
              },
              {
                name: "Student",
                description: "Special academic pricing",
                earlyBird: 239,
                regular: 299,
                late: 329,
                features: ["Full Event Access", "Student Resources", "Career Sessions", "Mentorship"],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-6 hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "border-red-600 scale-105" : "border-gray-200 hover:border-red-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600 text-white px-4 py-1">
                      <Star className="mr-1" size={12} />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-bold text-red-600">${plan.earlyBird}</span>
                      <Badge className="bg-green-100 text-green-700 text-xs">Early Bird</Badge>
                    </div>
                    <div className="text-sm text-gray-500">
                      Regular: ${plan.regular} | Late: ${plan.late}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-xl ${
                    plan.popular
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  Select {plan.name}
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-20">
          <SectionHeading
            title="Secure Payment Methods"
            subtitle="Multiple payment options with enterprise-grade security and instant confirmation."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Options */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <CreditCard className="text-red-600 mr-3" size={28} />
                Accepted Payment Methods
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { name: "Credit Cards", icon: CreditCard, desc: "Visa, MasterCard, Amex" },
                  { name: "Digital Wallets", icon: Smartphone, desc: "PayPal, Apple Pay, Google Pay" },
                  { name: "Bank Transfer", icon: Banknote, desc: "Wire transfer, ACH" },
                  { name: "Corporate Invoice", icon: FileText, desc: "Net 30 terms available" },
                ].map((method) => (
                  <div
                    key={method.name}
                    className="bg-gray-50 rounded-xl p-4 hover:bg-red-50 transition-colors duration-200"
                  >
                    <method.icon className="text-red-600 mb-2" size={24} />
                    <h4 className="font-semibold text-black text-sm">{method.name}</h4>
                    <p className="text-xs text-gray-600">{method.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <Shield className="mr-2" size={16} />
                  Security Features
                </h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 256-bit SSL encryption for all transactions</li>
                  <li>• PCI DSS Level 1 compliance</li>
                  <li>• Fraud detection and prevention</li>
                  <li>• Secure tokenization of payment data</li>
                </ul>
              </div>
            </div>

            {/* Payment Process */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <Clock className="text-red-600 mr-3" size={28} />
                Payment Process
              </h3>

              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Select Package",
                    desc: "Choose your registration type and add-ons",
                    time: "2 min",
                  },
                  {
                    step: 2,
                    title: "Apply Discounts",
                    desc: "Automatic discount calculation and validation",
                    time: "1 min",
                  },
                  {
                    step: 3,
                    title: "Secure Payment",
                    desc: "Complete payment with your preferred method",
                    time: "3 min",
                  },
                  {
                    step: 4,
                    title: "Instant Confirmation",
                    desc: "Receive confirmation email and access details",
                    time: "Instant",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-black">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 text-xs">{item.time}</Badge>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <TrendingUp className="mr-2" size={16} />
                  Payment Statistics
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-bold text-blue-700">99.9%</div>
                    <div className="text-blue-600">Success Rate</div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-700">{"<"}30s</div>
                    <div className="text-blue-600">Avg. Process Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Discount Programs */}
        <section className="mb-20">
          <SectionHeading
            title="Maximize Your Savings"
            subtitle="Stack multiple discounts and save up to 70% on your registration fees."
          />

          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">50%</div>
                <div className="text-red-100">Student Discount</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">20%</div>
                <div className="text-red-100">Early Bird Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">20%</div>
                <div className="text-red-100">Group Discount</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15%</div>
                <div className="text-red-100">Loyalty Rewards</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Group Discounts",
                icon: Users,
                color: "blue",
                discounts: [
                  { range: "3-5 attendees", discount: "10% off", savings: "Up to $180" },
                  { range: "6-10 attendees", discount: "15% off", savings: "Up to $270" },
                  { range: "11+ attendees", discount: "20% off", savings: "Up to $360" },
                ],
              },
              {
                title: "Loyalty Program",
                icon: Calendar,
                color: "purple",
                discounts: [
                  { range: "2nd event", discount: "5% off", savings: "Up to $90" },
                  { range: "3rd event", discount: "10% off", savings: "Up to $180" },
                  { range: "4+ events", discount: "15% off", savings: "Up to $270" },
                ],
              },
              {
                title: "Special Rates",
                icon: DollarSign,
                color: "green",
                discounts: [
                  { range: "Students", discount: "50% off", savings: "Up to $450" },
                  { range: "Non-profit", discount: "25% off", savings: "Up to $225" },
                  { range: "Speakers", discount: "100% off", savings: "Complimentary" },
                ],
              },
            ].map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-${program.color}-600 p-4 rounded-2xl w-fit mb-6`}>
                  <program.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-black mb-6">{program.title}</h3>

                <div className="space-y-4">
                  {program.discounts.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-black">{item.range}</span>
                        <Badge className={`bg-${program.color}-100 text-${program.color}-700`}>{item.discount}</Badge>
                      </div>
                      <div className="text-sm text-gray-600">Potential savings: {item.savings}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Payment Policies with Visual Timeline */}
        <section className="mb-20">
          <SectionHeading
            title="Payment Policies & Terms"
            subtitle="Clear, fair policies designed to protect both organizers and attendees."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Refund Timeline */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <AlertTriangle className="text-red-600 mr-3" size={28} />
                Refund Timeline
              </h3>

              <div className="space-y-6">
                {[
                  { period: "60+ days before", refund: "Full refund", fee: "$50 processing fee", color: "green" },
                  { period: "30-59 days before", refund: "50% refund", fee: "No additional fees", color: "yellow" },
                  { period: "Less than 30 days", refund: "No refund", fee: "Transfer allowed", color: "red" },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full bg-${item.color}-500 flex-shrink-0`}></div>
                      <div className="flex-1">
                        <div className="font-semibold text-black">{item.period}</div>
                        <div className="text-sm text-gray-600">
                          {item.refund} - {item.fee}
                        </div>
                      </div>
                    </div>
                    {index < 2 && <div className="w-px h-6 bg-gray-300 ml-2 mt-2"></div>}
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-black mb-2">Additional Information</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Refunds processed within 10-15 business days</li>
                  <li>• Registration transfers allowed at no cost</li>
                  <li>• Force majeure events may result in postponement</li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <Lock className="text-red-600 mr-3" size={28} />
                Payment Terms
              </h3>

              <div className="space-y-4">
                {[
                  { title: "Payment Due", desc: "Required at registration to secure spot", icon: Clock },
                  { title: "Invoice Terms", desc: "Net 30 days for corporate payments", icon: FileText },
                  { title: "Currency", desc: "All prices in USD including taxes", icon: Globe },
                  { title: "Confirmation", desc: "Email confirmation within 24 hours", icon: CheckCircle },
                ].map((term) => (
                  <div key={term.title} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <term.icon className="text-red-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-black">{term.title}</h4>
                      <p className="text-sm text-gray-600">{term.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <Shield className="mr-2" size={16} />
                  Security Guarantee
                </h4>
                <p className="text-sm text-blue-700">
                  Your payment information is protected by bank-level security. We never store your credit card details
                  and all transactions are processed through certified payment processors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="mr-2" size={16} />
              Limited Time: Early Bird Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Secure Your Spot?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of professionals who trust our secure payment platform. Get instant confirmation and start
              planning your event experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 rounded-2xl font-semibold text-lg shadow-lg">
                <CreditCard className="mr-2" size={20} />
                Start Registration
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-6 rounded-2xl font-semibold text-lg"
              >
                <Calculator className="mr-2" size={20} />
                Calculate Pricing
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white bg-opacity-10 rounded-2xl p-4">
                <div className="text-2xl font-bold mb-1">99.9%</div>
                <div className="text-sm opacity-80">Payment Success Rate</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-2xl p-4">
                <div className="text-2xl font-bold mb-1">{"<"}30s</div>
                <div className="text-sm opacity-80">Average Process Time</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-2xl p-4">
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-sm opacity-80">Payment Support</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
