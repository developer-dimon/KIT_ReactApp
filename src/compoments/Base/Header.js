import React from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../../hooks/use-auth";
import {useDispatch} from "react-redux";
import {removeUser} from "../../redux/slices/userSlice";


function Header() {
    const dispatch = useDispatch()
    const {isAuth} = useAuth();
    return (
        <>
            <header className="header">
                <div className="bg-dark collapse" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                        </div>
                    </div>
                </div>
                <div className="navbar shadow-lg">
                    <div className="container">
                        <Link className="navbar-title menu-a" to="/">Random Users</Link>
                        {isAuth ?
                            <div>
                                <Link className="btn btn-navbar" to="/profile">Profile</Link>
                                <button className="btn btn-navbar" onClick={() => dispatch(removeUser())}>Logout</button>
                            </div>
                            :
                            <Link className="btn btn-navbar" to="/auth">Sign Up </Link>}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;