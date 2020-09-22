const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String },
  image: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number },
  sizes: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
