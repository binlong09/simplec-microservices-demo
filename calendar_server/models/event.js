const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const Eventchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  _event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: false
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  start: {
    type: Date,
    required: true
  },
  allDay: {
    type: Boolean,
    default: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = Event = mongoose.model('event', Eventchema);
