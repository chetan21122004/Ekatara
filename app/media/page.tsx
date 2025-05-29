"use client"

import SectionHeading from "@/components/ui/section-heading"
import {
  Play,
  Download,
  ImageIcon,
  Video,
  FileText,
  Calendar,
  Search,
  Eye,
  Heart,
  Share2,
  Star,
  Users,
  Clock,
  Award,
  Zap,
} from "lucide-react"
import { useState } from "react"

export default function MediaPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const mediaStats = [
    { label: "Total Media Files", value: "2,500+", icon: FileText, color: "bg-blue-500" },
    { label: "Video Hours", value: "150+", icon: Video, color: "bg-purple-500" },
    { label: "Photo Collections", value: "85", icon: ImageIcon, color: "bg-green-500" },
    { label: "Downloads", value: "50K+", icon: Download, color: "bg-red-500" },
  ]

  const featuredContent = [
    {
      title: "Global Health Summit 2024",
      description:
        "Highlights from our largest medical conference featuring 500+ attendees and groundbreaking research.",
      duration: "8:45",
      views: "2.3K",
      date: "September 2024",
      thumbnail: "/placeholder.svg?height=400&width=800",
      category: "Conference",
      featured: true,
    },
    {
      title: "Tech Innovation Keynote",
      description: "Revolutionary AI presentations that shaped the future of healthcare technology.",
      duration: "12:30",
      views: "1.8K",
      date: "August 2024",
      thumbnail: "/placeholder.svg?height=300&width=500",
      category: "Keynote",
      featured: false,
    },
    {
      title: "Sustainability Panel Discussion",
      description: "Expert panel on sustainable practices in medical conference organization.",
      duration: "25:15",
      views: "1.2K",
      date: "July 2024",
      thumbnail: "/placeholder.svg?height=300&width=500",
      category: "Panel",
      featured: false,
    },
  ]

  const mediaCategories = [
    {
      title: "Conference Highlights",
      type: "video",
      count: 45,
      description: "Key moments and presentations from our major conferences",
      items: [
        {
          title: "Global Health Summit 2024",
          duration: "3:45",
          views: "2.3K",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Tech Innovation Conference",
          duration: "5:12",
          views: "1.8K",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Sustainability Forum",
          duration: "4:28",
          views: "1.2K",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Medical Research Symposium",
          duration: "6:33",
          views: "980",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      title: "Event Photography",
      type: "image",
      count: 320,
      description: "Professional photography capturing the essence of our events",
      items: [
        {
          title: "Networking Reception",
          count: "45 photos",
          views: "1.5K",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Keynote Presentations",
          count: "32 photos",
          views: "1.2K",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Exhibition Floor",
          count: "28 photos",
          views: "890",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Award Ceremony",
          count: "22 photos",
          views: "750",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    {
      title: "Speaker Interviews",
      type: "video",
      count: 28,
      description: "Exclusive interviews with industry leaders and keynote speakers",
      items: [
        {
          title: "Dr. Sarah Chen - AI in Healthcare",
          duration: "8:20",
          views: "3.1K",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Prof. Michael Torres - Future Medicine",
          duration: "12:45",
          views: "2.7K",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Dr. Aisha Patel - Global Health",
          duration: "9:15",
          views: "2.2K",
          thumbnail: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  ]

  const eventResources = [
    {
      title: "Conference Proceedings 2024",
      description: "Complete collection of abstracts and presentations from our latest conference.",
      size: "15.2 MB",
      format: "PDF",
      downloads: "2.3K",
      category: "Proceedings",
    },
    {
      title: "Event Impact Report",
      description: "Comprehensive report with statistics, feedback, and key outcomes.",
      size: "8.7 MB",
      format: "PDF",
      downloads: "1.8K",
      category: "Reports",
    },
    {
      title: "Speaker Presentation Pack",
      description: "Slide decks and materials from all keynote and session speakers.",
      size: "45.3 MB",
      format: "ZIP",
      downloads: "3.1K",
      category: "Presentations",
    },
    {
      title: "High-Resolution Photos",
      description: "Professional event photography in high resolution for media use.",
      size: "125.7 MB",
      format: "ZIP",
      downloads: "892",
      category: "Media",
    },
    {
      title: "Video Highlights Reel",
      description: "Edited compilation of the best moments from recent events.",
      size: "78.2 MB",
      format: "MP4",
      downloads: "1.5K",
      category: "Video",
    },
    {
      title: "Attendee Feedback Summary",
      description: "Detailed analysis of attendee feedback and satisfaction metrics.",
      size: "3.4 MB",
      format: "PDF",
      downloads: "654",
      category: "Reports",
    },
  ]

  const filters = ["all", "video", "image", "documents"]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative text-center mb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-red-50 rounded-3xl"></div>
          <div className="relative z-10 py-16 px-8">
            <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="mr-2" size={16} />
              Interactive Media Gallery
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">
                Media
              </span>{" "}
              <span className="text-red-600">Experience</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Immerse yourself in our comprehensive media library featuring videos, photos, and resources from
              world-class events.
            </p>

            {/* Search and Filter Bar */}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-2 flex items-center gap-2">
              <div className="flex-1 flex items-center">
                <Search className="text-gray-400 ml-4 mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Search media content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 py-3 px-2 border-0 focus:outline-none text-gray-700"
                />
              </div>
              <div className="flex items-center gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeFilter === filter ? "bg-red-600 text-white" : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Media Statistics */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mediaStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-2xl font-bold text-black mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Content */}
        <section className="mb-20">
          <SectionHeading title="Featured Content" subtitle="Discover our most popular and recent media highlights." />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Featured Video */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="relative">
                  <img
                    src={featuredContent[0].thumbnail || "/placeholder.svg"}
                    alt={featuredContent[0].title}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-red-600 hover:bg-red-700 text-white p-8 rounded-full transition-all transform hover:scale-110 shadow-2xl">
                      <Play size={48} fill="currentColor" />
                    </button>
                  </div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-sm">
                    {featuredContent[0].duration}
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center">
                        <Eye className="mr-1" size={16} />
                        {featuredContent[0].views}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="mr-1" size={16} />
                        {featuredContent[0].date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredContent[0].category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-red-600 transition-colors">
                        <Heart size={20} />
                      </button>
                      <button className="text-gray-400 hover:text-red-600 transition-colors">
                        <Share2 size={20} />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-black mb-3">{featuredContent[0].title}</h3>
                  <p className="text-gray-600 mb-6">{featuredContent[0].description}</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-2xl font-medium transition-all transform hover:scale-105">
                    Watch Full Video
                  </button>
                </div>
              </div>
            </div>

            {/* Secondary Featured Content */}
            {featuredContent.slice(1).map((content, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={content.thumbnail || "/placeholder.svg"}
                    alt={content.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all">
                      <Play size={24} fill="currentColor" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                    {content.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                      {content.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Eye className="mr-1" size={12} />
                      {content.views}
                    </span>
                  </div>
                  <h4 className="font-bold text-black mb-2 line-clamp-2">{content.title}</h4>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{content.description}</p>
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium">Watch Video →</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Media Categories */}
        <section className="mb-20">
          <SectionHeading
            title="Media Collections"
            subtitle="Explore our organized media library by category and type."
          />

          {mediaCategories.map((category, index) => (
            <div key={category.title} className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="bg-red-600 p-3 rounded-2xl mr-4">
                    {category.type === "video" ? (
                      <Video className="text-white" size={24} />
                    ) : (
                      <ImageIcon className="text-white" size={24} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-black">{category.title}</h3>
                    <p className="text-gray-600 mt-1">{category.description}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full mr-2">
                        {category.count} items
                      </span>
                      <span>Updated weekly</span>
                    </div>
                  </div>
                </div>
                <button className="text-red-600 hover:text-red-700 font-medium bg-red-50 hover:bg-red-100 px-4 py-2 rounded-xl transition-colors">
                  View All →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:border-red-600 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative">
                      <img
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {category.type === "video" && (
                        <>
                          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <button className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transform hover:scale-110 transition-all">
                              <Play size={20} fill="currentColor" />
                            </button>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                            {item.duration}
                          </div>
                        </>
                      )}
                      {category.type === "image" && (
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                          {item.count}
                        </div>
                      )}
                      <div className="absolute top-2 left-2 bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded text-xs flex items-center">
                        <Eye className="mr-1" size={12} />
                        {item.views}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-black mb-2 line-clamp-2">{item.title}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {category.type === "video" ? "Video" : "Photo Gallery"}
                        </span>
                        <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                          {category.type === "video" ? "Watch" : "View"} →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Event Resources */}
        <section className="mb-20">
          <SectionHeading
            title="Event Resources"
            subtitle="Download presentations, reports, and other materials from our events."
          />

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-red-100 p-3 rounded-xl">
                      <FileText className="text-red-600" size={24} />
                    </div>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                      {resource.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-black mb-2 group-hover:text-red-600 transition-colors">
                    {resource.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{resource.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>
                      {resource.format} • {resource.size}
                    </span>
                    <span className="flex items-center">
                      <Download className="mr-1" size={12} />
                      {resource.downloads}
                    </span>
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all transform hover:scale-105 flex items-center justify-center">
                    <Download size={16} className="mr-2" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Request Section */}
        <section className="mb-20">
          <SectionHeading
            title="Custom Media Requests"
            subtitle="Need specific content or have questions about usage rights?"
          />

          <div className="bg-gradient-to-br from-red-50 via-white to-red-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Star className="mr-2" size={16} />
                  Professional Media Services
                </div>
                <h3 className="text-3xl font-bold text-black mb-6">Get Exactly What You Need</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  Our media team specializes in creating custom content packages tailored to your specific requirements.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
                    <div className="flex items-center mb-2">
                      <Video className="text-red-600 mr-2" size={20} />
                      <span className="font-semibold text-black">Video Content</span>
                    </div>
                    <p className="text-sm text-gray-600">Custom editing, interviews, highlights</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
                    <div className="flex items-center mb-2">
                      <ImageIcon className="text-red-600 mr-2" size={20} />
                      <span className="font-semibold text-black">Photography</span>
                    </div>
                    <p className="text-sm text-gray-600">High-res photos, event coverage</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
                    <div className="flex items-center mb-2">
                      <FileText className="text-red-600 mr-2" size={20} />
                      <span className="font-semibold text-black">Documents</span>
                    </div>
                    <p className="text-sm text-gray-600">Reports, presentations, transcripts</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
                    <div className="flex items-center mb-2">
                      <Award className="text-red-600 mr-2" size={20} />
                      <span className="font-semibold text-black">Licensing</span>
                    </div>
                    <p className="text-sm text-gray-600">Commercial usage rights</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center">
                    <Users className="mr-2" size={20} />
                    Submit Request
                  </button>
                  <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-2xl font-semibold transition-all">
                    View Pricing
                  </button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
                <h4 className="text-2xl font-bold text-black mb-6">Usage Guidelines</h4>
                <div className="space-y-6">
                  <div className="border-l-4 border-red-600 pl-4">
                    <span className="font-semibold text-black block mb-1">Commercial Use</span>
                    <p className="text-sm text-gray-600">
                      Contact us for licensing agreements and usage rights. Custom packages available.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <span className="font-semibold text-black block mb-1">Editorial Use</span>
                    <p className="text-sm text-gray-600">
                      Media available for news and editorial purposes with proper attribution.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <span className="font-semibold text-black block mb-1">Personal Use</span>
                    <p className="text-sm text-gray-600">
                      Attendees may use photos and videos for personal and professional portfolios.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <span className="font-semibold text-black block mb-1">Attribution</span>
                    <p className="text-sm text-gray-600">
                      Please credit "Ekatra Meetings" when using our media content.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center mb-2">
                    <Clock className="text-gray-600 mr-2" size={16} />
                    <span className="font-semibold text-black text-sm">Response Time</span>
                  </div>
                  <p className="text-sm text-gray-600">Custom requests processed within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="mr-2" size={16} />
              Join Our Media Community
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Be Featured?</h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              Join our upcoming events and become part of our media gallery. Share your experience with a global
              audience and build your professional presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-red-600 hover:bg-gray-100 px-10 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
                View Upcoming Events
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-10 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105">
                Submit Your Content
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
