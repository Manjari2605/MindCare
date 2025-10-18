const express = require('express');
const Mood = require('../models/Mood');
const router = express.Router();

// Save mood entry
router.post('/', async (req, res) => {
  try {
    const { email, mood, emotions, notes, sleepQuality, energyLevel, stressLevel, exercised, supportNeeded } = req.body;
    if (!email || mood === undefined) {
      return res.status(400).json({ error: 'Email and mood are required' });
    }
    const moodEntry = new Mood({
      email,
      mood,
      emotions,
      notes,
      sleepQuality,
      energyLevel,
      stressLevel,
      exercised,
      supportNeeded
    });
    await moodEntry.save();
    res.status(201).json({ message: 'Mood entry saved successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all mood entries for a user
router.get('/', async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) return res.status(400).json({ error: 'Email is required' });
    const moods = await Mood.find({ email }).sort({ createdAt: -1 });
    res.json(moods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
