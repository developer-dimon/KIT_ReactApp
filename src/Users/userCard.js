import React from "react";
import UserAvatar from "./userAvatar";
import BestFriendsList from "./BestFriendsList";


const UserCard = (props) => {
    console.log(props.user)
    return (
        <div className="col">
            <div className="card">
                <UserAvatar src={props.user.picture.large} width={200} height={200}/>
                <div className="card-info">
                    <ul>
                        <li id="Surname">Фамилия Имя: {props.user.name.first} {props.user.name.last}</li>
                        <li id="Address">Город: {props.user.location.city}</li>
                        <li id="Email">Email: {props.user.email}</li>
                        <li id="Phone">Телефон: {props.user.phone}</li>
                        <BestFriendsList userId={props.user.login.uuid}/>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default UserCard;
