"use client";

import Image from "next/image";
import NeonText from "./NeonText";

const team = [
  {
    name: "Lawson Arnold",
    position: "CEO, Founder, Atty.",
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
    position: "Creative Director",
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
    position: "Master Craftsman",
    image: "/images/person_3.jpg",
    bio: "Patrik combines traditional craftsmanship with modern techniques, ensuring every piece we create meets the highest standards of quality and durability.",
    specialties: [
      "Woodworking",
      "Quality Control",
      "Traditional Crafts",
    ],
  },
  {
    name: "Kathryn Ryan",
    position: "Customer Experience Lead",
    image: "/images/person_4.jpg",
    bio: "Kathryn ensures every customer interaction exceeds expectations, from initial consultation to final delivery and ongoing support.",
    specialties: [
      "Customer Service",
      "Project Management",
      "Client Relations",
    ],
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center opacity-0 translate-y-8 transition-all duration-700"
              style={{
                animation: `fadeInUp 1s ${0.3 + index * 0.2}s forwards`,
              }}
            >
              <div className="relative mb-8 mx-auto w-full max-w-64">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <NeonText
                className="text-xl font-bold text-gray-800 mb-2"
              >
                {member.name}
              </NeonText>
              <p className="text-primary font-semibold mb-4">{member.position}</p>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
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
      `}</style>
    </section>
  );
}
