import {EDIT_STREAM} from './actions/types';

// Sample code!!!
// Object-based approach
const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      // 1st object based approach
      // const newState = {...state};
      // newState[action.payload.id] = action.payload;
      // return newState;

      // 2nd object based approach
      return {...state, [action.payload.id]: action.payload};
    default:
      return state;
  }
};
