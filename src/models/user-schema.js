const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Pastikan email ada untuk login
  password: { type: String, required: true }, // Cukup satu password field
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;

