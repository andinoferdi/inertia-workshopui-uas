import Image from "next/image"
import Link from "next/link"

const posts = [
  { title: "First Time Home Owner Ideas", author: "Kristin Watson", date: "Dec 19, 2021", image: "/images/post-1.jpg" },
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
  { title: "First Time Home Owner Ideas", author: "Kristin Watson", date: "Dec 19, 2021", image: "/images/post-1.jpg" },
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
  { title: "First Time Home Owner Ideas", author: "Kristin Watson", date: "Dec 19, 2021", image: "/images/post-1.jpg" },
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

export default function BlogGrid() {
  return (
    <div className="py-28">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="group">
              <div className="mb-5">
                <Link href={`/user/blog/${index + 1}`}>
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="rounded-3xl w-full h-auto group-hover:opacity-70 transition-opacity"
                  />
                </Link>
              </div>
              <div className="px-4">
                <Link href={`/user/blog/${index + 1}`}>
                  <h3 className="text-gray-800 font-semibold text-lg mb-2 group-hover:text-gray-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <div className="text-gray-600 text-sm">
                  <span>
                    by <span className="font-semibold">{post.author}</span>
                  </span>
                  <span> on <span className="font-semibold">{post.date}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
