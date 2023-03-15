const Stripe = require("stripe");
const express = require("express");
const app = express();

const stripe = Stripe(
  "sk_test_51LaViqJqBNYq7xofQ7tn9IJ2Zy5mIrwaBM4d8cDWnvvFAN8Jhhe8qPKx8XzsN6s8FsxrCSDzNtiD1gW2UBWZafP200FWIrn0BB"
);

app.post("/payment", async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "KG Aggregate - 1",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

module.exports = app;
