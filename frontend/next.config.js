/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  env: {
    API_URL: process.env.API_URL,
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    CLIENT_URL: process.env.CLIENT_URL,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    JWT_SECRET: process.env.JWT_SECRET,
  },
};

module.exports = nextConfig;
