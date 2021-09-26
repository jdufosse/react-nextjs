import * as types from '../types';

const INITIAL_STATE = [];

export default function prismicReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_PRISMIC:
      state[action.payload.uid] = action.payload;
      break;

    default:
      break;
  }
  console.log('prismic reducer - ', state);
  return state;
}