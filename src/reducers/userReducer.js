import * as ACTION_TYPES from '../actions/userAction';
const initState = {
  activeFolderKey: null,
  firstSectionLoadProgress: 0,
};
export default function userReducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.SET_ACTIVE_FOLDER_KET:
      return {
        ...state,
        activeFolderKey: payload,
      };
    case ACTION_TYPES.SET_FIRST_SECTION_LOAD_PROGRESS:
      return {
        ...state,
        firstSectionLoadProgress: payload,
      };
    default:
      return state;
  }
}
