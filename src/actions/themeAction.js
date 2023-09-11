export const SET_THEME_LIST='SET_THEME_LIST';
export const SET_SELECTED_THEME='SET_SELECTED_THEME';
export function setThemeList(payload){
    return {type:SET_THEME_LIST,payload};
}   
export function setSelectedTheme(payload){
    return {type:SET_SELECTED_THEME,payload};
}