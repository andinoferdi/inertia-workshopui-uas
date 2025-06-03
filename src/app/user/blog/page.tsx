"use client";

import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import NeonText from "@/components/NeonText";
import { Calendar, User, Clock, ArrowRight, TrendingUp } from "lucide-react";

export default function Blog() {
  const headerRef = useScrollAnimation("animate-fade-in-up", {
    triggerOnce: true,
  });
  const featuredRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);

  const featuredArticle = {
    id: 1,
    title: "The Future of Sustainable Furniture Design",
    excerpt:
      "Exploring how eco-friendly materials and innovative manufacturing processes are reshaping the furniture industry for a more sustainable future.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=800",
    category: "Sustainability",
    tags: ["Eco-Friendly", "Innovation", "Design Trends"],
  };

  const articles = [
    {
      id: 2,
      title: "Maximizing Small Spaces: Smart Furniture Solutions",
      excerpt:
        "Discover innovative furniture pieces and design strategies that make small spaces feel larger and more functional.",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "Interior Design",
      tags: ["Small Spaces", "Functionality", "Storage"],
    },
    {
      id: 3,
      title: "Handcrafted vs. Mass-Produced: Understanding Quality",
      excerpt:
        "Learn the key differences between handcrafted and mass-produced furniture and how to identify quality pieces.",
      author: "Emily Davis",
      date: "December 10, 2024",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "Craftsmanship",
      tags: ["Quality", "Handmade", "Manufacturing"],
    },
    {
      id: 4,
      title: "Color Psychology in Furniture Selection",
      excerpt:
        "How different colors in furniture can affect mood, productivity, and the overall atmosphere of your space.",
      author: "Sarah Johnson",
      date: "December 8, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "Design Tips",
      tags: ["Color Theory", "Psychology", "Interior Design"],
    },
    {
      id: 5,
      title: "Maintaining Your Wooden Furniture: A Complete Guide",
      excerpt:
        "Essential tips and techniques for keeping your wooden furniture looking beautiful and lasting for generations.",
      author: "Michael Chen",
      date: "December 5, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "Maintenance",
      tags: ["Wood Care", "Maintenance", "Longevity"],
    },
    {
      id: 6,
      title: "2024 Furniture Trends: What's Hot This Year",
      excerpt:
        "Stay ahead of the curve with the latest furniture trends that are defining interior design in 2024.",
      author: "Emily Davis",
      date: "December 3, 2024",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "Trends",
      tags: ["2024 Trends", "Modern Design", "Style"],
    },
    {
      id: 7,
      title: "Creating a Productive Home Office Space",
      excerpt:
        "Design tips and furniture recommendations for creating an efficient and comfortable home office environment.",
      author: "Sarah Johnson",
      date: "December 1, 2024",
      readTime: "8 min read",
      image: "/placeholder.svg?height=300&width=400",
      category: "Home Office",
      tags: ["Productivity", "Workspace", "Ergonomics"],
    },
  ];

  const categories = [
    {
      name: "Interior Design",
      count: 24,
      color: "from-primary/20 to-primary/10",
    },
    { name: "Sustainability", count: 18, color: "from-green-100 to-green-50" },
    { name: "Craftsmanship", count: 15, color: "from-blue-100 to-blue-50" },
    { name: "Maintenance", count: 12, color: "from-purple-100 to-purple-50" },
    { name: "Trends", count: 20, color: "from-orange-100 to-orange-50" },
    { name: "Home Office", count: 10, color: "from-pink-100 to-pink-50" },
  ];

  return (
    <div className="pt-20">
      {/* Simple Header with Animation */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up" ref={headerRef as any}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Blog
            </h1>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <NeonText
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              Browse by Category
            </NeonText>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-lg opacity-0`}
                style={{
                  animation: `fadeInUp 1s ${0.2 + index * 0.1}s forwards`,
                }}
              >
                <NeonText
                  className="text-lg font-semibold text-gray-800 mb-2"
                >
                  {category.name}
                </NeonText>
                <p className="text-gray-600 text-sm">
                  {category.count} articles
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-primary/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" ref={featuredRef}>
            <NeonText
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              Featured Article
            </NeonText>
          </div>

          <div
            className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 opacity-0"
            style={{ animation: "fadeInUp 1s 0.3s forwards" }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </div>
                </div>

                <NeonText
                  className="text-3xl font-bold text-gray-800 mb-4"
                >
                  {featuredArticle.title}
                </NeonText>

                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        {featuredArticle.author}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {featuredArticle.date}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 w-fit">
                  Read Full Article
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" ref={articlesRef}>
            <NeonText
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              Latest Articles
            </NeonText>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest insights, tips, and trends in
              furniture design and interior decoration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 opacity-0 translate-y-8"
                style={{
                  animation: `fadeInUp 1s ${0.4 + index * 0.1}s forwards`,
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-primary transition-colors duration-300 cursor-pointer">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {article.author}
                      </span>
                    </div>

                    <button className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center gap-1 transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-12 shadow-2xl">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>

            <NeonText
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              Stay Inspired
            </NeonText>

            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter and get the latest design trends,
              expert tips, and exclusive content delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg"
              />
              <button className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Subscribe Now
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Join 5,000+ design enthusiasts. Unsubscribe anytime.
            </p>
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
      `}</style>
    </div>
  );
}
