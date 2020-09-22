const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

module.exports = router;

router.post("/createProduct", async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/products", async (req, res) => {
  try {
    let products = await Product.find({});
    res.send(products);
  } catch (e) {
    res.status(400).send("err");
  }
});

router.put("/products/:id", async (req, res) => {
  let updateKeys = Object.keys(req.body);
  try {
    const product = await Product.findById(req.params.id);
    updateKeys.forEach((update) => (product[update] = req.body[update]));
    await product.save();
    // const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    await product.remove();
    res.send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});
