import Link from "next/link"

export default function ThankYou() {
  return (
    <div className="py-28">
      <div className="container mx-auto px-4">
        <div className="text-center py-20">
          <div className="text-green-800 text-8xl mb-12">
            <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-gray-800 text-5xl font-bold mb-6">Thank you!</h2>
          <p className="text-gray-600 text-xl mb-12 leading-relaxed">Your order was successfully completed.</p>
          <Link
            href="/shop"
            className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors inline-block"
          >
            Back to shop
          </Link>
        </div>
      </div>
    </div>
  )
}
