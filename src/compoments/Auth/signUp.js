import React, {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import {register} from "../../redux/actions/authActions";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};
const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};
const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
const SignUp = () => {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const message = useSelector(state => {
        const {authReducer} = state;
        return authReducer.message;
    });
    const dispatch = useDispatch();
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleRegister = (e) => {
        e.preventDefault();
        setSuccessful(false);
        form.current.validateAll();
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(username, email, password))
                .then(() => {
                    setSuccessful(true);
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };
    return (
        <div className="signup">
            <label className="label-login" htmlFor="chk" aria-hidden="true">Sign up</label>
            <Form onSubmit={handleRegister} ref={form}>
                {!successful && (
                    <div>
                        <Input
                            type="text"
                            className="input-login"
                            name="username"
                            value={username}
                            placeholder="Username"
                            onChange={onChangeUsername}
                            validations={[required, vusername]}
                        />
                        <Input
                            type="text"
                            className="input-login"
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={onChangeEmail}
                            validations={[required, validEmail]}
                        />
                        <Input
                            type="password"
                            className="input-login"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={onChangePassword}
                            validations={[required, vpassword]}
                        />
                        <button className="button-login">Sign Up</button>

                    </div>)}
                {message && (
                    <div className="form-group">
                        <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <CheckButton style={{display: "none"}} ref={checkBtn}/>
            </Form>
        </div>

    )

};

export default SignUp;