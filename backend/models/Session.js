const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  counselorName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, default: 'confirmed' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);
