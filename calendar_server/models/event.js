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
    required: false
  },
  description: {
    type: String
  },
  start: {
    type: Date,
    required: false
  },
  end: {
    type: Date,
    required: false
  },
  allDay: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

module.exports = Event = mongoose.model('event', Eventchema);
