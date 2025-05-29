import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"

// Mock data for blog post
const getBlogPost = (id: string) => {
  const posts = {
    "1": {
      id: "1",
      title: "First Time Home Owner Ideas",
      content: `
        <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        
        <p>Integer convallis volutpat dui quis scelerisque. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
        
        <h3>Getting Started with Interior Design</h3>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque. Sed dapibus pulvinar nibh tempor porta.</p>
        
        <p>Cras ac leo purus. Mauris quis diam velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        
        <h3>Choosing the Right Furniture</h3>
        <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
      `,
      author: "Kristin Watson",
      date: "Dec 19, 2021",
      image: "/images/post-1.jpg",
      category: "Interior Design",
      readTime: "5 min read",
    },
    "2": {
      id: "2",
      title: "How To Keep Your Furniture Clean",
      content: `
        <p>Maintaining your furniture is essential for both aesthetics and longevity. Regular cleaning and proper care can extend the life of your pieces significantly.</p>
        
        <h3>Daily Maintenance Tips</h3>
        <p>Start with simple daily habits that can make a big difference. Dust your furniture regularly with a microfiber cloth, and address spills immediately to prevent staining.</p>
        
        <h3>Deep Cleaning Techniques</h3>
        <p>For deeper cleaning, use appropriate products for each material type. Wood furniture requires different care than upholstered pieces or metal fixtures.</p>
        
        <p>Always test cleaning products on an inconspicuous area first to ensure they won't damage the finish or fabric.</p>
      `,
      author: "Robert Fox",
      date: "Dec 15, 2021",
      image: "/images/post-2.jpg",
      category: "Maintenance",
      readTime: "7 min read",
    },
    "3": {
      id: "3",
      title: "Small Space Furniture Apartment Ideas",
      content: `
        <p>Living in a small space doesn't mean compromising on style or functionality. With the right furniture choices and arrangement, you can create a beautiful and practical living environment.</p>
        
        <h3>Multi-Functional Furniture</h3>
        <p>Invest in pieces that serve multiple purposes. Ottoman storage, expandable dining tables, and sofa beds are excellent examples of furniture that maximizes utility in small spaces.</p>
        
        <h3>Vertical Storage Solutions</h3>
        <p>Think vertically when it comes to storage. Wall-mounted shelves, tall bookcases, and hanging organizers can help you utilize every inch of available space.</p>
        
        <h3>Light Colors and Mirrors</h3>
        <p>Use light colors and strategic mirror placement to create the illusion of more space. This simple trick can make your apartment feel significantly larger.</p>
      `,
      author: "Kristin Watson",
      date: "Dec 12, 2021",
      image: "/images/post-3.jpg",
      category: "Small Spaces",
      readTime: "6 min read",
    },
  }

  return posts[id as keyof typeof posts] || posts["1"]
}

const relatedPosts = [
  { id: "2", title: "How To Keep Your Furniture Clean", image: "/images/post-2.jpg" },
  { id: "3", title: "Small Space Furniture Apartment Ideas", image: "/images/post-3.jpg" },
  { id: "1", title: "Modern Living Room Design Tips", image: "/images/post-1.jpg" },
]

export default function BlogDetail({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/user/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-primary text-white px-3 py-1 rounded-full text-xs">{post.category}</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">{post.title}</h1>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  lineHeight: "1.8",
                  fontSize: "1.1rem",
                  color: "#4a5568",
                }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-600 font-medium">Tags:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Interior Design", "Furniture", "Home Decor", "Tips"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Info */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-gray-800 mb-4">About the Author</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{post.author}</h4>
                    <p className="text-gray-600 text-sm">Interior Design Expert</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Passionate about creating beautiful and functional living spaces. Sharing tips and insights from years
                  of experience in interior design.
                </p>
              </div>

              {/* Related Posts */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-800 mb-6">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts
                    .filter((p) => p.id !== post.id)
                    .slice(0, 3)
                    .map((relatedPost) => (
                      <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="flex gap-3 group">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          width={80}
                          height={60}
                          className="w-20 h-15 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-sm font-medium text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
