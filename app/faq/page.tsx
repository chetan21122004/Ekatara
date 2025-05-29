"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { ChevronDown, HelpCircle, Search, TrendingUp, CheckCircle, Clock, MessageSquare, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchResults, setSearchResults] = useState<{
    count: number
    categories: { [key: string]: number }
  }>({ count: 0, categories: {} })
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  // Popular questions that will always be highlighted
  const popularQuestionIds = [0, 100, 200, 300]

  const faqCategories = [
    {
      id: "registration",
      title: "Event Registration",
      icon: <CheckCircle className="text-emerald-500" size={20} />,
      faqs: [
        {
          question: "How do I register for an event?",
          answer:
            "Registration is completed through our secure external platform. Simply visit the event page, click 'Register Now', create an account or log in, select your registration type, and complete the payment process. You'll receive a confirmation email immediately after successful registration.",
          tags: ["registration", "process", "account"],
        },
        {
          question: "Can I register multiple attendees at once?",
          answer:
            "Yes! We offer group registration for 3 or more attendees from the same organization. Contact our registration team to receive a custom group registration form and take advantage of group discounts ranging from 10-20% depending on the number of attendees.",
          tags: ["registration", "group", "discount"],
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept major credit/debit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and can provide invoices for institutional payments. All transactions are processed through our secure payment gateway with encryption.",
          tags: ["payment", "methods", "security"],
        },
        {
          question: "Can I transfer my registration to someone else?",
          answer:
            "Yes, registration transfers to another person from the same organization are allowed at no additional cost. Please contact our support team at least 48 hours before the event to process the transfer.",
          tags: ["registration", "transfer", "changes"],
        },
      ],
    },
    {
      id: "abstract",
      title: "Abstract Submission",
      icon: <MessageSquare className="text-blue-500" size={20} />,
      faqs: [
        {
          question: "What are the abstract submission requirements?",
          answer:
            "Abstracts must be 250-300 words (excluding title, authors, and affiliations), formatted in Arial or Times New Roman 12pt font, single-spaced. Required sections include: title, authors, background, methods, results, conclusions, and 3-5 keywords. Submit as .docx or PDF format.",
          tags: ["abstract", "requirements", "format"],
        },
        {
          question: "When is the abstract submission deadline?",
          answer:
            "The abstract submission deadline is June 15, 2025. Review notifications will be sent by July 30, 2025. Accepted presenters must register for the event by August 15, 2025, to secure their presentation slot.",
          tags: ["abstract", "deadline", "dates"],
        },
        {
          question: "Can I submit multiple abstracts?",
          answer:
            "Yes, you can submit multiple abstracts, but each submission requires a separate submission form. Please ensure each abstract meets all formatting requirements and is submitted before the deadline.",
          tags: ["abstract", "multiple", "submission"],
        },
        {
          question: "What happens after I submit my abstract?",
          answer:
            "After submission, you'll receive an immediate confirmation email with your submission ID. Your abstract will be reviewed by our scientific committee within 4-6 weeks. You'll be notified of acceptance, revision requests, or rejection via email.",
          tags: ["abstract", "review", "process"],
        },
      ],
    },
    {
      id: "payment",
      title: "Payment & Billing",
      icon: <Clock className="text-amber-500" size={20} />,
      faqs: [
        {
          question: "What are the early bird discount rates?",
          answer:
            "Early bird registration (until March 15, 2025) offers 20% off standard rates. Standard registration runs from March 16 - July 31, 2025. Late registration (August 1 onwards) includes a 10% surcharge. Group discounts can be combined with early bird rates.",
          tags: ["payment", "discount", "early-bird"],
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "Cancellations 60+ days before the event receive a full refund minus $50 processing fee. Cancellations 30-59 days before receive 50% refund. Cancellations less than 30 days receive no refund, but registration can be transferred to another person.",
          tags: ["payment", "cancellation", "refund"],
        },
        {
          question: "Can I get an invoice for my registration?",
          answer:
            "Yes, we provide detailed invoices for institutional payments and expense reporting. Invoices include complete billing information, tax calculations where applicable, and payment terms of Net 30 days. Contact our finance team to request an invoice.",
          tags: ["payment", "invoice", "billing"],
        },
        {
          question: "Are there student discounts available?",
          answer:
            "Yes, students receive 50% off standard registration rates. Valid student ID or enrollment verification is required during registration. This discount can be combined with early bird rates for additional savings.",
          tags: ["payment", "discount", "student"],
        },
      ],
    },
    {
      id: "logistics",
      title: "Event Logistics",
      icon: <TrendingUp className="text-purple-500" size={20} />,
      faqs: [
        {
          question: "What is included in my registration?",
          answer:
            "Standard registration includes full event access, conference materials, lunch and refreshments, networking reception, and digital proceedings. Premium registration adds VIP seating, exclusive workshops, speaker dinner access, and 1-year digital library access.",
          tags: ["logistics", "inclusions", "benefits"],
        },
        {
          question: "Will the event be recorded?",
          answer:
            "Yes, most sessions are recorded and made available to registered attendees through our digital platform. Recordings are typically available within 48 hours after the event and remain accessible for 12 months.",
          tags: ["logistics", "recordings", "access"],
        },
        {
          question: "What COVID-19 safety measures are in place?",
          answer:
            "We follow all local health guidelines and regulations. This may include vaccination requirements, mask mandates, social distancing measures, and enhanced sanitization protocols. Specific requirements will be communicated to registered attendees before the event.",
          tags: ["logistics", "safety", "covid"],
        },
        {
          question: "Is there parking available at the venue?",
          answer:
            "Parking availability varies by venue. Detailed venue information including parking options, public transportation, and local accommodations will be provided in your pre-event information package sent 2 weeks before the event.",
          tags: ["logistics", "venue", "parking"],
        },
      ],
    },
    {
      id: "technical",
      title: "Technical Support",
      icon: <HelpCircle className="text-red-500" size={20} />,
      faqs: [
        {
          question: "How do I access virtual or hybrid event features?",
          answer:
            "Virtual and hybrid event access details are provided in your confirmation email and pre-event information package. You'll receive login credentials, platform instructions, and technical requirements. A test session is usually available 24 hours before the event.",
          tags: ["technical", "virtual", "access"],
        },
        {
          question: "What are the technical requirements for virtual attendance?",
          answer:
            "You'll need a stable internet connection (minimum 5 Mbps), updated web browser (Chrome, Firefox, Safari, or Edge), and audio/video capabilities. Mobile apps are available for iOS and Android. Detailed technical requirements are provided upon registration.",
          tags: ["technical", "requirements", "virtual"],
        },
        {
          question: "Who do I contact for technical issues during the event?",
          answer:
            "Our technical support team is available 24/7 during events. Contact information is provided in your event materials. You can reach support via live chat, phone, or email. Response times are typically within 15 minutes during event hours.",
          tags: ["technical", "support", "contact"],
        },
        {
          question: "Can I download presentation materials?",
          answer:
            "Yes, presentation materials are available for download through our event platform. Materials are typically uploaded 24-48 hours after each session and remain available for 12 months. Some presenters may restrict downloads based on their preferences.",
          tags: ["technical", "downloads", "materials"],
        },
      ],
    },
  ]

  // Calculate search results when search term changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults({ count: 0, categories: {} })
      return
    }

    const results: { count: number; categories: { [key: string]: number } } = {
      count: 0,
      categories: {},
    }

    faqCategories.forEach((category) => {
      const matchingFaqs = category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )

      if (matchingFaqs.length > 0) {
        results.count += matchingFaqs.length
        results.categories[category.id] = matchingFaqs.length
      }
    })

    setSearchResults(results)
  }, [searchTerm])

  // Add search term to recent searches when user submits search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim() !== "" && !recentSearches.includes(searchTerm.trim())) {
      setRecentSearches((prev) => [searchTerm.trim(), ...prev.slice(0, 4)])
    }
  }

  // Clear search term
  const clearSearch = () => {
    setSearchTerm("")
  }

  // Apply recent search
  const applyRecentSearch = (term: string) => {
    setSearchTerm(term)
  }

  // Remove recent search
  const removeRecentSearch = (term: string) => {
    setRecentSearches((prev) => prev.filter((item) => item !== term))
  }

  // Toggle FAQ item
  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  // Filter FAQs based on search term and active category
  const filteredFAQs = faqCategories
    .filter((category) => activeCategory === "all" || category.id === activeCategory)
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          searchTerm.trim() === "" ||
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 bg-red-50 p-3 rounded-full">
            <HelpCircle className="text-red-600 h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our events, registration process, and services. Can't find what
            you're looking for? Contact our support team.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-12 py-6 rounded-xl border-gray-200 focus:border-red-600 focus:ring-red-600 text-lg shadow-sm"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>
              )}
            </form>

            {/* Search Stats */}
            {searchTerm && (
              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <span className="font-medium">Found {searchResults.count} results</span>
                {Object.entries(searchResults.categories).map(([category, count]) => (
                  <Badge key={category} variant="outline" className="bg-gray-50">
                    {faqCategories.find((c) => c.id === category)?.title}: {count}
                  </Badge>
                ))}
              </div>
            )}

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Clock size={14} />
                  <span>Recent searches:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((term) => (
                    <div
                      key={term}
                      className="flex items-center gap-1 bg-gray-50 hover:bg-gray-100 rounded-full px-3 py-1 text-sm"
                    >
                      <button onClick={() => applyRecentSearch(term)} className="text-gray-700">
                        {term}
                      </button>
                      <button onClick={() => removeRecentSearch(term)} className="text-gray-400 hover:text-gray-600">
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.section>

        {/* FAQ Categories Tabs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Tabs defaultValue="all" onValueChange={setActiveCategory} className="w-full">
            <div className="bg-white rounded-xl p-2 shadow-md border border-gray-100 mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-1 w-full">
                <TabsTrigger value="all" className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600">
                  All Topics
                </TabsTrigger>
                {faqCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-red-50 data-[state=active]:text-red-600 flex items-center gap-2"
                  >
                    {category.icon}
                    <span className="hidden md:inline">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* FAQ Content */}
            <TabsContent value="all" className="mt-0">
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl shadow-md border border-gray-100">
                  <HelpCircle className="text-gray-300 mx-auto mb-4" size={64} />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No FAQs Found</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    We couldn't find any FAQs matching your search. Try different keywords or contact our support team.
                  </p>
                  <Button variant="outline" className="mt-6" onClick={clearSearch}>
                    Clear Search
                  </Button>
                </div>
              ) : (
                filteredFAQs.map((category, categoryIndex) => (
                  <div key={category.id} className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-gray-50">{category.icon}</div>
                      <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
                      <Badge variant="outline" className="ml-auto">
                        {category.faqs.length} items
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      {category.faqs.map((faq, faqIndex) => {
                        const globalIndex = categoryIndex * 100 + faqIndex
                        const isOpen = openItems.includes(globalIndex)
                        const isPopular = popularQuestionIds.includes(globalIndex)

                        return (
                          <motion.div
                            key={faqIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: faqIndex * 0.05 }}
                            className={`bg-white rounded-xl shadow-sm border ${
                              isOpen ? "border-red-200" : "border-gray-100"
                            } hover:border-red-200 transition-all duration-300 ${
                              isPopular ? "ring-2 ring-red-100" : ""
                            }`}
                          >
                            <button
                              onClick={() => toggleItem(globalIndex)}
                              className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                            >
                              <div className="flex items-center gap-3 pr-4">
                                {isPopular && (
                                  <Badge className="bg-red-50 text-red-600 border-red-100">
                                    <TrendingUp size={12} className="mr-1" /> Popular
                                  </Badge>
                                )}
                                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                              </div>
                              <ChevronDown
                                className={`text-red-600 flex-shrink-0 transition-transform duration-200 ${
                                  isOpen ? "transform rotate-180" : ""
                                }`}
                                size={20}
                              />
                            </button>

                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-6 pb-5">
                                    <div className="border-t border-gray-100 pt-4">
                                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                      <div className="mt-4 flex flex-wrap gap-2">
                                        {faq.tags.map((tag) => (
                                          <Badge key={tag} variant="outline" className="bg-gray-50 text-gray-600">
                                            #{tag}
                                          </Badge>
                                        ))}
                                      </div>
                                      <div className="mt-4 flex justify-end">
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                        >
                                          Was this helpful?
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                ))
              )}
            </TabsContent>

            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                {filteredFAQs.filter((c) => c.id === category.id).length === 0 ? (
                  <div className="text-center py-16 bg-white rounded-2xl shadow-md border border-gray-100">
                    <HelpCircle className="text-gray-300 mx-auto mb-4" size={64} />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No FAQs Found</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      We couldn't find any FAQs matching your search in this category. Try different keywords or check
                      other categories.
                    </p>
                    <Button variant="outline" className="mt-6" onClick={clearSearch}>
                      Clear Search
                    </Button>
                  </div>
                ) : (
                  filteredFAQs
                    .filter((c) => c.id === category.id)
                    .map((filteredCategory) => (
                      <div key={filteredCategory.id} className="space-y-4">
                        {filteredCategory.faqs.map((faq, faqIndex) => {
                          const globalIndex = faqCategories.findIndex((c) => c.id === category.id) * 100 + faqIndex
                          const isOpen = openItems.includes(globalIndex)
                          const isPopular = popularQuestionIds.includes(globalIndex)

                          return (
                            <motion.div
                              key={faqIndex}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: faqIndex * 0.05 }}
                              className={`bg-white rounded-xl shadow-sm border ${
                                isOpen ? "border-red-200" : "border-gray-100"
                              } hover:border-red-200 transition-all duration-300 ${
                                isPopular ? "ring-2 ring-red-100" : ""
                              }`}
                            >
                              <button
                                onClick={() => toggleItem(globalIndex)}
                                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                              >
                                <div className="flex items-center gap-3 pr-4">
                                  {isPopular && (
                                    <Badge className="bg-red-50 text-red-600 border-red-100">
                                      <TrendingUp size={12} className="mr-1" /> Popular
                                    </Badge>
                                  )}
                                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                                </div>
                                <ChevronDown
                                  className={`text-red-600 flex-shrink-0 transition-transform duration-200 ${
                                    isOpen ? "transform rotate-180" : ""
                                  }`}
                                  size={20}
                                />
                              </button>

                              <AnimatePresence>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="px-6 pb-5">
                                      <div className="border-t border-gray-100 pt-4">
                                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                          {faq.tags.map((tag) => (
                                            <Badge key={tag} variant="outline" className="bg-gray-50 text-gray-600">
                                              #{tag}
                                            </Badge>
                                          ))}
                                        </div>
                                        <div className="mt-4 flex justify-end">
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                          >
                                            Was this helpful?
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          )
                        })}
                      </div>
                    ))
                )}
              </TabsContent>
            ))}
          </Tabs>
        </motion.section>

        {/* FAQ Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">200+</div>
              <div className="text-gray-600">Total FAQs</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600">Questions Resolved</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">5</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </motion.section>

        {/* Contact Support */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our support team is here to help. Get personalized assistance with your specific questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 rounded-xl font-semibold text-lg transition-colors h-auto">
                  Contact Support Team
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-6 rounded-xl font-semibold text-lg transition-colors h-auto"
                >
                  Schedule a Call
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-white" size={16} />
                  <span className="text-sm">1hr Response Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-white" size={16} />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-white" size={16} />
                  <span className="text-sm">Multilingual Team</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
