const fetch = require("node-fetch");
const express = require("express");

const app = express();

// Body parser Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "search" });
});

app.get("/search", async (req, res) => {
  try {
    // we don't want to await we want both request to run at the same time
    const calendarPromise = fetch("http://calendar_service:5001/api/events/search");
    const todosPromise = fetch("http://todos_services:5000/api/todos/search");
    const promises = [calendarPromise, todosPromise];
    const [calendarResponse, todosResponse] = await Promise.all(promises);
    const calendarJson = await calendarResponse.json();
    const todosJson = await todosResponse.json();

    res.json({ calendar: calendarJson, todos: todosJson });
  } catch (e) {
    res.status(500).json(e);
  }
});

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`));
