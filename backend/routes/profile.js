const express = require('express');
const Profile = require('../models/Profile');
const router = express.Router();


// Save profile (upsert by email, flat fields)
router.post('/', async (req, res) => {
  try {
    const { email, username, gender, firstName, lastName, university, year } = req.body;
    if (!email || !username || !gender || !firstName || !lastName || !university || !year) {
      return res.status(400).json({ error: 'All fields (email, username, gender, firstName, lastName, university, year) are required.' });
    }
    const updatedProfile = await Profile.findOneAndUpdate(
      { email },
      req.body,
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(201).json({ message: 'Profile saved successfully', profile: updatedProfile });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get profile by email (or all profiles if no query)
router.get('/', async (req, res) => {
  try {
    const { email } = req.query;
    let profiles;
    if (email) {
      profiles = await Profile.find({ email });
    } else {
      profiles = await Profile.find();
    }
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
