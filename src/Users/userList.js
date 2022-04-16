import React from "react";
import UserCard from "./userCard";
import '../css/style.css'
import {connect, useSelector} from "react-redux";
import Preloader from "../common/Preloader";
import {getNewUsersAction} from "../redux/actions/userAction";
import {deleteAllFriendsAction} from "../redux/actions/friendAction";

function UserList(props) {
    const loading = useSelector(state => {
        const {appReducer} = state
        return appReducer.loading;
    })
    return (
        <div>
            <button type="button" onClick={props.newUsers} className="btn-custom btn-generator">
                Generator users API
            </button>
            {loading ?
                <Preloader/> :
                <div className="cards-container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {props.users && props.users.map((value, id) => <UserCard key={id} user={value}/>)}
                    </div>
                </div>
            }
        </div>
    )
}

function mapStateToProps(state) {
    const {userReducer} = state;
    return {
        users: userReducer.users,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newUsers: () => {
            dispatch(getNewUsersAction())
            dispatch(deleteAllFriendsAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
