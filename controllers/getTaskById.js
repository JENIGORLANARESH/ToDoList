const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../data/tasks.json");

const getTaskById = (req, res) => {
  const { id } = req.params;
  const tasks = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
};

module.exports = getTaskById;
