import React from "react";
import '../css/style.css'
const Button = (props) => {
  return (
    <button type="button" className="btn btn-generator" onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
