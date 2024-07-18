const express = require('express');
const Course = require('../models/Course');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new course
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, content, videoUrl, quizzes } = req.body;
  try {
    const course = new Course({
      title,
      description,
      content,
      videoUrl,
      quizzes,
    });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
