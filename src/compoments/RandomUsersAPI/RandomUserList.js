import React from "react";
import RandomUserCard from "./RandomUserCard";
import '../../css/style.css'
import {connect, useSelector} from "react-redux";
import Preloader from "../../common/Preloader";
import {getNewRandomUsersAction} from "../../redux/actions/randomUserAction";
import {deleteAllFriendsAction} from "../../redux/actions/friendAction";

function RandomUserList(props) {
    const loading = useSelector(state => {
        const {appReducer} = state
        return appReducer.loading;
    })
    return (
        <div>
            <button type="button" onClick={props.newUsers} className="btn-custom btn-generator">
                Generate users
            </button>
            {loading ?
                <Preloader/> :
                <div className="cards-container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-3">
                        {props.users && props.users.map((value, id) => <RandomUserCard key={id} user={value}/>)}
                    </div>
                </div>
            }
        </div>
    )
}

function mapStateToProps(state) {
    const {randomUserReducer} = state;
    return {
        users: randomUserReducer.users,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        newUsers: () => {
            dispatch(getNewRandomUsersAction())
            dispatch(deleteAllFriendsAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomUserList);
