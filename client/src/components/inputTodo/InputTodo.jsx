import React, {useState } from "react";
import axios from "axios";
import './inputTodo.css'

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
    <section className="input-container">
      
      <form className="form"  onSubmit={onSubmitForm}>
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
        <button >Add</button>
      </form>
    </section>
  );
};

export default InputTodo;
