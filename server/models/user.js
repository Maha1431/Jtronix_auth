const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Auth', userSchema);
