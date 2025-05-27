import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Registration",
  description: "Register for our service.",
}

export default function RegistrationPage() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">Create an account</h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Or{" "}
            <Link href="/login" className="font-medium text-indigo-500 hover:text-indigo-400">
              Sign in to your account
            </Link>
          </p>
        </div>
        <div className="bg-[#1E1E2E] border border-gray-700 rounded-md shadow-lg p-6">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-gray-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-100">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-gray-200"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="text-center">
          <Link href="/" className="text-sm font-medium text-indigo-500 hover:text-indigo-400">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
