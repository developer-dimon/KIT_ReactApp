import {GET_NEW_USERS, LOADER_OFF, LOADER_ON} from "../types";

export function getNewUsersAction (){
    return async dispatch => {
        dispatch(loaderOn())
        const response = await fetch("https://randomuser.me/api/?results=10");
        const jsonData = await response.json();
        dispatch({
            type: GET_NEW_USERS,
            data: jsonData.results
        })
        dispatch(loaderOff())
    }
}
export const loaderOn = () => ({type: LOADER_ON})
export const loaderOff = () => ({type: LOADER_OFF})