const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../data/tasks.json");

const getAllTasks = (req, res) => {
  const tasks = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  res.json(tasks);
};

module.exports = getAllTasks;
