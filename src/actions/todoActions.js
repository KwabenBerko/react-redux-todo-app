import { ADD_TODO } from "./types";
import { v4 as uuid } from "uuid";

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    todoId: uuid(),
    text,
    completed: false
  }
});
