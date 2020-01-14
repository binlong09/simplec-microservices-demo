const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TodoSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  estimated_time_done: {
    type: Number
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = Todo = mongoose.model('todo', TodoSchema);