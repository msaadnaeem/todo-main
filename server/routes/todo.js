const express = require("express");
const router = express.Router();
const {
  createTodo,
  getAllTodos,
  getAtodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");

router.route("/").post(createTodo).get(getAllTodos);
router.route("/:id").get(getAtodo).put(updateTodo).delete(deleteTodo);
module.exports = router;
