import {LOADER_ON, LOADER_OFF} from "../types";

const initialState = {
    loading: false
}

export const appReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOADER_ON:
            return {
                ...state,
                loading: true
            }
        case LOADER_OFF:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}