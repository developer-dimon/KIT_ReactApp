import {ADD_FRIEND, DELETE_FRIEND, DELETE_ALL_FRIENDS} from "../types";



export function addFriendAction(userId, friend){
    return {
        type: ADD_FRIEND,
        data : friend,
        userId : userId,
        friendId: friend.login.uuid
    }
}

export function deleteFriendsAction(userId, friendId){
    return{
        type:DELETE_FRIEND,
        userId: userId,
        friendId:friendId,
    }
}

export function deleteAllFriendsAction(){
    return{
        type:DELETE_ALL_FRIENDS,
        friends: {}
    }
}