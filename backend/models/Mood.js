const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
  email: { type: String, required: true },
  mood: { type: Number, required: true },
  emotions: [String],
  notes: String,
  sleepQuality: { type: String }, // e.g. Poor, Fair, Good, Excellent
  energyLevel: { type: Number }, // 1-5
  stressLevel: { type: Number }, // 1-5
  exercised: { type: String }, // Yes/No
  supportNeeded: { type: String }, // Yes/No/Maybe or text
  labels: {
    mood: String,
    sleepQuality: String,
    exercised: String,
    supportNeeded: String
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Mood', moodSchema);