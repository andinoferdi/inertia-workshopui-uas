"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import NeonText from "@/components/NeonText";
import { Award, Users, Target, Heart, Star } from "lucide-react";

export default function About() {
  const headerRef = useScrollAnimation("animate-fade-in-up", {
    triggerOnce: true,
  });
  const storyRef = useScrollAnimation("animate-fade-in-left", {
    triggerOnce: true,
  });
  const statsRef = useScrollAnimation("animate-fade-in-up", {
    triggerOnce: true,
  });
  const teamRef = useScrollAnimation("animate-fade-in-up", {
    triggerOnce: true,
  });
  const valuesRef = useScrollAnimation("animate-fade-in-up", {
    triggerOnce: true,
  });

  return (
    <div className="pt-20">
      {/* Simple Header with Animation */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up" ref={headerRef as any}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              About Us
            </h1>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              ref={storyRef as any}
              className="opacity-0 -translate-x-8 transition-all duration-700"
            >
              <div className="mb-12">
                <NeonText
                  className="text-4xl font-bold text-gray-800 mb-6"
                >
                  Our Mission
                </NeonText>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  To create exceptional furniture that combines timeless design
                  with modern functionality, while maintaining our commitment to
                  sustainability and craftsmanship excellence.
                </p>
              </div>

              <div>
                <NeonText
                  className="text-4xl font-bold text-gray-800 mb-6"
                >
                  Our Vision
                </NeonText>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leading furniture brand that inspires people to
                  create beautiful, comfortable spaces that reflect their unique
                  personality and lifestyle.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="/placeholder.svg?height=300&width=250"
                    alt="Craftsmanship"
                    className="w-full h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <img
                    src="/placeholder.svg?height=200&width=250"
                    alt="Design Process"
                    className="w-full h-40 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="/placeholder.svg?height=200&width=250"
                    alt="Workshop"
                    className="w-full h-40 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                  />
                  <img
                    src="/placeholder.svg?height=300&width=250"
                    alt="Finished Products"
                    className="w-full h-64 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-primary/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" ref={valuesRef as any}>
            <NeonText
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              Our Core Values
            </NeonText>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our
              commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion",
                description:
                  "We pour our heart into every piece we create, ensuring each item reflects our love for craftsmanship.",
                color: "from-red-100 to-red-50",
              },
              {
                icon: Target,
                title: "Quality",
                description:
                  "Uncompromising attention to detail and use of premium materials in every product we make.",
                color: "from-primary/20 to-primary/10",
              },
              {
                icon: Users,
                title: "Community",
                description:
                  "Building lasting relationships with our customers and supporting local artisans and suppliers.",
                color: "from-blue-100 to-blue-50",
              },
              {
                icon: Award,
                title: "Innovation",
                description:
                  "Continuously evolving our designs and techniques to meet modern lifestyle needs.",
                color: "from-purple-100 to-purple-50",
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${value.color} rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl opacity-0 translate-y-8`}
                style={{
                  animation: `fadeInUp 1s ${0.2 + index * 0.1}s forwards`,
                }}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <NeonText
                  className="text-xl font-semibold text-gray-800 mb-4"
                >
                  {value.title}
                </NeonText>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8" ref={statsRef as any}>
            {[
              { number: "15+", label: "Years of Excellence", icon: Award },
              { number: "10K+", label: "Happy Customers", icon: Users },
              { number: "500+", label: "Unique Designs", icon: Star },
              { number: "50+", label: "Awards Won", icon: Target },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 opacity-0 translate-y-4 border border-gray-100"
                style={{
                  animation: `fadeInUp 1s ${0.2 + index * 0.1}s forwards`,
                }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <NeonText
                  className="text-4xl font-bold text-primary mb-2"
                >
                  {stat.number}
                </NeonText>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" ref={teamRef as any}>
            <NeonText
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              Meet Our Expert Team
            </NeonText>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team of designers, craftspeople, and customer
              service experts work together to bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Lawson Arnold",
                role: "CEO, Founder, Atty.",
                image: "/images/person_1.jpg",
                bio: "With extensive experience in business leadership and legal expertise, Lawson guides our company vision and ensures we deliver excellence in every project.",
                specialties: [
                  "Business Strategy",
                  "Legal Affairs",
                  "Team Leadership",
                ],
              },
              {
                name: "Jeremy Walker",
                role: "Creative Director",
                image: "/images/person_2.jpg",
                bio: "Jeremy brings innovative design thinking and creative vision to every project, ensuring our furniture pieces are both functional and aesthetically remarkable.",
                specialties: [
                  "Creative Design",
                  "Brand Development",
                  "Innovation",
                ],
              },
              {
                name: "Patrik White",
                role: "Master Craftsman",
                image: "/images/person_3.jpg",
                bio: "Patrik combines traditional craftsmanship with modern techniques, ensuring every piece we create meets the highest standards of quality and durability.",
                specialties: [
                  "Woodworking",
                  "Quality Control",
                  "Traditional Crafts",
                ],
              },
            ].map((member, index) => (
              <div
                key={index}
                className="group text-center opacity-0 translate-y-8 transition-all duration-700"
                style={{
                  animation: `fadeInUp 1s ${0.3 + index * 0.2}s forwards`,
                }}
              >
                <div className="relative mb-8 mx-auto w-64 h-64">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <NeonText
                  className="text-2xl font-bold text-gray-800 mb-2"
                >
                  {member.name}
                </NeonText>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <NeonText
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              Our Journey
            </NeonText>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a small workshop to a trusted furniture brand - here's how
              we've grown over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2008",
                title: "The Beginning",
                description:
                  "Started as a small workshop with a passion for quality craftsmanship.",
              },
              {
                year: "2012",
                title: "First Showroom",
                description:
                  "Opened our first showroom and expanded our team of skilled artisans.",
              },
              {
                year: "2016",
                title: "Online Presence",
                description:
                  "Launched our e-commerce platform, reaching customers nationwide.",
              },
              {
                year: "2020",
                title: "Sustainability Focus",
                description:
                  "Committed to eco-friendly materials and sustainable production methods.",
              },
              {
                year: "2023",
                title: "Innovation Hub",
                description:
                  "Established our design innovation center for future furniture concepts.",
              },
            ].map((milestone, index) => (
              <div
                key={index}
                className="flex items-center mb-12 opacity-0"
                style={{
                  animation: `fadeInLeft 1s ${0.2 + index * 0.1}s forwards`,
                }}
              >
                <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center mr-8">
                  <span className="text-white font-bold text-lg">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-grow bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
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
      `}</style>
    </div>
  );
}
