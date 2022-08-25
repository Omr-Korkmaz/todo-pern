import "./App.css";
import InputTodo from "./components/inputTodo/InputTodo";
import ListTodos from "./components/listTodos/ListTodos";

const App = () => {
  return (
    <section>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <header className="header">
        <h1 className="header__title">TODO WORK</h1>
      </header>
      <article className="App">
        <div className="container">
          <InputTodo />
          <ListTodos />
        </div>
      </article>
    </section>
  );
};

export default App;
