import * as ACTION_TYPES from '../actions/userAction';
const initState = {
    activeFolderKey: null,
};
export default function userReducer(state = initState, action) {
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPES.SET_ACTIVE_FOLDER_KET:
            return {
                ...state,
                activeFolderKey: payload,
            };
        default:
            return state;
    }
}
