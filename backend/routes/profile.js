const express = require('express');
const User = require('../models/User');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('courses');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/me', authMiddleware, async (req, res) => {
  const { username, email } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.user.id, { username, email }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
