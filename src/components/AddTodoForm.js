import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

class AddTodoForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const title = this.title.value;
    if (title.trim() !== "") {
      this.props.addTodo(title);
    }
    this.title.value = "";
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
            ref={node => (this.title = node)}
            type="text"
            name="addTodo"
            placeholder="Add a todo"
          />
        </div>
      </form>
    );
  }
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default connect(
  null,
  { addTodo }
)(AddTodoForm);
