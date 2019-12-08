const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Event Model
const Event = require('../../models/event');

// @route   GET api/events
// @desc     GET All Events
// @access  Private
router.get('/', auth, (req, res) => {
  var page = parseInt(req.query.page) || 1;
  page -= 1;
  var limit = parseInt(req.query.limit) || 3;
  query = { _user: res.locals.user.id }
  Event.find(query)
    .sort({ date: -1 })
    .skip(page * limit)
    .limit(limit)
    .exec((err, event) => {
      if (err) {
        return res.json(err);
      }
      Event.count(query).exec((count_error, count) => {
        if (err) {
          return res.json(count_error);
        }
        return res.json({
          total: count,
          page: page,
          per_page: limit,
          pageSize: event.length,
          events: event
        });
      });
    });
});

// @route   POST api/events
// @desc     Create an event item
// @access  Private
router.post('/', auth, (req, res) => {
  const newEvent = new Event({
    _user: res.locals.user.id,
    _event: req.body._event,
    title: req.body.title,
    start: req.body.start,
    allDay: req.body.allDay,
    description: req.body.description
  });

  newEvent.save().then(event => res.json(event));
});

// @route   DELETE api/todos/:id
// @desc     Delete an event
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Event.findById(req.params.id)
    .then(event => event.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})

module.exports = router;