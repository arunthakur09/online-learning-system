const Review = require('../models/Review');

// Create a new review
exports.createReview = async (req, res) => {
  const { rating, comment } = req.body;
  const { courseId } = req.params;
  const userId = req.user.id;
  
  try {
    const review = new Review({ rating, comment, course: courseId, user: userId });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
