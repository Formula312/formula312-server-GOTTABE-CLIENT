const mongoose = require("mongoose");

const vendorsSchema = mongoose.Schema({
  id: Number,
  title: String,
  location: String,
  fullAddress: String,
  image: String,
  rate: Number,
  promoRate: Number,
  basePrice: Number,
  promoContentTop: String,
  promoContentBottom: String,
  serviceTypes: Object,
});

module.exports = mongoose.model("vendors-services", vendorsSchema);
