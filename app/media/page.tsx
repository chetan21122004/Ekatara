import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Download, ImageIcon, Video, FileText, Calendar, Users, Award } from "lucide-react"

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Media Gallery</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Conference Media & Resources</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our collection of conference highlights, presentations, photos, and videos from past events.
            Download resources and stay connected with our scientific community.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-indigo-900 to-cyan-900">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Conference media gallery"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Conference Media Archive</h3>
                <p className="text-gray-200 text-lg">Access presentations, videos, and resources from our events</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Video */}
        <section className="mb-16">
          <Card className="rounded-2xl shadow-lg overflow-hidden border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="h-20 w-20 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">Conference 2023 Highlights</h3>
                  <p className="text-blue-200">Watch the best moments from our latest scientific conference</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Media Categories */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Conference Videos</CardTitle>
                <CardDescription className="text-gray-300">
                  Keynote speeches, presentations, and panel discussions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-cyan-400 hover:from-indigo-600 hover:to-cyan-500 text-white">
                  Browse Videos
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="h-8 w-8 text-cyan-400" />
                </div>
                <CardTitle className="text-cyan-400">Photo Gallery</CardTitle>
                <CardDescription className="text-gray-300">
                  Event photos, networking sessions, and memorable moments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-500 hover:to-indigo-600 text-white">
                  View Photos
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-indigo-400" />
                </div>
                <CardTitle className="text-indigo-400">Presentations</CardTitle>
                <CardDescription className="text-gray-300">
                  Downloadable slides and research presentations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-cyan-400 hover:from-indigo-600 hover:to-cyan-500 text-white">
                  Download Files
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Videos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Recent Conference Videos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="rounded-2xl shadow-lg overflow-hidden border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]"
              >
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-indigo-900 to-cyan-900 flex items-center justify-center">
                    <img
                      src={`https://images.unsplash.com/photo-${1540575467063 + item}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                      alt={`Conference video ${item}`}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white opacity-80" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    15:30
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">Keynote: Future of Medical Research</h3>
                  <p className="text-gray-300 text-sm mb-3">Dr. Sarah Johnson - Harvard Medical School</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">2.1K views</span>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      Watch
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Photo Gallery Preview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gray-200 rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <img
                  src={`https://images.unsplash.com/photo-${1511578314322 + item}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                  alt={`Conference photo ${item}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              View All Photos
            </Button>
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Downloadable Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow-lg border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <CardTitle className="flex items-center text-indigo-400">
                  <FileText className="mr-2 h-6 w-6" />
                  Conference Proceedings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <p className="font-medium text-white">Medical Research Conference 2023</p>
                      <p className="text-sm text-gray-300">Complete proceedings - 245 pages</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <p className="font-medium text-white">Nursing Excellence Summit 2023</p>
                      <p className="text-sm text-gray-300">Research abstracts - 180 pages</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg border border-gray-700 bg-gradient-to-br from-gray-800 to-[#1E1E2E]">
              <CardHeader>
                <CardTitle className="flex items-center text-cyan-400">
                  <Award className="mr-2 h-6 w-6" />
                  Presentation Slides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <p className="font-medium text-white">AI in Healthcare - Dr. Smith</p>
                      <p className="text-sm text-gray-300">Keynote presentation slides</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      <Download className="h-4 w-4 mr-2" />
                      PPTX
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <p className="font-medium text-white">Future of Nursing - Prof. Davis</p>
                      <p className="text-sm text-gray-300">Workshop materials</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      <Download className="h-4 w-4 mr-2" />
                      PPTX
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Event Statistics */}
        <section className="mb-16 bg-[#1E1E2E] rounded-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Conference Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-400" />
              </div>
              <div className="text-3xl font-bold text-indigo-400 mb-2">2,500+</div>
              <div className="text-gray-300">Total Attendees</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">15</div>
              <div className="text-gray-300">Successful Events</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-indigo-400" />
              </div>
              <div className="text-3xl font-bold text-indigo-400 mb-2">500+</div>
              <div className="text-gray-300">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Countries Represented</div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest conference updates, media releases, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 bg-white border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <Button variant="secondary" size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
