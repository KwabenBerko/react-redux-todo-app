import React, { Component } from "react";

class AddTodoForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Called!");
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="addTodoForm mt-auto"
        action=""
      >
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
