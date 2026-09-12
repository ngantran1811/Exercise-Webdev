const Blog = require("../models/blogModel");

 // GET /blogs
 const getAllBlogs = async (req, res) => {
 const blogs = await Blog.find({}).sort({ createdAt: -1 });
 res.status(200).json(blogs);
 };
// Similarly, implement createBlog, getBlogById, deleteBlog