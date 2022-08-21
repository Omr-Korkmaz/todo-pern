import React, {useState } from "react";
import axios from "axios";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);


  // const onSubmitForm = async e => {
  //   e.preventDefault();
  //   try {
  //     const body = { description };
  //     const response = await fetch("http://localhost:4000/api/todos", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body)
  //     });

  //     window.location = "/";
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  function onSubmitForm(e) {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/todos", {
        description, title, completed
    
      })
      .then((response) => {
        setDescription(response.data.description);
        setTitle(response.data.title)
        setCompleted(response.data.completed);
        window.location = "/";
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  return (
    <>
      <h1 className="text-center mt-5">Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
         <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
