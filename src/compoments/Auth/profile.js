import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
const Profile = () => {
    const { user: currentUser } = useSelector((state) => state.authReducer);
    if (!currentUser) {
        return <Redirect to="/login" />;
    }
    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <strong>{currentUser.username}</strong> Profile
                </h3>
            </header>
            <p>
                <strong>Token:</strong> {currentUser.access_token.substring(0, 20)} ...{" "}
                {currentUser.access_token.substr(currentUser.access_token.length - 20)}
            </p>
            <p>
                <strong>Id:</strong> {currentUser.id}
            </p>
            <p>
                <strong>Email:</strong> {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
                {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
        </div>
    );
};
export default Profile;