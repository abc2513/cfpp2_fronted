import * as ACTION_TYPES from '../actions/themeAction.js';
const initState = {
  selectedTheme: 'blue',
  themeList: {},
};
export default function themeReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SET_THEME_LIST:
      return { ...state, themeList: payload };
    case ACTION_TYPES.SET_SELECTED_THEME:
      return { ...state, selectedTheme: payload };
    default: return state;
  }
}