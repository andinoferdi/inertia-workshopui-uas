import Image from "next/image"

const team = [
  {
    name: "Lawson Arnold",
    position: "CEO, Founder, Atty.",
    image: "/images/person_1.jpg",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    name: "Jeremy Walker",
    position: "CEO, Founder, Atty.",
    image: "/images/person_2.jpg",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    name: "Patrik White",
    position: "CEO, Founder, Atty.",
    image: "/images/person_3.jpg",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
  {
    name: "Kathryn Ryan",
    position: "CEO, Founder, Atty.",
    image: "/images/person_4.jpg",
    description:
      "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">Our Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <div key={index} className="text-center space-y-6">
              <div>
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.position}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                <a href="#" className="text-sm font-semibold text-gray-800 hover:text-primary inline-block">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
