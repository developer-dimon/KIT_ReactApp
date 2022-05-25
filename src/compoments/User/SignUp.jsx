import React from "react";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import {setUser} from "../../redux/slices/userSlice";


const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }));
            navigate('/');

        })
            .catch(() => alert("Invalid user!"))
    }
    return (
        <div className="signup">
            <label className="label-login" htmlFor="chk" aria-hidden="true">Sign up</label>
            <Form title="Sign Up" handleClick={handleRegister}/>
        </div>

    )

};

export default SignUp;