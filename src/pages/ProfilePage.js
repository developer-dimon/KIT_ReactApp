import React from "react";
import {useAuth} from "../hooks/use-auth";
import {Navigate} from "react-router";


function ProfilePage() {
    const {isAuth, email, token, id} = useAuth();
    return isAuth ? (
        <div className="card profile-card">
            <h1>Профиль</h1>
            <div className="card-info">
                <ul>
                    <li className="li-card">Id: {id}</li>
                    <li className="li-card ">Token: {token.slice(0,30)}...</li>
                    <li className="li-card">Email: {email}</li>
                </ul>
            </div>
        </div>
    ) : <Navigate to="/auth" replace/>
}

export default ProfilePage;