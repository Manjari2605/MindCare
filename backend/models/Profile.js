const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: String,
  gender: String,
  firstName: String,
  lastName: String,
  university: String,
  year: String
});

module.exports = mongoose.model('Profile', profileSchema);
