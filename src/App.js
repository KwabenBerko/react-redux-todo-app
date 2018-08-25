import React, { Component } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="wrapper d-flex flex-column">
        <header>Todooos</header>
        <TodoList />
        <AddTodoForm />
      </div>
    );
  }
}

export default App;
