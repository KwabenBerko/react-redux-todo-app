import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTodo, deleteTodo } from "../actions/todoActions";

class TodoItem extends Component {
  handleUpdate = todo => {
    this.props.updateTodo({
      ...todo,
      completed: !this.props.todo.completed
    });
  };

  handleDelete = todo => {
    this.props.deleteTodo(todo);
  };

  render() {
    return (
      <li className="list-group-item d-flex">
        <span
          className={this.props.todo.completed ? "completed" : null}
          onClick={this.handleUpdate.bind(null, this.props.todo)}
        >
          {this.props.todo.text}
        </span>
        <span
          className="fa fa-times ml-auto"
          onClick={this.handleDelete.bind(null, this.props.todo)}
        />
      </li>
    );
  }
}

export default connect(
  null,
  { updateTodo, deleteTodo }
)(TodoItem);
