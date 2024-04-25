const {
    product
} = require("../controllers")

const express = require("express");
const router = express.Router();

router.get("/getall", product.getProducts);
router.get("product/:id", product.getProduct);
router.post("/create", product.createProduct);
router.put("update/:id", product.updateProduct);
router.delete("delete/:id", product.deleteProduct);

module.exports = router;
