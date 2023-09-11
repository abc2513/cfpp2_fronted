import * as ACTION_TYPES from '../actions/catalogueAction.js';
const initState = {
};
export default function catalogueReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SET_CATALOGUE:
      return payload;
    default: return state;
  }
}