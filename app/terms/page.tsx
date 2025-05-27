import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Mail } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Terms of Service</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using our services. By accessing our website or services, you agree
            to be bound by these terms.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 1, 2024</p>
        </div>

        {/* Terms Overview */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow-lg text-center">
              <CardContent className="p-6">
                <Scale className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Legal Agreement</h3>
                <p className="text-gray-600 text-sm">Binding terms between you and Ekatra Meetings</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Service Protection</h3>
                <p className="text-gray-600 text-sm">Guidelines to ensure quality service delivery</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">User Rights</h3>
                <p className="text-gray-600 text-sm">Your rights and responsibilities as a user</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Terms Content */}
        <div className="space-y-8">
          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <FileText className="mr-2 h-6 w-6" />
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                By accessing and using the Ekatra Meetings website and services, you accept and agree to be bound by the
                terms and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
              <p className="text-gray-600">
                These terms apply to all visitors, users, and others who access or use our services, including but not
                limited to conference registration, abstract submission, and event participation.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <Scale className="mr-2 h-6 w-6" />
                Use of Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-gray-900 mb-3">Permitted Use</h4>
              <p className="text-gray-600 mb-4">
                You may use our services for lawful purposes only. You agree not to use the services:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>
                  To violate any international, federal, provincial, or state regulations, rules, laws, or local
                  ordinances
                </li>
                <li>
                  To infringe upon or violate our intellectual property rights or the intellectual property rights of
                  others
                </li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Account Responsibilities</h4>
              <p className="text-gray-600">
                You are responsible for safeguarding the password and for maintaining the confidentiality of your
                account. You agree to accept responsibility for all activities that occur under your account or
                password.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-700">
                <AlertTriangle className="mr-2 h-6 w-6" />
                Registration and Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-gray-900 mb-3">Registration</h4>
              <p className="text-gray-600 mb-4">
                Conference registration is subject to availability and acceptance by Ekatra Meetings. We reserve the
                right to refuse registration for any reason.
              </p>

              <h4 className="font-semibold text-gray-900 mb-3">Payment</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>All fees must be paid in full before the event</li>
                <li>Prices are subject to change without notice</li>
                <li>Payment processing fees are non-refundable</li>
                <li>Currency conversion fees may apply for international payments</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Cancellation and Refunds</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Cancellations 30+ days before event: Full refund minus processing fees</li>
                <li>Cancellations 15-29 days before event: 50% refund</li>
                <li>Cancellations less than 15 days before event: No refund</li>
                <li>Event cancellation by organizer: Full refund provided</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-amber-700">
                <Shield className="mr-2 h-6 w-6" />
                Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                The service and its original content, features, and functionality are and will remain the exclusive
                property of Ekatra Meetings and its licensors. The service is protected by copyright, trademark, and
                other laws.
              </p>
              <p className="text-gray-600 mb-4">
                You retain ownership of any intellectual property rights that you hold in content that you submit to us
                (such as abstracts and presentations). However, by submitting content, you grant us a license to use,
                modify, and display such content in connection with our services.
              </p>
              <p className="text-gray-600">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                perform, republish, download, store, or transmit any of the material on our website without prior
                written consent.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-red-700">
                <AlertTriangle className="mr-2 h-6 w-6" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                In no event shall Ekatra Meetings, nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your use of the service.
              </p>
              <p className="text-gray-600 mb-4">
                We do not warrant that the service will be uninterrupted, timely, secure, or error-free. We do not
                warrant that the results that may be obtained from the use of the service will be accurate or reliable.
              </p>
              <p className="text-gray-600">
                Our total liability to you for any damages arising out of or related to these terms or the use of our
                services shall not exceed the amount you paid to us in the twelve months preceding the claim.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <FileText className="mr-2 h-6 w-6" />
                Event-Specific Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-gray-900 mb-3">Conference Attendance</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Attendees must comply with venue rules and regulations</li>
                <li>Professional conduct is expected at all times</li>
                <li>Photography and recording may be restricted in certain sessions</li>
                <li>Name badges must be worn and visible during the event</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Abstract Submissions</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>All submissions must be original work</li>
                <li>Plagiarism will result in immediate rejection</li>
                <li>Authors are responsible for accuracy of submitted content</li>
                <li>Acceptance is subject to peer review process</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Force Majeure</h4>
              <p className="text-gray-600">
                We shall not be liable for any failure to perform our obligations due to circumstances beyond our
                reasonable control, including but not limited to natural disasters, government actions, pandemics, or
                other unforeseeable events.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <Scale className="mr-2 h-6 w-6" />
                Governing Law
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                These terms shall be interpreted and governed by the laws of the Netherlands, without regard to its
                conflict of law provisions. Our failure to enforce any right or provision of these terms will not be
                considered a waiver of those rights.
              </p>
              <p className="text-gray-600">
                Any disputes arising from these terms or your use of our services shall be resolved through binding
                arbitration in Rotterdam, Netherlands, or in the courts of the Netherlands.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-700">
                <FileText className="mr-2 h-6 w-6" />
                Changes to Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a
                revision is material, we will try to provide at least 30 days notice prior to any new terms taking
                effect.
              </p>
              <p className="text-gray-600">
                What constitutes a material change will be determined at our sole discretion. By continuing to access or
                use our service after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <Mail className="mr-2 h-6 w-6" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Email:</strong> legal@ekatrameetings.com
                </p>
                <p>
                  <strong>Phone:</strong> +31 (0) 10 123 4567
                </p>
                <p>
                  <strong>Address:</strong> Weena 505, 3013 AL Rotterdam, Netherlands
                </p>
              </div>
              <p className="text-gray-600 mt-4">We will respond to your inquiry within 5 business days.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
