import React, { useState } from "react";
import axios from "axios";
import "./editTodo.css";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);
  const [title, setTitle] = useState(todo.title);

  //edit description function

  function updateDescription(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:4000/api/todos/${todo.todo_id}`, {
        description,
        title,
      })
      .then((response) => {
        setDescription(response.data.description);
        setTitle(response.data.title);
        window.location = "/";
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  return (
    <>
    
      <button
        class="link-1"
        type="button"
      >
        Edit
      </button>

      <div id="modal-opened">
        <div>
          <div>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <button type="button" onClick={(e) => updateDescription(e)}>
            Edit
          </button>
          <button
            type="button"
            data-dismiss="modal"
            onClick={() => {
              setTitle(todo.title);
              setDescription(todo.description);
            }}
          >
            Close
          </button>

          <button
            type="button"
            onClick={() => {
              setTitle(todo.title);
              setDescription(todo.description);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
