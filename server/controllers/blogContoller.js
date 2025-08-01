import Blog from "../models/Blog.js";
import mongoose from "mongoose";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name");
    res.status(200).json({ message: "Blogs fetched successfully", blogs });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "name");
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.status(200).json({ messsage: "success", blog });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const blog = new Blog({
      title,
      content,
      author: req.user.id,
    });
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (blog.author.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    blog.title = req.body.title || blog.title;
    blog.content = req.body.content || blog.content;
    const updated = await blog.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error", err });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (blog.author.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    await blog.deleteOne();
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
