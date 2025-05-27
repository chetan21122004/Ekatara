import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Privacy Policy</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal
            information.
          </p>
          <p className="text-sm text-gray-500 mt-4">Last updated: January 1, 2024</p>
        </div>

        {/* Privacy Overview */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl shadow-lg text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Data Protection</h3>
                <p className="text-gray-600 text-sm">We use industry-standard security measures to protect your data</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg text-center">
              <CardContent className="p-6">
                <Eye className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600 text-sm">Clear information about what data we collect and why</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg text-center">
              <CardContent className="p-6">
                <UserCheck className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Your Rights</h3>
                <p className="text-gray-600 text-sm">You have control over your personal information</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <div className="space-y-8">
          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <FileText className="mr-2 h-6 w-6" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h4 className="font-semibold text-gray-900 mb-3">Personal Information</h4>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, such as when you register for conferences, submit
                abstracts, or contact us:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                <li>Name, email address, and phone number</li>
                <li>Professional information (job title, organization, affiliation)</li>
                <li>Payment information for registration fees</li>
                <li>Abstract submissions and research information</li>
                <li>Dietary preferences and accessibility requirements</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mb-3">Automatically Collected Information</h4>
              <p className="text-gray-600 mb-4">
                We automatically collect certain information when you visit our website:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Device and operating system information</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <Lock className="mr-2 h-6 w-6" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Process conference registrations and manage event attendance</li>
                <li>Communicate with you about events, updates, and important information</li>
                <li>Process abstract submissions and manage the review process</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Improve our services and website functionality</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Analyze website usage and improve user experience</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-700">
                <Shield className="mr-2 h-6 w-6" />
                Information Sharing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party vendors who help us operate our business
                  (payment processors, email services, venue partners)
                </li>
                <li>
                  <strong>Conference Partners:</strong> With co-organizers, sponsors, or speakers as necessary for event
                  management
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>Consent:</strong> With your explicit consent for specific purposes
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-amber-700">
                <UserCheck className="mr-2 h-6 w-6" />
                Your Rights and Choices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information (subject to legal
                  requirements)
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to another service provider
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time
                </li>
                <li>
                  <strong>Restriction:</strong> Request limitation of processing in certain circumstances
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, please contact us at privacy@ekatrameetings.com
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-red-700">
                <Lock className="mr-2 h-6 w-6" />
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases with access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
                <li>Data backup and recovery systems</li>
              </ul>
              <p className="text-gray-600 mt-4">
                While we strive to protect your information, no method of transmission over the internet is 100% secure.
                We cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-700">
                <Eye className="mr-2 h-6 w-6" />
                Cookies and Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your experience on our website:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for website functionality and security
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors use our website
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings and preferences
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                You can control cookie settings through your browser preferences. Disabling certain cookies may affect
                website functionality.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-green-700">
                <Mail className="mr-2 h-6 w-6" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>Email:</strong> privacy@ekatrameetings.com
                </p>
                <p>
                  <strong>Phone:</strong> +31 (0) 10 123 4567
                </p>
                <p>
                  <strong>Address:</strong> Weena 505, 3013 AL Rotterdam, Netherlands
                </p>
              </div>
              <p className="text-gray-600 mt-4">We will respond to your inquiry within 30 days of receipt.</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-700">Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. We will notify you of any material changes by posting the updated policy on our website
                and updating the "Last updated" date. Your continued use of our services after such changes constitutes
                acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
