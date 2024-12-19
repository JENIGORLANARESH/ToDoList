const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../data/tasks.json");

const readData = () => JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
const writeData = (data) =>
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

const deleteTask = (req, res) => {
  const { id } = req.params;
  const tasks = readData();
  const newTasks = tasks.filter((task) => task.id !== parseInt(id));

  if (tasks.length === newTasks.length) {
    return res.status(404).json({ error: "Task not found" });
  }

  writeData(newTasks);
  res.status(204).send();
};

module.exports = deleteTask;
