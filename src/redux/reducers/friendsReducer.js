import {ADD_FRIEND, DELETE_ALL_FRIENDS, DELETE_FRIEND} from '../types'

const initialState = {
    friends: {}
}

export const friendsReducer = (state = initialState, action) => {
    const newFriends = JSON.parse(JSON.stringify(state.friends))
    switch (action.type) {
        case ADD_FRIEND:
            if (!newFriends[action.userId]) {
                newFriends[action.userId] = {}
                newFriends[action.userId][action.friendId] = action.data
            } else {
                newFriends[action.userId][action.friendId] = action.data
            }

            return {
                ...state,
                friends: newFriends
            };
        case DELETE_FRIEND:
            let updateFriends = {}
            for (let key in state.friends[action.userId]){
                if (key !== action.friendId){
                    updateFriends[key] = state.friends[action.userId][key]
                }
            }
            newFriends[action.userId] = updateFriends
            return {
                ...state,
                friends: newFriends
            }
        case DELETE_ALL_FRIENDS:
            return {
                ...state,
                friends: {}
            }
        default:
            return state;
    }

}
