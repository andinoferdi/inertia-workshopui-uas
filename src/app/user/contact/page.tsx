import ContactForm from "@/components/ContactForm"

export default function Contact() {
  return (
    <div className="pt-20">
      <div className="relative py-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center">Contact Us</h1>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}
