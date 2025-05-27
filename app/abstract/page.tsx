import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Calendar, Users, Award, CheckCircle, Clock, Send } from "lucide-react"

export default function AbstractSubmissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">Abstract Submission</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Submit Your Research Abstract</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your groundbreaking research with the global scientific community. Submit your abstract for peer
            review and presentation opportunities at our upcoming conferences.
          </p>
        </div>

        {/* Important Dates */}
        <section className="mb-16">
          <Card className="rounded-2xl shadow-lg border border-gray-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center text-indigo-700">
                <Clock className="mr-2 h-6 w-6" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl">
                  <Calendar className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Early Bird Deadline</h3>
                  <p className="text-2xl font-bold text-indigo-600 mb-1">March 15, 2024</p>
                  <p className="text-sm text-gray-600">Extended review period</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl">
                  <Calendar className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Regular Deadline</h3>
                  <p className="text-2xl font-bold text-cyan-600 mb-1">April 30, 2024</p>
                  <p className="text-sm text-gray-600">Standard review process</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
                  <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Late Submission</h3>
                  <p className="text-2xl font-bold text-purple-600 mb-1">May 15, 2024</p>
                  <p className="text-sm text-gray-600">Subject to availability</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Submission Form */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl shadow-lg border border-gray-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-indigo-700">
                  <Send className="mr-2 h-6 w-6" />
                  Abstract Submission Form
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Please fill out all required fields to submit your research abstract
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="affiliation" className="text-gray-700">
                        Institution/Affiliation *
                      </Label>
                      <Input
                        id="affiliation"
                        placeholder="Your institution name"
                        className="mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="title" className="text-gray-700">
                      Abstract Title *
                    </Label>
                    <Input
                      id="title"
                      placeholder="Enter your research title"
                      className="mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="category" className="text-gray-700">
                        Research Category *
                      </Label>
                      <Select>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="medical">Medical Research</SelectItem>
                          <SelectItem value="nursing">Nursing Studies</SelectItem>
                          <SelectItem value="healthcare">Healthcare Innovation</SelectItem>
                          <SelectItem value="technology">Medical Technology</SelectItem>
                          <SelectItem value="public-health">Public Health</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="presentation" className="text-gray-700">
                        Preferred Presentation *
                      </Label>
                      <Select>
                        <SelectTrigger className="mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                          <SelectValue placeholder="Select presentation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="oral">Oral Presentation</SelectItem>
                          <SelectItem value="poster">Poster Presentation</SelectItem>
                          <SelectItem value="workshop">Workshop</SelectItem>
                          <SelectItem value="symposium">Symposium</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="keywords" className="text-gray-700">
                      Keywords *
                    </Label>
                    <Input
                      id="keywords"
                      placeholder="Enter 3-5 keywords separated by commas"
                      className="mt-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="abstract" className="text-gray-700">
                      Abstract Text *
                    </Label>
                    <Textarea
                      id="abstract"
                      placeholder="Enter your abstract (max 300 words). Structure: Background, Methods, Results, Conclusions"
                      className="mt-2 min-h-[200px] border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    <p className="text-sm text-gray-500 mt-2">0/300 words</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="rounded border-gray-300" />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-indigo-600 hover:underline">
                        submission guidelines
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-indigo-600 hover:underline">
                        terms of service
                      </a>
                    </Label>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white py-3 text-lg rounded-xl shadow-lg">
                    <Send className="mr-2 h-5 w-5" />
                    Submit Abstract
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Submission Guidelines */}
            <Card className="rounded-2xl shadow-lg border border-gray-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-indigo-700">
                  <FileText className="mr-2 h-6 w-6" />
                  Submission Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-600">Maximum 300 words for abstract text</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Include structured format: Background, Methods, Results, Conclusions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-600">Provide 3-5 relevant keywords</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-600">Original research only - no plagiarism</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm text-gray-600">All authors must be listed with affiliations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Review Process */}
            <Card className="rounded-2xl shadow-lg border border-gray-200 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-cyan-700">
                  <Users className="mr-2 h-6 w-6" />
                  Review Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-indigo-600">1</span>
                    </div>
                    <span className="text-sm text-gray-600">Initial screening for completeness</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-cyan-600">2</span>
                    </div>
                    <span className="text-sm text-gray-600">Peer review by subject experts</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-purple-600">3</span>
                    </div>
                    <span className="text-sm text-gray-600">Final decision and notification</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-green-600">4</span>
                    </div>
                    <span className="text-sm text-gray-600">Presentation scheduling</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="rounded-2xl shadow-lg border border-gray-200 bg-gradient-to-br from-indigo-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-indigo-700">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about the submission process? Our team is here to help.
                </p>
                <Button variant="outline" className="w-full border-indigo-300 text-indigo-700 hover:bg-indigo-50">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Submit Your Abstract?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="rounded-2xl shadow-lg border border-gray-200 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Global Recognition</h3>
                <p className="text-gray-600 text-sm">Present your research to an international audience of experts</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg border border-gray-200 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Networking</h3>
                <p className="text-gray-600 text-sm">Connect with leading researchers and potential collaborators</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg border border-gray-200 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Publication</h3>
                <p className="text-gray-600 text-sm">Opportunity for publication in conference proceedings</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg border border-gray-200 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Peer Review</h3>
                <p className="text-gray-600 text-sm">Receive valuable feedback from subject matter experts</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
