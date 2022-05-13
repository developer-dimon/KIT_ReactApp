import {useState} from "react";
import React from "react";

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <input
                type="text"
                className="input-login"
                name="username"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                className="input-login"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button-login" onClick={() =>handleClick(email, password)}>
                <span>{title}</span>
            </button>
        </div>
    )
}
export default Form;