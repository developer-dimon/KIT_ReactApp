import React from "react";
import UserAvatar from "./userAvatar";
import {useDispatch} from "react-redux";
import {deleteFriendsAction} from "../redux/actions/friendAction";

function BestFriendCard(props) {
    const dispatch = useDispatch()
    const deleteFriend = (userId, friendId) => {
        dispatch(deleteFriendsAction(userId, friendId))
    }
    return (
        <div>
            <div className='friend-item'>
                <div className="friend-info">
                    <UserAvatar src={props.friend.picture.thumbnail} width={40} height={40}/>
                    <p className='friend-info-text'>{props.friend.name.last} {props.friend.name.first}</p>
                </div>
                <div onClick={() => deleteFriend(props.user.uuid, props.friend.login.uuid)}
                     className="friend-delete" data-bs-toggle="tooltip" data-bs-placement="top"
                     title="Удалить друга">&times;</div>
            </div>
            <hr/>
        </div>
    )
}


export default BestFriendCard;