import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from "./types";
import axios from "axios";
import { v4 as uuid } from "uuid";

export const fetchTodos = () => dispatch => {
  dispatch({
    type: FETCH_TODOS
  });

  axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=4")
    .then(response => {
      if (response.status === 200) {
        dispatch({
          type: FETCH_TODOS_SUCCESS,
          payload: response.data
        });
      }
    })
    .catch(err => {
      console.log("Errored");
      console.log(err);
    });
};

export const addTodo = title => dispatch => {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      id: uuid(),
      title,
      userId: uuid(),
      completed: false
    })
    .then(response => {
      if (response.status === 201) {
        dispatch({
          type: ADD_TODO,
          payload: response.data
        });
      }
    })
    .catch(err => {
      console.log("Errored");
      console.log(err);
    });
};

export const updateTodo = todo => ({
  type: UPDATE_TODO,
  payload: todo
});

export const deleteTodo = todo => dispatch => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
    .then(response => {
      if (response.status === 200) {
        dispatch({
          type: DELETE_TODO,
          payload: todo
        });
      }
    })
    .catch(err => {
      console.log("Error");
      console.log(err);
    });
};
