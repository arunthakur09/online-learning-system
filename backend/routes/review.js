const express = require('express');
const Course = require('../models/Course');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Add a review to a course
router.post('/:courseId/reviews', authMiddleware, async (req, res) => {
  const { rating, comment } = req.body;
  
  try {
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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
