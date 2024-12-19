const express = require("express");
const bodyParser = require("body-parser");
const tasksRouter = require("./routes/tasks");

const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.use("/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
