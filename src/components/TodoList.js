import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTodos } from "../actions/todoActions";
import LoadingIcon from "./LoadingIcon";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <LoadingIcon isLoading={this.props.isLoading} />
        <ul className="list-group">
          {this.props.todos.map(todo => (
            <TodoItem key={todo.todoId} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos.todos,
  isLoading: state.todos.isLoading
});

export default connect(
  mapStateToProps,
  { fetchTodos }
)(TodoList);
