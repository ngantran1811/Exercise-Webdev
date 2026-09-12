const express = require("express");

const {
  getAllBlogs,
  createBlog,
  getBlogById,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

// GET all blogs
router.get("/", getAllBlogs);

// GET one blog
router.get("/:id", getBlogById);

// POST a new blog
router.post("/", createBlog);

// DELETE a blog
router.delete("/:id", deleteBlog);

module.exports = router;