import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    title: "First Time Home Owner Ideas",
    author: "Kristin Watson",
    date: "Dec 19, 2021",
    image: "/images/post-1.jpg",
  },
  {
    title: "How To Keep Your Furniture Clean",
    author: "Robert Fox",
    date: "Dec 15, 2021",
    image: "/images/post-2.jpg",
  },
  {
    title: "Small Space Furniture Apartment Ideas",
    author: "Kristin Watson",
    date: "Dec 12, 2021",
    image: "/images/post-3.jpg",
  },
]

export default function BlogSection() {
  return (
    <div className="py-20 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <h2 className="text-gray-800 text-4xl lg:text-5xl font-bold">Recent Blog</h2>
          <Link href="/user/blog" className="text-gray-800 font-semibold hover:text-gray-600 transition-colors">
            View All Posts
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {posts.map((post, index) => (
            <div key={index} className="group">
              <div className="mb-6">
                <Link href="#" className="block">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="rounded-3xl w-full h-auto group-hover:opacity-70 transition-opacity"
                  />
                </Link>
              </div>
              <div className="px-4 space-y-3">
                <Link href="#" className="block">
                  <h3 className="text-gray-800 font-semibold text-lg group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <div className="text-gray-600 text-sm">
                  <span>by </span>
                  <span className="font-semibold">{post.author}</span>
                  <span> on </span>
                  <span className="font-semibold">{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
