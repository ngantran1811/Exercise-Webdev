const Product = require("../models/productModel");
const mongoose = require("mongoose");

// Get all products
const getAllProducts = async (req, res) => {
    try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve products" });
  }
};

// Post/products
const createProducts = async (req, res) => {
  try {
    const user_id = req.user._id;
    const newProduct = new Product({
      ...req.body,
      user_id,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get/productId
const getProductById = async (req,res) => {
    const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const product = await Product.findById(productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve product" });
  }
}

// Put/productId
const updateProduct = async (req,res) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productId },
      { ...req.body },
      { returnDocument: "after" }
    );
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update " });
  };
}

// Delete/productId
const deleteProduct = async (req,res) => {
    const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: productId });
    if (deletedProduct) {
      res.status(204).send(); 
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product" });
  }
};


module.exports = {
    getAllProducts,
    getProductById,
    createProducts, 
    updateProduct,
    deleteProduct,
}
