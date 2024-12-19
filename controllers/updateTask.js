const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../data/tasks.json");

const readData = () => JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
const writeData = (data) =>
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

const updateTask = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!["pending", "in-progress", "completed"].includes(status)) {
    return res.status(400).json({ error: "Invalid status value" });
  }

  const tasks = readData();
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks[taskIndex].status = status;
  writeData(tasks);

  res.json(tasks[taskIndex]);
};

module.exports = updateTask;
