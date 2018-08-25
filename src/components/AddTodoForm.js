import React, { Component } from "react";

class AddTodoForm extends Component {
  render() {
    return (
      <form className="addTodoForm mt-auto" action="">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="addTodo"
            placeholder="Add a todo"
          />
        </div>
      </form>
    );
  }
}

export default AddTodoForm;
