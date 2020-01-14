import {EDIT_STREAM} from './actions/types';

// Sample code!!!
// Array-based approach
const streamReducer = (state = [], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map (stream => {
        if (stream.id === action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      });
    default:
      return state;
  }
};
