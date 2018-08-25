import React, { Component } from "react";
import AddTodoForm from "./components/AddTodoForm";
import store from "./store";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper d-flex flex-column">
          <header>Todooos</header>
          <TodoList />
          <AddTodoForm />
        </div>
      </Provider>
    );
  }
}

export default App;
