const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const sendEmail = require('../utils/sendEmail');
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  const { courseId, courseTitle, coursePrice, userEmail } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: courseTitle,
        },
        unit_amount: coursePrice * 100,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`,
  });

  sendEmail(userEmail, 'Payment Successful', `You have successfully purchased ${courseTitle}`);

  res.json({ id: session.id });
});

module.exports = router;