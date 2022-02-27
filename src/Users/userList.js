import React from "react";
import UserCard from "./userCard";
import '../css/style.css'
const UserList = (props) => {
  return (
      <div className="cards-container">
      {props.users && props.users.map((u) => <UserCard user={u} />)}
    </div>
  );
};

export default UserList;
