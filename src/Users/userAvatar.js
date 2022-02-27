import React from "react";

const UserAvatar = (props) => {
  return (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
      alt="Avatar"
      className="round"
    />
  );
};

export default UserAvatar;
