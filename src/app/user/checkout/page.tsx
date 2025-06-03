import CheckoutForm from "@/components/CheckoutForm";

export default function Checkout() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="relative py-8 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              Secure Checkout
            </h1>
            <p className="text-gray-600">Complete your order with confidence</p>
          </div>
        </div>
      </div>
      <CheckoutForm />
    </div>
  );
}
