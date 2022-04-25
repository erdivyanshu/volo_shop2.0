//schema for user reg
const mongoose = require("mongoose");


const CustomerSchema = new mongoose.Schema({
  name1: {
    type: String,
    required: true,
  },
  email1: {
    type: String,
    required: true,
    unique: true,
  },
  identity1:{
      type:String,
      required:true,
      unique:true,
  },
  password1: {
    type: String,
    required: true,
  },
  locality1: {
    type: String,
    required: true,
  },
  mobile1: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("customer", CustomerSchema, "customers");
