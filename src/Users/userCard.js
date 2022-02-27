import React from "react";
import UserAvatar from "./userAvatar";

const UserCard = (props) => {
  return (
    <div class="wrapper">
      <div class="card">
        <UserAvatar src={props.user.picture.large} width={100} height={100} />
        <div class="card-body">
          <p class="card-text">
            <span>Name:</span> {props.user.name.first} {props.user.name.last}
          </p>
          <p class="card-text">
            <span>From:</span> {props.user.location.city}
          </p>
          <p class="card-text">
            <span>Phone:</span> {props.user.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
