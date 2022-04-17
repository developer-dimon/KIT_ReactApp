import React from "react";
import UserAvatar from "./userAvatar";
import BestFriendsList from "./BestFriendsList";


const UserCard = (props) => {
    return (
        <div className="col">
            <div className="card">
                <UserAvatar src={props.user.picture.large} width={200} height={200}/>
                <div className="card-info">
                    <ul>
                        <li className='li-card' id="Surname">Фамилия Имя: {props.user.name.first} {props.user.name.last}</li>
                        <li className='li-card' id="Address">Город: {props.user.location.city}</li>
                        <li className='li-card' id="Email">Email: {props.user.email}</li>
                        <li className='li-card' id="Phone">Телефон: {props.user.phone}</li>
                        <BestFriendsList user={props.user.login}/>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default UserCard;
