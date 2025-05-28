import BlogGrid from "@/components/BlogGrid"

export default function Blog() {
  return (
    <div className="pt-20">
      <div className="relative py-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center">Blog</h1>
        </div>
      </div>
      <BlogGrid />
    </div>
  )
}
