const pool = require("../db");

const createTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await pool.query(
      "SELECT * FROM todo ORDER BY todo_id ASC"
    );
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getAtodo = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

const updateTodo = async (req, res) => {
  const id = parseInt(req.params.id);
  const { description } = req.body;
  try {
    const update = await pool.query(
      "UPDATE todo SET description=$1 WHERE todo_id = $2",
      [description, id]
    );
    res.send(`Todo modified with ID: ${id}`);
  } catch (err) {
    console.error(err.message);
  }
};

const deleteTodo = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const update = await pool.query("DELETE from todo WHERE todo_id = $1", [
      id,
    ]);
    res.send(`Todo deleted with ID: ${id}`);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = { createTodo, getAllTodos, getAtodo, updateTodo, deleteTodo };
