import axios from "axios";
import { setThemeList } from "./themeAction";

export const SET_CATALOGUE= "SET_CATALOGUE";
export function setCatalogue(payload) {
    return { type: SET_CATALOGUE, payload };
}
export function getConfig() {
    return async (dispatch, getState) => {
        const res= await axios.get('/data/config.json');
        if(res.status===200){
            dispatch(setCatalogue(res.data.catalogue));
            dispatch(setThemeList(res.data.theme));
        }
    };
}