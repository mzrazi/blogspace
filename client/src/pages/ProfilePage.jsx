import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { User, Mail, Edit, Trash2, Plus, Calendar } from "lucide-react";

const ProfilePage = () => {
  const { user } = useAuth();
  const [userBlogs, setUserBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchUserBlogs = async () => {
      try {
        const response = await axios.get(`${baseUrl}/users/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
          },
        });
        setUserBlogs(response.data.blogs);
      } catch (error) {
        console.error("Error fetching user blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (user) {
      fetchUserBlogs();
    }
  }, [user]);

  const handleDeleteBlog = async (blogId) => {
    if (!window.confirm("Are you sure you want to delete this blog post?")) {
      return;
    }

    try {
      await axios.delete(`${baseUrl}/blogs/${blogId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt_token")}`,
        },
      });
      setUserBlogs((prev) => prev.filter((b) => b._id !== blogId));
    } catch (error) {
      console.error(
        "Error deleting blog:",
        error.response?.data || error.message
      );
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* User Info */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center space-x-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <User className="h-12 w-12 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <div className="flex items-center space-x-2 text-gray-600 mt-2">
                <Mail className="h-4 w-4" />
                <span>{user.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Blogs Section */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                My Blog Posts
              </h2>
              <Link
                to="/create"
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>New Post</span>
              </Link>
            </div>
          </div>

          <div className="p-6">
            {isLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading...</p>
              </div>
            ) : userBlogs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No blogs yet.</p>
                <Link
                  to="/create"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  <span>Create your first blog post</span>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {userBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Link
                          to={`/blogs/${blog._id}`}
                          className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                        >
                          {blog.title}
                        </Link>
                        <p className="text-gray-600 mt-2 line-clamp-2">
                          {blog.content}
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mt-3">
                          <Calendar className="h-4 w-4" />
                          <span>Created {formatDate(blog.createdAt)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Link
                          to={`/edit/${blog._id}`}
                          className="flex items-center space-x-1 px-3 py-1 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                        >
                          <Edit className="h-3 w-3" />
                          <span>Edit</span>
                        </Link>
                        <button
                          onClick={() => handleDeleteBlog(blog._id)}
                          className="flex items-center space-x-1 px-3 py-1 text-sm text-red-600 border border-red-600 rounded-md hover:bg-red-50 transition-colors"
                        >
                          <Trash2 className="h-3 w-3" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
