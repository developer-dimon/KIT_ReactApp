import React from "react";
import UserCard from "./userCard";

const UserList = (props) => {
  return (
    <div class="user-list">
      {props.users && props.users.map((u) => <UserCard user={u} />)}
    </div>
  );
};

export default UserList;
