import Link from "next/link"

export default function EventTypesPage() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-500 font-semibold tracking-wide uppercase">Event Types</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            A better way to engage your audience
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Explore different event types to find the perfect fit for your needs.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative bg-[#1E1E2E] border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {/* Heroicon name: outline/globe-alt */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-100">Webinars</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-400">
                Engage a large audience online with interactive presentations and Q&A sessions.
              </dd>
              <div className="mt-4">
                <Link
                  href="/webinars"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative bg-[#1E1E2E] border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {/* Heroicon name: outline/chat-alt-2 */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-100">Conferences</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-400">
                Bring people together for learning, networking, and collaboration.
              </dd>
              <div className="mt-4">
                <Link
                  href="/conferences"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative bg-[#1E1E2E] border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {/* Heroicon name: outline/video-camera */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-100">Workshops</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-400">
                Provide hands-on training and skill-building experiences.
              </dd>
              <div className="mt-4">
                <Link
                  href="/workshops"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative bg-[#1E1E2E] border border-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  {/* Heroicon name: outline/microphone */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-100">Podcasts</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-400">
                Share your expertise and insights through audio content.
              </dd>
              <div className="mt-4">
                <Link
                  href="/podcasts"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 bg-gray-900 mt-24 py-12 sm:py-16">
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl py-10 px-6 sm:px-12 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">Ready to get started?</h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-200">
                Join our platform and start creating engaging events today.
              </p>
            </div>
            <div className="mt-8 xl:mt-0 xl:ml-8">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 shadow-xl"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
