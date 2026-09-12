const mongoose = require("mongoose");
const Blog = require("../models/blogModel");


const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve blogs" });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, body, author } = req.body;

    const blog = await Blog.create({
      title,
      body,
      author,
    });

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Failed to create blog" });
  }
};

const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid blog ID" });
    }

    const blog = await Blog.findById(id);

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve blog" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid blog ID" });
    }

    const blog = await Blog.findByIdAndDelete(id);

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog" });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  deleteBlog,
};