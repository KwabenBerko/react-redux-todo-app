import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTodo, deleteTodo } from "../actions/todoActions";

class TodoItem extends Component {
  handleUpdate = (todo, e) => {
    todo.completed = !todo.completed;
    this.props.updateTodo(todo);
  };

  handleDelete = (todo, e) => {
    this.props.deleteTodo(todo);
  };

  render() {
    return (
      <li
        className={
          "list-group-item d-flex completed" +
          (this.props.todo.completed ? " completed" : "")
        }
        onClick={this.handleUpdate.bind(this, this.props.todo)}
      >
        {this.props.todo.text}
        <p className="ml-auto">
          <span
            className="fa fa-times"
            onClick={this.handleDelete.bind(this, this.props.todo)}
          />
        </p>
      </li>
    );
  }
}

export default connect(
  null,
  { updateTodo, deleteTodo }
)(TodoItem);
