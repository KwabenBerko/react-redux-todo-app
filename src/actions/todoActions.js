import { FETCH_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./types";
import { delay } from "lodash";
import { v4 as uuid } from "uuid";

export const fetchTodos = () => dispatch => {
  delay(() => {
    dispatch({
      type: FETCH_TODOS,
      payload: [
        {
          todoId: "e5c7e97c-4227-40b8-97d8-bd9ee95084b1",
          text: "Learn redux",
          completed: false
        },
        {
          todoId: "36710120-2d3d-46ca-911b-5a23bdde256a",
          text: "Get a good night sleep",
          completed: true
        },
        {
          todoId: "2bf0d79d-d08c-4d6d-8e64-55e5392a6aeb",
          text: "Water garden",
          completed: false
        }
      ]
    });
  }, 2500);
};

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
  payload: todo
});

export const deleteTodo = todo => ({
  type: DELETE_TODO,
  payload: todo
});
