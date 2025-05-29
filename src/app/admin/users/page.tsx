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
  Users,
  UserCheck,
  UserX,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Shield,
} from "lucide-react"
import AdminSidebar from "@/components/AdminSidebar"
import AdminHeader from "@/components/AdminHeader"

// Mock data
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    role: "customer",
    status: "active",
    joinDate: "2024-01-15",
    lastLogin: "2024-01-25",
    orders: 12,
    totalSpent: 1250.0,
    location: "New York, USA",
    avatar: "JD",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 (555) 234-5678",
    role: "customer",
    status: "active",
    joinDate: "2024-01-14",
    lastLogin: "2024-01-24",
    orders: 8,
    totalSpent: 890.0,
    location: "Los Angeles, USA",
    avatar: "JS",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    phone: "+1 (555) 345-6789",
    role: "admin",
    status: "active",
    joinDate: "2023-12-01",
    lastLogin: "2024-01-25",
    orders: 0,
    totalSpent: 0,
    location: "Chicago, USA",
    avatar: "MJ",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    phone: "+1 (555) 456-7890",
    role: "customer",
    status: "inactive",
    joinDate: "2024-01-10",
    lastLogin: "2024-01-20",
    orders: 3,
    totalSpent: 320.0,
    location: "Miami, USA",
    avatar: "SW",
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@example.com",
    phone: "+1 (555) 567-8901",
    role: "customer",
    status: "suspended",
    joinDate: "2024-01-05",
    lastLogin: "2024-01-18",
    orders: 1,
    totalSpent: 89.0,
    location: "Seattle, USA",
    avatar: "DB",
  },
]

const roles = ["All", "customer", "admin", "moderator"]
const statuses = ["All", "active", "inactive", "suspended"]

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200"
      case "inactive":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "suspended":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "moderator":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "customer":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === "All" || user.role === selectedRole
    const matchesStatus = selectedStatus === "All" || user.status === selectedStatus

    return matchesSearch && matchesRole && matchesStatus
  })

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedUsers(filteredUsers.map((user) => user.id))
    } else {
      setSelectedUsers([])
    }
  }

  const handleSelectUser = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedUsers([...selectedUsers, id])
    } else {
      setSelectedUsers(selectedUsers.filter((userId) => userId !== id))
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Admin Header */}
      <AdminHeader title="Furni Admin" subtitle="Management Panel" searchPlaceholder="Search users..." />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <AdminSidebar />

          <div className="lg:col-span-4 space-y-6">
            {/* Page Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                <p className="text-gray-600 mt-1">Manage customer accounts and user permissions</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                <Plus className="w-4 h-4" />
                Add User
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2,891</p>
                    <p className="text-gray-600 text-sm">Total Users</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">2,456</p>
                    <p className="text-gray-600 text-sm">Active Users</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <UserX className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">234</p>
                    <p className="text-gray-600 text-sm">Inactive Users</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                    <p className="text-gray-600 text-sm">Admins</p>
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
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role === "All" ? "All Roles" : role.charAt(0).toUpperCase() + role.slice(1)}
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

              {selectedUsers.length > 0 && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-800 font-medium">{selectedUsers.length} user(s) selected</span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                        Bulk Edit
                      </button>
                      <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors">
                        Suspend Selected
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left py-4 px-6">
                        <input
                          type="checkbox"
                          checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                          onChange={(e) => handleSelectAll(e.target.checked)}
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                      </th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">User</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Contact</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Role</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Status</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Join Date</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Orders</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Total Spent</th>
                      <th className="text-left py-4 px-6 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6">
                          <input
                            type="checkbox"
                            checked={selectedUsers.includes(user.id)}
                            onChange={(e) => handleSelectUser(user.id, e.target.checked)}
                            className="rounded border-gray-300 text-primary focus:ring-primary"
                          />
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-medium">
                              {user.avatar}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{user.name}</h4>
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <MapPin className="w-3 h-3" />
                                {user.location}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Mail className="w-3 h-3" />
                              {user.email}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-gray-600">
                              <Phone className="w-3 h-3" />
                              {user.phone}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getRoleColor(user.role)}`}
                          >
                            {user.role === "admin" && <Shield className="w-3 h-3" />}
                            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(user.status)}`}
                          >
                            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Calendar className="w-3 h-3" />
                            {user.joinDate}
                          </div>
                          <div className="text-xs text-gray-500">Last: {user.lastLogin}</div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="font-medium text-gray-900">{user.orders}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-medium text-gray-900">${user.totalSpent.toFixed(2)}</span>
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
                  Showing {filteredUsers.length} of {users.length} users
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
