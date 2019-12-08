const fetch = require("node-fetch");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "search" });
});

app.get("/search", async (req, res) => {
  try {
    // we don't want to await we want both request to run at the same time
    const calendarPromise = fetch("http://calendar:5001/api/events/search");
    const todosPromise = fetch("http://todos:5000/api/todos/search");
    const promises = [calendarPromise, todosPromise];
    const [calendarResponse, todosResponse] = await Promise.all(promises);
    const calendarJson = await calendarResponse.json();
    const todosJson = await todosResponse.json();

    res.json({ video: calendarJson, book: todosJson });
  } catch (e) {
    res.status(500).json(e);
  }
});

module.exports = app;
