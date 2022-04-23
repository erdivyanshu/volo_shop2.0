//schema for Product reg
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  Pname: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    },
  ShopOwner: {
    type: String,
    required: true,
    },
  dis: {
    type: String,
    },
  
  date: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Product", ProductSchema, "Products");
