//schema for Product reg
const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema({
  ShopName: {
    type: String,
    required: true,
  },
  ShopType: {
    type: String,
    required: true,
    },
  Contact: {
    type: String,
    required: true,
    },
  locality: {
    type: String,
    },
    shopdis: {
        type: String,
        },
  date: {
    type: Date,
    default: Date.now,
  },
});


module.exports = mongoose.model("Shop", ShopSchema, "Shops");
