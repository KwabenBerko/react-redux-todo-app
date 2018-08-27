import {
  FETCH_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TODOS:
      return [...state, ...action.payload];
    case ADD_TODO:
      return [...state, action.payload];
    case UPDATE_TODO:
      const newState = [...state];
      const index = newState.findIndex(
        todo => todo.todoId === action.payload.todoId
      );
      newState[index] = action.payload;
      return newState;
    case DELETE_TODO:
      const i = state.indexOf(action.payload);
      return [...state.slice(0, i), ...state.slice(i + 1)];
    default:
      return state;
  }
}
