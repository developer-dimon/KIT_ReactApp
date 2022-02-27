import React from "react";
import UserAvatar from "./userAvatar";

const UserCard = (props) => {
    return (
            <div className="card">
                <UserAvatar src={props.user.picture.large} width={200} height={200}/>
                <div className="card-info">
                <ul>
                    <li id="Surname">Фамилия Имя: {props.user.name.first} {props.user.name.last}</li>
                    <li id="Address">Город: {props.user.location.city}</li>
                    <li id="Email">Email: {props.user.email}</li>
                    <li id="Phone">Телефон: {props.user.phone}</li>
                </ul>
                </div>
                {/*    <p className="card-text">*/}
                {/*        <span>Name:</span> {props.user.name.first} {props.user.name.last}*/}
                {/*    </p>*/}
                {/*    <p className="card-text">*/}
                {/*        <span>From:</span> {props.user.location.city}*/}
                {/*    </p>*/}
                {/*    <p className="card-text">*/}
                {/*        <span>Phone:</span> {props.user.phone}*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
    );
};

export default UserCard;
