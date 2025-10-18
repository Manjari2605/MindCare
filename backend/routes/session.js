const express = require('express');
const Session = require('../models/Session');
const router = express.Router();

// Book a session
router.post('/', async (req, res) => {
  try {
    const { userEmail, counselorName, date, time, type } = req.body;
    if (!userEmail || !counselorName || !date || !time || !type) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const session = new Session({ userEmail, counselorName, date, time, type });
    await session.save();
    res.status(201).json({ message: 'Session booked successfully', session });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all sessions for a user
router.get('/', async (req, res) => {
  try {
    const { userEmail } = req.query;
    if (!userEmail) return res.status(400).json({ error: 'userEmail is required' });
    const sessions = await Session.find({ userEmail }).sort({ createdAt: -1 });
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
