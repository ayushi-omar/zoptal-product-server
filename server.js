const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000;

const url = process.env.MONGOURI || "mongodb://127.0.0.1:27017/product-manager";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
});
mongoose.connection.on("error", (err) => {
  console.log("Error in mongo", err);
});

require("./models/Product");

app.use(express.json());
app.use(require("./routes/Product"));

app.listen(PORT, () => {
  console.log("server is running", PORT);
});
