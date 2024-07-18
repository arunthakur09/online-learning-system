const mongoose = require('mongoose');
const argon2 = require('argon2');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    this.password = await argon2.hash(this.password);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.comparePassword = function (password) {
  return argon2.verify(this.password, password);
};

module.exports = mongoose.model('User', userSchema);
