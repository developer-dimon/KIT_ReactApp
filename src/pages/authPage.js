import React from "react";
import SignUp from "../compoments/User/SignUp";
import Login from "../compoments/User/Login";

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