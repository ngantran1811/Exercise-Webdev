const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:productId", getProductById);

router.use(requireAuth);

router.post("/", createProducts);
router.put("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);


module.exports = router;
