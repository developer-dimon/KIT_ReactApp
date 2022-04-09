import { ADD_FRIEND, DELETE_FRIEND } from '../types'

const initialState = {
    friends: {}
}

export const friendsReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                friends: {}
            };
        case DELETE_FRIEND:
            return {
                ...state,
                friends: {}
            }
        default:
            return state;
    }

}
