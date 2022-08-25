import React, {useEffect, useState } from "react";
import axios from "axios";
import './listTodos.css'

import EditTodo from "../editTodo/EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:4000/api/todos/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.todo_id !== id));
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const getTodos = () => {
    axios
      .get("http://localhost:4000/api/todos")

      .then((res) => setTodos(res.data))

      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <section className="todo-container">

     
          {todos.map((todo) => (
            <div className="todo">
            <ul key={todo.todo_id}>
                  <li>{todo.description}</li>
                  <li>{todo.title}</li>
                  <li>
                      <EditTodo todo={todo} />
                  </li>
              </ul><button
                  onClick={() => deleteTodo(todo.todo_id)}
              >
                      Delete
                  </button>
                  </div>       
 
  ))};
  </section>
          );
};

export default ListTodos;
