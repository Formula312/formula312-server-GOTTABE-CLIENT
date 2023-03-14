const mongoose = require("mongoose");

const Services = mongoose.Schema({
  interior: [String],
  exterior: [String],
});

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
  serviceTypes: Services,
});

module.exports = mongoose.model("vendors-services", vendorsSchema);
