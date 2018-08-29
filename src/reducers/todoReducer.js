import {
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from "../actions/types";

const initialState = {
  isLoading: false,
  todos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: [...state.todos, ...action.payload]
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case UPDATE_TODO:
      const newState = {
        ...state,
        todos: [...state.todos]
      };
      const index = newState.todos.findIndex(
        todo => todo.id === action.payload.id
      );
      newState.todos[index] = action.payload;
      return {
        ...state,
        todos: [...newState]
      };
    case DELETE_TODO:
      const i = state.todos.indexOf(action.payload);
      return {
        ...state,
        todos: [...state.todos.slice(0, i), ...state.todos.slice(i + 1)]
      };
    default:
      return state;
  }
}
