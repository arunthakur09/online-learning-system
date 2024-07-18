const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Generate JWT Token
exports.generateToken = (userId) => {
  return jwt.sign({ id: userId }, config.jwtSecret, { expiresIn: '1h' });
};

// Verify JWT Token
exports.verifyToken = (token) => {
  return jwt.verify(token, config.jwtSecret);
};
