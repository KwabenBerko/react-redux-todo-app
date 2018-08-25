import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return <li className="list-group-item">{this.props.todo.text}</li>;
  }
}

export default TodoItem;
