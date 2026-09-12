const User = require("../models/userModel");

// GET all users
const getAllUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });

  res.status(200).json(users);
};

// CREATE a user
const createUser = async (req, res) => {
  const { name, username, password, address, age } = req.body;

  const user = await User.create({
    name,
    username,
    password,
    address,
    age,
  });

  res.status(200).json(user);
};

// GET a user by ID
const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  res.status(200).json(user);
};

// DELETE a user
const deleteUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  res.status(200).json(user);
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  deleteUser,
};