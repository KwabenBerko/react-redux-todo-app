import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case UPDATE_TODO:
      let currentState = state;
      let index = currentState.indexOf(action.payload.todo);
      if (index > -1) {
        currentState.splice(index, 1);
        return [...currentState, action.payload.todo];
      }
      return state;
    case DELETE_TODO:
      if (state.indexOf(action.payload.todo) > -1) {
        state.splice(state.indexOf(action.payload.todo), 1);
        return [...state];
      }
      return state;
    default:
      return state;
  }
}
