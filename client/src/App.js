import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

const App = () => {
  return (
    <section>
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
