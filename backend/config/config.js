const dotenv = require('dotenv');
dotenv.config();

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT || 5000,
  clientURL: process.env.CLIENT_URL,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  sendgridApiKey: process.env.SENDGRID_API_KEY,
  server: dev ? 'http://localhost:5000' : 'https://your-production-server.com',
};
