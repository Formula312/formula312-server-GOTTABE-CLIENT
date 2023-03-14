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

app.put("/vendor/:id", async (request, response) => {
  try {
    const updatedVendor = await vendorsSchema.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
        runValidators: true,
        context: "query",
      }
    );

    response.status(200).json({ success: true, data: updatedVendor });
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/vendor/:id", async (request, response) => {
  try {
    const vendor = await vendorsSchema.findByIdAndDelete(request.params.id);

    if (!vendor) response.status(404).send("No vendor found");
    response.status(200).send(vendor);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
