import {ADD_FRIEND, DELETE_ALL_FRIENDS, DELETE_FRIEND} from '../types'

const initialState = {
    friends: {}
}

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            const newFriends = state.friends
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
            state.friends[action.userId] = updateFriends
            return {
                ...state,
                friends: state.friends
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
