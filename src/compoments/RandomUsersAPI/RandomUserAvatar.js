import React from "react";

const RandomUserAvatar = (props) => {
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

export default RandomUserAvatar;
