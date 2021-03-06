const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors())

// Body parser Middleware
app.use(express.json());

const db = process.env.MONGO_DB_URI

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/events', require('./routes/api/events'));

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`));