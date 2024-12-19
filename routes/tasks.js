const express = require("express");
const createTask = require("../controllers/createTask");
const getAllTasks = require("../controllers/getAllTasks");
const getTaskById = require("../controllers/getTaskById");
const updateTask = require("../controllers/updateTask");
const deleteTask = require("../controllers/deleteTask");

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
