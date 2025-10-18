const express = require('express');
const Story = require('../models/Story');
const router = express.Router();

// Create a new story
router.post('/', async (req, res) => {
  try {
    const { name, content } = req.body;
    if (!name || !content) {
      return res.status(400).json({ error: 'Name and content are required' });
    }
    const story = new Story({ username: name, content });
    await story.save();
    res.status(201).json({ message: 'Story shared successfully', story });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all stories
router.get('/', async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
