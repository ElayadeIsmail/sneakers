const express = require("express");
const router = express.Router();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

router.post("/payment", async (req, res) => {
  const { total, token } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const result = await stripe.charges.create({
      amount: total * 100,
      currency: "usd",
      customer: customer.id,
      receipt_email: token.email,
      description: "purchase of Sneakers",
    });

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
