const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctAnswer: String,
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  videoUrl: String,
  quizzes: [questionSchema],
  reviews: [reviewSchema],
});

module.exports = mongoose.model('Course', courseSchema);
