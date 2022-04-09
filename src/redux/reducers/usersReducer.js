import { GET_NEW_USERS } from '../types'

const initialState = {
    users: []
}

export const userReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_NEW_USERS:
            return {
                ...state,
                users: action.data
            }
        default:
            return state
    }

}