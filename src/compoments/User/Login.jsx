import React from "react";
import {useDispatch} from "react-redux";
import Form from "./Form";
import {setUser} from "../../redux/slices/userSlice";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router";


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');

            })
        .catch(() => alert("Invalid login or password"))
    };
    return (
        <div className="login">
            <label className="label-login" htmlFor="chk" aria-hidden="true">Login</label>
            <Form title="Login" handleClick={handleLogin}/>
        </div>
    );
};
export default Login;