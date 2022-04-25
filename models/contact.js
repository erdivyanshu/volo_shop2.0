//schema for Product reg
const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  nameC: {
    type: String,
    required: true,
  },
  emailC: {
    type: String,
    required: true,
    unique: true,
  },
  localityC: {
    type: String,
  },
  queryC: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("contact", ContactSchema, "contacts");
