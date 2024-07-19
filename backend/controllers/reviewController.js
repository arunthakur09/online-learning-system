const Review = require('../models/Review');
const Course = require('../models/Course');

// Create a new review
exports.createReview = async (req, res) => {
  const { rating, comment } = req.body;
  const { courseId } = req.params;
  const userId = req.user.id;
  
  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const review = new Review({ rating, comment, course: courseId, user: userId });
    await review.save();

    // Add review to the course
    course.reviews.push(review);
    await course.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
