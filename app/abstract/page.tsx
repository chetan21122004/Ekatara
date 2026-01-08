"use client"

import { Button } from "@/components/ui/button"
import {
  AlertTriangle,
  FileText,
  Clock,
  Users,
  Image as ImageIcon,
  Mail,
  FileCheck,
  BookOpen,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Download,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AbstractGuidelinesPage() {
  const tracks = [
    { name: "Medical Research", count: "2.4k papers" },
    { name: "Biotechnology", count: "1.8k papers" },
    { name: "Pharmaceutical Sciences", count: "2.1k papers" },
    { name: "Healthcare Innovation", count: "1.5k papers" },
    { name: "Clinical Trials", count: "1.9k papers" },
    { name: "Public Health", count: "2.2k papers" },
    { name: "Digital Health", count: "1.7k papers" },
    { name: "Medical Devices", count: "1.6k papers" },
  ]

  const formatGuidelines = [
    {
      title: "Document Structure",
      items: [
        "Title (max 20 words)",
        "Author(s) with affiliations",
        "Institution details",
        "Corresponding email",
      ],
    },
    {
      title: "Content Requirements",
      items: [
        "3-5 relevant keywords",
        "Maximum 300 words",
        "Clear research objectives",
        "Methodology overview",
      ],
    },
    {
      title: "Formatting Rules",
      items: [
        "Times New Roman, 12pt",
        "Single line spacing",
        "1-inch margins",
        "APA citation style",
      ],
    },
  ]

  const fileTypes = [
    { 
      format: ".docx",
      description: "Microsoft Word",
      icon: FileText,
      size: "Max 10MB",
      recommended: true
    },
    { 
      format: ".pdf",
      description: "Adobe PDF",
      icon: FileCheck,
      size: "Max 10MB",
      recommended: false
    },
  ]

  const imageGuidelines = [
    {
      title: "Image Requirements",
      description: "All figures must be high resolution and clearly legible",
      specs: [
        "Maximum 3 images",
        "500 KB per image",
        "300 DPI minimum",
        "CMYK color space",
      ]
    },
    {
      title: "Supported Formats",
      description: "Submit images in standard web formats",
      specs: [
        ".jpg / .jpeg",
        ".png (preferred)",
        ".svg (vectors)",
        "RGB color mode",
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br pt-6  from-gray-50 to-white">
      {/* Modern Hero Section with Glassmorphism */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Animated background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,0,0,0.1),rgba(0,0,0,0))] animate-pulse"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/30 via-transparent to-purple-900/30"></div>
          {/* Animated orbs */}
          <div className="absolute top-20 left-[10%] w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Deadline badge */}
            <div className="inline-flex items-center mt-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-red-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 text-white text-sm font-medium mb-12 animate-fade-in-up">
              <Clock className="w-5 h-5 mr-3 text-red-400" />
              <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                Abstract Submission 
              </span>
            </div>

            {/* Main heading with animated gradient */}
            <h1 className="text-7xl font-bold mb-8 leading-tight animate-fade-in-up animation-delay-150">
              <span className="text-white">Abstract</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-purple-600 animate-gradient-x">
                Submission Guidelines
              </span>
            </h1>

            {/* Description with improved typography */}
            <p className="text-xl text-gray-300/90 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Follow our comprehensive guidelines to ensure your research abstract meets all requirements and stands the best chance of acceptance.
            </p>

            {/* Enhanced buttons with animations */}
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up animation-delay-450">
              <Button
                asChild
                size="lg"
                className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl px-10 py-7 text-lg font-semibold shadow-[0_0_30px_rgba(220,38,38,0.2)] hover:shadow-[0_0_50px_rgba(220,38,38,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <a href="https://register.ekatrameetings.com" target="_blank" rel="noopener noreferrer" className="relative z-10 flex items-center">
                  Submit Abstract
                  <ExternalLink className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group relative bg-white/5 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 rounded-xl px-10 py-7 text-lg font-semibold transition-all duration-300"
              >
                <a href="mailto:abstracts@ekatrameetings.com?subject=Abstract Template Request" className="relative z-10 flex items-center">
                  Request Template
                  <Download className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-16">
            {/* Format Guidelines */}
            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-xl shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Format Guidelines</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {formatGuidelines.map((section, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* File Requirements */}
            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl shadow-lg">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">File Requirements</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fileTypes.map((type) => (
                  <div
                    key={type.format}
                    className={`relative bg-white rounded-xl shadow-lg border ${
                      type.recommended ? 'border-red-200' : 'border-gray-100'
                    } p-6 hover:shadow-xl transition-shadow duration-300`}
                  >
                    {type.recommended && (
                      <div className="absolute -top-3 -right-3">
                        <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          Recommended
                        </div>
                      </div>
                    )}
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${
                        type.recommended ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <type.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{type.format}</h3>
                        <p className="text-gray-600 mb-2">{type.description}</p>
                        <p className="text-sm text-gray-500">{type.size}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Alert className="bg-blue-50/50 backdrop-blur-sm border border-blue-100">
                  <AlertCircle className="w-4 h-4 text-blue-600" />
                  <AlertTitle className="text-blue-800 font-semibold">External Submission Process</AlertTitle>
                  <AlertDescription className="text-blue-700">
                    All submissions must be made through our secure submission portal. Direct email submissions are not accepted.
                  </AlertDescription>
                </Alert>
              </div>
            </section>

            {/* Image Guidelines */}
            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-lg">
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Image Guidelines</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {imageGuidelines.map((guide, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <ul className="space-y-3">
                      {guide.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* LaTeX Support */}
            <section>
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Mathematical & Chemical Equations</h2>
              </div>
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    Our system supports both mathematical and chemical equations through LaTeX and mhchem notation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Mathematical Equation Example</h4>
                      <pre className="bg-white p-4 rounded-md text-sm font-mono text-gray-800 shadow-sm">
                        {"\\[ E = mc^2 \\]"}
                      </pre>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Chemical Equation Example</h4>
                      <pre className="bg-white p-4 rounded-md text-sm font-mono text-gray-800 shadow-sm">
                        {"\\[ \\ce{H2O + CO2 -> H2CO3} \\]"}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Deadline Card */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-xl text-white p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6" />
                <h3 className="text-xl font-bold">Final Deadline</h3>
              </div>
              <p className="text-2xl font-bold mb-2">June 30, 2025</p>
              <p className="text-sm opacity-90">11:59 PM IST</p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm">
                  Late submissions will not be accepted under any circumstances
                </p>
              </div>
            </div>

            {/* Research Tracks */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">Research Tracks</h3>
              </div>
              <div className="space-y-4">
                {tracks.map((track, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <ArrowRight className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <span className="text-gray-700 group-hover:text-gray-900">{track.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{track.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Author Requirements */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">Author Requirements</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Valid institutional email required</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">ORCID registration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-600">Registration payment before presentation</span>
                </li>
              </ul>
            </div>

            {/* Important Notes */}
            <Alert variant="destructive" className="bg-red-50 border-red-100 rounded-xl">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <AlertTitle className="text-red-800 font-semibold">Important Notes</AlertTitle>
              <AlertDescription className="text-red-700">
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Abstracts not following guidelines will be rejected</li>
                  <li>All decisions by the review committee are final</li>
                  <li>No revisions accepted after submission</li>
                </ul>
              </AlertDescription>
            </Alert>

            {/* Contact Support */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">Need Help?</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our support team is available 24/7 to assist with your submission:
              </p>
              <a
                href="mailto:abstracts@ekatrameetings.com"
                className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium"
              >
                <span>abstracts@ekatrameetings.com</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
