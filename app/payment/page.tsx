const PaymentPage = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-12">
      <div className="max-w-4xl mx-auto bg-[#1E1E2E] shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="w-full p-4 md:p-8">
            <h2 className="text-2xl font-semibold text-gray-100">Payment Information</h2>
            <p className="text-gray-400">Complete your purchase by providing your payment details.</p>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-100">Billing Address</h3>
              <div className="mt-4">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-800 text-gray-200"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-100">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-800 text-gray-200"
                    placeholder="Your Address"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-100">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-800 text-gray-200"
                    placeholder="Your City"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-100">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-800 text-gray-200"
                    placeholder="Your ZIP Code"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-100">Payment Method</h3>
              <div className="mt-4">
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-600 bg-gray-800"
                  />
                  <label htmlFor="creditCard" className="ml-3 block text-sm font-medium text-gray-100">
                    Credit Card
                  </label>
                  <span className="ml-2">
                    <img src="/visa.svg" alt="Visa" className="h-6 w-auto inline-block mr-1" />
                    <img src="/mastercard.svg" alt="Mastercard" className="h-6 w-auto inline-block" />
                  </span>
                </div>
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-100">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-800 text-gray-200"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                  />
                </div>
                <div className="flex space-x-4 mb-4">
                  <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-100">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-800 text-gray-200"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-100">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-800 text-gray-200"
                      placeholder="CVV"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:shadow-outline">
                Complete Payment
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-4 md:p-8 bg-[#1E1E2E] border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-100">Order Summary</h2>
            <div className="mt-4">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>$199.99</span>
              </div>
              <div className="flex justify-between text-gray-400 mt-2">
                <span>Shipping</span>
                <span>$10.00</span>
              </div>
              <div className="flex justify-between text-gray-400 mt-2">
                <span>Tax</span>
                <span>$15.00</span>
              </div>
              <div className="border-t border-gray-700 mt-4 pt-4 flex justify-between font-semibold text-gray-100">
                <span>Total</span>
                <span>$224.99</span>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-center">
                <img src="/security-badge.svg" alt="Secure Payment" className="h-8 w-auto mr-2" />
                <span className="text-sm text-gray-400">Secure Payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
