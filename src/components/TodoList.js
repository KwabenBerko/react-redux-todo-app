import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.todos.map(todo => (
          <TodoItem key={todo.todoId} todo={todo} />
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
