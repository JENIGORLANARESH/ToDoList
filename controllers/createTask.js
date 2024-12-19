const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../data/tasks.json");

const readData = function () {
  const fileContent = fs.readFileSync(DATA_FILE, "utf-8");
  const parsedData = JSON.parse(fileContent);
  return parsedData;
};

const writeData = function (data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(DATA_FILE, jsonData);
};

const createTask = function (req, res) {
  const title = req.body.title;
  const description = req.body.description;

  if (
    title === undefined ||
    title.trim() === "" ||
    description === undefined ||
    description.trim() === ""
  ) {
    const errorResponse = {
      error: "Title and description are required",
    };
    res.status(400).json(errorResponse);
    return;
  }

  const tasks = readData();

  let newId;
  if (tasks.length > 0) {
    const lastTask = tasks[tasks.length - 1];
    newId = lastTask.id + 1;
  } else {
    newId = 1;
  }

  const newTask = {
    id: newId,
    title: title,
    description: description,
    status: "pending",
  };

  tasks.push(newTask);

  writeData(tasks);
  res.status(201).json(newTask);
};

module.exports = createTask;
