const express = require("express");
const vendorsSchema = require("../schemas/vendors-schema");
const app = express();

app.get("/vendors", async (request, response) => {
  const vendors = await vendorsSchema.find({});

  try {
    response.send(vendors);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/vendor", async (request, response) => {
  const vendor = new vendorsSchema(request.body);

  try {
    await vendor.save();
    response.send(vendor);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
