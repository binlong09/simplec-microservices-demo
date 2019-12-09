const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  uuid: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  }
})

module.exports = User = mongoose.model('user', UserSchema);