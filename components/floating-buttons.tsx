import Link from "next/link"
import { Target, Lightbulb, MessageCircle, Phone } from "lucide-react"

export function FloatingButtons() {
  return (
    <>
      {/* Fixed Action Button with expandable options */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Main Buttons - Visible on all devices */}
        <div className="group">
          {/* Call-to-action buttons that appear on hover/tap (visible on hover on desktop, tap on mobile) */}
          <div className="absolute bottom-full right-0 mb-3 flex flex-col gap-3 opacity-0 scale-95 transform transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 origin-bottom-right">
            <Link 
              href="/contact" 
              className="bg-white text-red-600 hover:bg-red-50 px-4 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-red-100 whitespace-nowrap"
            >
              <Target className="h-4 w-4" />
              <span>Plan Scientific Event</span>
            </Link>
            
            <Link 
              href="/technology" 
              className="bg-white text-red-600 hover:bg-red-50 px-4 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-red-100 whitespace-nowrap"
            >
              <Lightbulb className="h-4 w-4" />
              <span>Request a Demo</span>
            </Link>
          </div>
          
          {/* Chat buttons */}
          <div className="flex  flex-col items-center gap-3">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/+919999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-10"
              aria-label="Chat on WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </a>
            
            {/* Live Chat - Main button that also serves as toggle */}
            <button 
              className="bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-105"
              aria-label="Contact Us"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            
            {/* Quick call button */}
            <a 
              href="tel:+919999999999" 
              className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 origin-center"
              aria-label="Call Us"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Mobile-optimized quick access button - Only visible on smaller screens */}
        <div className="md:hidden">
          <Link 
            href="/contact" 
            className="bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
            aria-label="Contact Us"
          >
            <Target className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  )
} 