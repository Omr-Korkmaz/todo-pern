const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/todos", async (req, res) => {
    try {
      const { description, title } = req.body;
      const newTodo = await pool.query(
        "INSERT INTO todolist (description, title) VALUES($1, $2) RETURNING *",
        [description, title]
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


router.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todolist SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

router.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todolist WHERE todo_id = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});


  module.exports = router;