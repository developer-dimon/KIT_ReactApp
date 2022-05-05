import React from "react";
import SignUp from "../compoments/Auth/signUp";
import Login from "../compoments/Auth/login";

function AuthPage() {
    return (
        <>
            <div className="container-login">
                <input type="checkbox" id="chk" aria-hidden="true"/>
                <SignUp/>
                <Login/>
            </div>
        </>
    )
}

export default AuthPage;