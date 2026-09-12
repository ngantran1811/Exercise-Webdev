const mongoose = require("mongoose");
const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve users" });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, username, password, address, age } = req.body;

    const user = await User.create({
      name,
      username,
      password,
      address,
      age,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to create user" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findByIdAndDelete(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user" });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  deleteUser,
};