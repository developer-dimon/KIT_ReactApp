import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {login} from "../../redux/actions/authActions";
import {Navigate} from "react-router";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const message = useSelector(state => {
        const {authReducer} = state;
        return authReducer.message;
    });
    const isLoggedIn = useSelector(state => {
        const {authReducer} = state;
        return authReducer.isLoggedIn;
    });
    const dispatch = useDispatch();
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(username, password))
                .then(() => {
                    // props.history.push("/profile");
                    // window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };
    if (isLoggedIn) {
        return <Navigate to="/profile" replace/>;
    }
    return (
        <div className="login">
            <label className="label-login" htmlFor="chk" aria-hidden="true">Login</label>
            <Form onSubmit={handleLogin} ref={form}>
                <Input
                    type="text"
                    className="input-login"
                    name="username"
                    value={username}
                    placeholder="Email"
                    onChange={onChangeUsername}
                    validations={[required]}
                />
                <Input
                    type="password"
                    className="input-login"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={onChangePassword}
                    validations={[required]}
                />

                <div className="form-group">
                    <button className="button-login" disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Login</span>
                    </button>
                </div>
                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <CheckButton style={{display: "none"}} ref={checkBtn}/>
            </Form>
        </div>
    );
};
export default Login;