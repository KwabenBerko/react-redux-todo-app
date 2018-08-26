import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./types";
import { v4 as uuid } from "uuid";

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    todoId: uuid(),
    text,
    completed: false
  }
});

export const updateTodo = todo => ({
  type: UPDATE_TODO,
  payload: {
    todo
  }
});

export const deleteTodo = todo => ({
  type: DELETE_TODO,
  payload: {
    todo
  }
});
