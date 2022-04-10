import React from "react";
import '../css/modal.css'
import {connect, useDispatch, useSelector} from "react-redux";
import {addFriendAction} from "../redux/actions/friendAction";
import BestFriendCard from "./BestFriendCard";

function BestFriendsList(props) {
    const users = useSelector(state => {
        const {userReducer} = state
        return userReducer.users;
    })
    // const friends = useSelector(state => {
    //     const {friendsReducer} = state
    //     return friendsReducer.friends;
    // })

    return (
        <div>
            <button type="button" className="button-17" data-bs-toggle="modal"
                    data-bs-target={"#" + props.user.username}>
                Друзья ({props.friends[props.user.uuid] ? Object.keys(props.friends[props.user.uuid]).length : 0})
            </button>
            <div className="modal fade" id={`${props.user.username}`} tabIndex="-1" aria-labelledby="FriendModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="FriendModalLabel">Друзья</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {/*{console.log(friends[props.user.uuid])}*/}
                                {props.friends[props.user.uuid] ? Object.keys(props.friends[props.user.uuid])
                                    .map(friendKey => <li className='friend-li'>
                                        <BestFriendCard user={props.user} friend={props.friends[props.user.uuid][friendKey]}/>
                                    </li>) : <p>У пользователя нет друзей</p>}
                            </ul>

                        </div>
                        <div className="modal-footer">
                            <select className="custom-select add-friend" size="5">
                                {users.map(user => <option onClick={() =>
                                    props.addFriend(props.user.uuid, user)} value={user.login.uuid}>{user.name.last}</option>)}
                            </select>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
function mapStateToProps(state) {
    const {friendsReducer} = state;
    return {
        friends: friendsReducer.friends,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addFriend: (userId, friend) => {
            dispatch(addFriendAction(userId, friend))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BestFriendsList);