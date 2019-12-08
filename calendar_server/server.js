const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

require('dotenv').config();

const app = express();

// Body parser Middleware
app.use(express.json());


const db = 'mongodb://calendar_db/calendar'
console.log(process.env.MONGO_DB_URI)


// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/todos', require('./routes/api/todos'));
app.use('/api/events', require('./routes/api/events'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`));