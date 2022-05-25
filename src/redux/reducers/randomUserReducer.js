import { GET_NEW_RANDOM_USERS } from '../types'

const initialState = {
    users: []
}

export const randomUserReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_NEW_RANDOM_USERS:
            return {
                ...state,
                users: action.data
            }
        default:
            return state
    }

}