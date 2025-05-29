import { Skeleton } from "@/components/ui/skeleton"
import { HelpCircle } from "lucide-react"

export default function FAQLoading() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-red-50 p-3 rounded-full">
            <HelpCircle className="text-red-600 h-8 w-8" />
          </div>
          <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
          <Skeleton className="h-6 w-2/3 mx-auto" />
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="relative max-w-3xl mx-auto">
              <Skeleton className="h-14 w-full rounded-xl" />
            </div>
          </div>
        </div>

        {/* FAQ Categories Tabs */}
        <div className="mb-12">
          <div className="bg-white rounded-xl p-2 shadow-md border border-gray-100 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-1 w-full">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-10 rounded-lg" />
                ))}
            </div>
          </div>

          {/* FAQ Content */}
          <div className="space-y-8">
            {Array(3)
              .fill(0)
              .map((_, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Skeleton className="h-10 w-10 rounded-lg" />
                    <Skeleton className="h-8 w-48" />
                  </div>

                  <div className="space-y-4">
                    {Array(4)
                      .fill(0)
                      .map((_, faqIndex) => (
                        <div key={faqIndex} className="bg-white rounded-xl shadow-sm border border-gray-100">
                          <div className="px-6 py-5">
                            <Skeleton className="h-6 w-full" />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* FAQ Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-2" />
                  <Skeleton className="h-4 w-24 mx-auto" />
                </div>
              ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl p-8 md:p-12 text-center">
            <Skeleton className="h-10 w-2/3 mx-auto mb-6 bg-white/20" />
            <Skeleton className="h-6 w-1/2 mx-auto mb-8 bg-white/20" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-14 w-48 mx-auto rounded-xl bg-white/20" />
              <Skeleton className="h-14 w-48 mx-auto rounded-xl bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
