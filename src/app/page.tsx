import Hero from "@/components/Hero"
import ProductSection from "@/components/ProductSection"
import WhyChooseUs from "@/components/WhyChooseUs"
import WeHelp from "@/components/WeHelp"
import PopularProduct from "@/components/PopularProduct"
import TeamSection from "@/components/TeamSection"
import TestimonialSection from "@/components/TestimonialSection"
import BlogSection from "@/components/BlogSection"

export default function Home() {
  return (
    <>
      <Hero
        title="Modern Interior Design Studio"
        subtitle="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
        showButtons={true}
      />
      <ProductSection />
      <WhyChooseUs />
      <WeHelp />
      <PopularProduct />
      <TeamSection />
      <TestimonialSection />
      <BlogSection />
    </>
  )
}
