import React from "react";

const Button = (props) => {
  return (
    <button type="button" className="btn btn-dark" onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
