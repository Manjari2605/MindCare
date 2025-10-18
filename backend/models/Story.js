const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  email: { type: String },
  username: { type: String },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Story', storySchema);
