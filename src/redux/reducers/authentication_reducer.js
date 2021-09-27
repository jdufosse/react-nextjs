import * as types from '../types';

const INITIAL_STATE = {};

export default function authenticationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_AUTHENTICATION:
      return { ...state };

    default:
      break;
  }

  return state;
}