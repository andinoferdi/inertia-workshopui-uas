"use client"

import { useState } from "react"
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Calendar,
  User,
  Tag,
  TrendingUp,
  FileText,
  Clock,
} from "lucide-react"
import AdminSidebar from "@/components/AdminSidebar"
import AdminHeader from "@/components/AdminHeader"

// Mock data
const articles = [
  {
    id: 1,
    title: "10 Tips for Modern Interior Design",
    slug: "10-tips-modern-interior-design",
    author: "John Smith",
    category: "Interior Design",
    status: "published",
    publishDate: "2024-01-25",
    views: 1250,
    comments: 23,
    featured: true,
    excerpt: "Discover the latest trends in modern interior design that will transform your living space.",
    image: "/placeholder.svg?height=60&width=80",
  },
  {
    id: 2,
    title: "Choosing the Right Furniture for Small Spaces",
    slug: "choosing-furniture-small-spaces",
    author: "Sarah Johnson",
    category: "Furniture Guide",
    status: "published",
    publishDate: "2024-01-24",
    views: 890,
    comments: 15,
    featured: false,
    excerpt: "Maximize your small space with smart furniture choices and layout strategies.",
    image: "/placeholder.svg?height=60&width=80",
  },
  {
    id: 3,
    title: "Sustainable Furniture: Eco-Friendly Options",
    slug: "sustainable-furniture-eco-friendly",
    author: "Mike Wilson",
    category: "Sustainability",
    status: "draft",
    publishDate: "2024-01-23",
    views: 0,
    comments: 0,
    featured: false,
    excerpt: "Learn about environmentally conscious furniture options for your home.",
    image: "/placeholder.svg?height=60&width=80",
  },
  {
    id: 4,
    title: "Color Psychology in Home Decoration",
    slug: "color-psychology-home-decoration",
    author: "Emma Davis",
    category: "Design Tips",
    status: "published",
    publishDate: "2024-01-22",
    views: 2100,
    comments: 45,
    featured: true,
    excerpt: "How colors affect mood and atmosphere in your living spaces.",
    image: "/placeholder.svg?height=60&width=80",
  },
  {
    id: 5,
    title: "Budget-Friendly Home Makeover Ideas",
    slug: "budget-friendly-home-makeover",
    author: "David Brown",
    category: "Budget Tips",
    status: "scheduled",
    publishDate: "2024-01-30",
    views: 0,
    comments: 0,
    featured: false,
    excerpt: "Transform your home without breaking the bank with these creative ideas.",
    image: "/placeholder.svg?height=60&width=80",
  },
]

const categories = ["All", "Interior Design", "Furniture Guide", "Sustainability", "Design Tips", "Budget Tips"]
const statuses = ["All", "published", "draft", "scheduled"]

export default function ArticleManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [selectedArticles, setSelectedArticles] = useState<number[]>([])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800 border-green-200"
      case "draft":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "scheduled":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    const matchesStatus = selectedStatus === "All" || article.status === selectedStatus

    return matchesSearch && matchesCategory && matchesStatus
  })

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedArticles(filteredArticles.map((article) => article.id))
    } else {
      setSelectedArticles([])
    }
  }

  const handleSelectArticle = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedArticles([...selectedArticles, id])
    } else {
      setSelectedArticles(selectedArticles.filter((articleId) => articleId !== id))
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Admin Header */}
      <AdminHeader title="Inertia Admin" subtitle="Management Panel" searchPlaceholder="Search articles..." />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <AdminSidebar />

          <div className="lg:col-span-4 space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Article Management</h1>
                <p className="text-gray-600 mt-1">Create, edit, and manage your blog articles</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <Plus className="w-4 h-4" />
                New Article
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">24</p>
                    <p className="text-gray-600 text-sm">Total Articles</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">18</p>
                    <p className="text-gray-600 text-sm">Published</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">4</p>
                    <p className="text-gray-600 text-sm">Drafts</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">12.5K</p>
                    <p className="text-gray-600 text-sm">Total Views</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters and Search */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status === "All" ? "All Status" : status.charAt(0).toUpperCase() + status.slice(1)}
                    </option>
                  ))}
                </select>

                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  More Filters
                </button>
              </div>

              {selectedArticles.length > 0 && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-800 font-medium">{selectedArticles.length} article(s) selected</span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                        Bulk Edit
                      </button>
                      <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors">
                        Delete Selected
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Articles Table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-4 px-6">
                        <input
                          type="checkbox"
                          checked={selectedArticles.length === filteredArticles.length && filteredArticles.length > 0}
                          onChange={(e) => handleSelectAll(e.target.checked)}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                      </th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Article</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Author</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Category</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Status</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Date</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Performance</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredArticles.map((article) => (
                      <tr key={article.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6">
                          <input
                            type="checkbox"
                            checked={selectedArticles.includes(article.id)}
                            onChange={(e) => handleSelectArticle(article.id, e.target.checked)}
                            className="rounded border-gray-300 text-primary focus:ring-primary"
                          />
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <img
                              src={article.image || "/placeholder.svg"}
                              alt={article.title}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div className="min-w-0 flex-1">
                              <h4 className="font-medium text-gray-900 truncate">{article.title}</h4>
                              <p className="text-sm text-gray-500 truncate">{article.excerpt}</p>
                              {article.featured && (
                                <span className="inline-block mt-1 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                                  Featured
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-900">{article.author}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                            <Tag className="w-3 h-3" />
                            {article.category}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(article.status)}`}
                          >
                            {article.status.charAt(0).toUpperCase() + article.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-1 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{article.publishDate}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="text-sm">
                            <div className="flex items-center gap-1 text-gray-600">
                              <Eye className="w-3 h-3" />
                              <span>{article.views}</span>
                            </div>
                            <div className="text-gray-500">{article.comments} comments</div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="View">
                              <Eye className="w-4 h-4 text-gray-500" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Edit">
                              <Edit className="w-4 h-4 text-gray-500" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Delete">
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                              <MoreVertical className="w-4 h-4 text-gray-500" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {filteredArticles.length} of {articles.length} articles
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    2
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
