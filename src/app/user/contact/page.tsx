"use client";

import type React from "react";

import { useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import NeonText from "@/components/NeonText";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Star,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const headerRef = useScrollAnimation("animate-fade-in-up", {
    triggerOnce: true,
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="pt-20">
      {/* Simple Header with Animation */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up" ref={headerRef as any}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: "Visit Our Showroom",
                info: "123 Furniture Street",
                subInfo: "Design District, NY 10001",
                action: "Get Directions",
                color: "from-blue-100 to-blue-50",
              },
              {
                icon: Phone,
                title: "Call Us",
                info: "+1 (555) 123-4567",
                subInfo: "Mon-Fri: 9AM-6PM",
                action: "Call Now",
                color: "from-green-100 to-green-50",
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "hello@furnicraft.com",
                subInfo: "We reply within 24 hours",
                action: "Send Email",
                color: "from-purple-100 to-purple-50",
              },
              {
                icon: Calendar,
                title: "Book Consultation",
                info: "Free 1-hour session",
                subInfo: "Available 7 days a week",
                action: "Schedule Now",
                color: "from-orange-100 to-orange-50",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${contact.color} rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl opacity-0 translate-y-8`}
                style={{
                  animation: `fadeInUp 1s ${0.2 + index * 0.1}s forwards`,
                }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <contact.icon className="w-8 h-8 text-primary" />
                </div>
                <NeonText
                  className="text-xl font-bold text-gray-800 mb-4"
                >
                  {contact.title}
                </NeonText>
                <p className="text-gray-800 font-semibold mb-1">
                  {contact.info}
                </p>
                <p className="text-gray-600 text-sm mb-6">{contact.subInfo}</p>
                <button className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center gap-2 mx-auto transition-colors duration-300">
                  {contact.action}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-primary/5 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div
              className="opacity-0"
              style={{ animation: "fadeInLeft 1s 0.3s forwards" }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <NeonText
                    className="text-3xl font-bold text-gray-800 mb-4"
                  >
                    Send us a Message
                  </NeonText>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="custom-design">Custom Design</option>
                        <option value="consultation">
                          Interior Consultation
                        </option>
                        <option value="restoration">
                          Furniture Restoration
                        </option>
                        <option value="delivery">
                          Delivery & Installation
                        </option>
                        <option value="maintenance">Maintenance Service</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, timeline, budget, or any specific requirements..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-4 px-8 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div
              className="opacity-0"
              style={{ animation: "fadeInRight 1s 0.5s forwards" }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl mb-8">
                <div className="h-80 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <NeonText
                      className="text-2xl font-semibold text-gray-800 mb-2"
                    >
                      Interactive Map
                    </NeonText>
                    <p className="text-gray-600">
                      Visit our showroom to see our collections
                    </p>
                    <button className="mt-4 bg-primary text-white px-6 py-2 rounded-xl hover:bg-primary/90 transition-colors duration-300">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <NeonText
                    className="text-2xl font-bold text-gray-800 mb-4"
                  >
                    Business Hours
                  </NeonText>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      day: "Monday - Friday",
                      hours: "9:00 AM - 6:00 PM",
                      isOpen: true,
                    },
                    {
                      day: "Saturday",
                      hours: "10:00 AM - 5:00 PM",
                      isOpen: true,
                    },
                    {
                      day: "Sunday",
                      hours: "12:00 PM - 4:00 PM",
                      isOpen: true,
                    },
                  ].map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-semibold text-gray-800">
                        {schedule.day}
                      </span>
                      <span
                        className={`${
                          schedule.isOpen ? "text-primary" : "text-gray-500"
                        } font-medium`}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                  <p className="text-sm text-gray-600 text-center">
                    <strong>Note:</strong> We're also available for appointments
                    outside regular hours. Contact us to schedule a convenient
                    time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <NeonText
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              Frequently Asked Questions
            </NeonText>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a custom furniture project take?",
                answer:
                  "Custom projects typically take 4-8 weeks from design approval to delivery, depending on complexity and materials.",
              },
              {
                question: "Do you offer free consultations?",
                answer:
                  "Yes! We provide free initial consultations to discuss your needs, style preferences, and budget.",
              },
              {
                question: "What's included in your delivery service?",
                answer:
                  "Our white-glove delivery includes transportation, unpacking, assembly, placement, and removal of packaging materials.",
              },
              {
                question: "Can you work within my budget?",
                answer:
                  "We offer solutions for various budgets and can recommend materials and designs that fit your financial requirements.",
              },
              {
                question: "Do you provide warranties on your furniture?",
                answer:
                  "Yes, all our custom pieces come with a comprehensive warranty covering craftsmanship and materials for up to 5 years.",
              },
              {
                question: "Can I see samples before ordering?",
                answer:
                  "Of course! We provide material samples, color swatches, and can arrange showroom visits to see similar pieces.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 opacity-0"
                style={{
                  animation: `fadeInUp 1s ${0.6 + index * 0.1}s forwards`,
                }}
              >
                <NeonText
                  className="text-lg font-semibold text-gray-800 mb-3"
                >
                  {faq.question}
                </NeonText>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <NeonText
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              What Our Clients Say
            </NeonText>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Jennifer Martinez",
                role: "Homeowner",
                rating: 5,
                comment:
                  "Exceptional service from start to finish. The team understood our vision perfectly and delivered beyond our expectations.",
                project: "Living Room Makeover",
              },
              {
                name: "David Thompson",
                role: "Business Owner",
                rating: 5,
                comment:
                  "Professional, timely, and incredibly skilled. Our office furniture is not only beautiful but also highly functional.",
                project: "Office Furniture Design",
              },
              {
                name: "Sarah Wilson",
                role: "Interior Designer",
                rating: 5,
                comment:
                  "I regularly recommend FurniCraft to my clients. Their attention to detail and quality craftsmanship is unmatched.",
                project: "Custom Dining Set",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0"
                style={{
                  animation: `fadeInUp 1s ${0.8 + index * 0.2}s forwards`,
                }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  <p className="text-primary text-sm font-medium">
                    {testimonial.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
