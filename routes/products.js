const express = require("express");
const router = express.Router();
const Products = require("../modules/Product");

router.get("/products", async (req, res) => {
  try {
    const products = await Products.find().sort({ date: -1 });
    res.json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

router.get("/product/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: "There is No product" });
    }
    res.json(product);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post Not Found" });
    }
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
