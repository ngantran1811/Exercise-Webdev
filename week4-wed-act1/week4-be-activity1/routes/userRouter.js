const express = require("express");

const {
  getAllUsers,
  createUser,
  getUserById,
  deleteUser,
} = require("../controllers/usersController");

const router = express.Router();

// GET all users
router.get("/", getAllUsers);

// GET one user
router.get("/:id", getUserById);

// POST new user
router.post("/", createUser);

// DELETE user
router.delete("/:id", deleteUser);

module.exports = router;