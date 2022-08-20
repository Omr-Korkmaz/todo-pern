const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/todos", async (req, res) => {
    try {
      const { description } = req.body;
      const newTodo = await pool.query(
        "INSERT INTO todolist (description) VALUES($1) RETURNING *",
        [description]
      );
  
      res.json(newTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

  router.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todolist");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});



router.get("/todos/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await pool.query("SELECT * FROM todolist WHERE todo_id = $1", [
        id
      ]);
  
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

  module.exports = router;