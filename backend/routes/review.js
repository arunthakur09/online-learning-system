const express = require('express');
const Course = require('../models/Course');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/:courseId/reviews', authMiddleware, async (req, res) => {
  const { rating, comment } = req.body;
  const course = await Course.findById(req.params.courseId);
  if (!course) {
    return res.status(404).json({ message: 'Course not found' });
  }

  const review = {
    user: req.user._id,
    rating,
    comment,
  };

  course.reviews.push(review);
  await course.save();
  res.status(201).json({ message: 'Review added' });
});

module.exports = router;
