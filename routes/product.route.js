const express = require("express");
const Product = require("../modles/product.modle.js");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts); //All products
router.get("/:id", getProduct); //Single Product
router.post("/", createProduct);
router.put("/:id", updateProduct); //update Product
router.delete("/:id", deleteProduct);

module.exports = router;
