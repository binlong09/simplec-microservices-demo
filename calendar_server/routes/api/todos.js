const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Todo Model
const Todo = require('../../models/todo');

// @route   GET api/todos
// @desc     GET All Todo Items
// @access  Private
router.get('/', auth, (req, res) => {
  Todo.find( { _user: res.locals.user.id })
    .sort({ date: -1 })
    .then(todos => res.json(todos));
});

// @route   POST api/todos
// @desc     Create a todo item
// @access  Private
router.post('/', auth, (req, res) => {
  const newTodo = new Todo({
    _user: res.locals.user.id,
    title: req.body.title,
    estimated_time_done: req.body.estimated_time_done,
    description: req.body.description
  });

  newTodo.save().then(todo => res.json(todo));
});

// @route   DELETE api/todos/:id
// @desc     Delete a todo item
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => todo.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})

module.exports = router;