import CartTable from "@/components/CartTable"

export default function Cart() {
  return (
    <div className="pt-20">
      <div className="relative py-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center">Shopping Cart</h1>
        </div>
      </div>
      <CartTable />
    </div>
  )
}
