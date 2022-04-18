import React from "react";
import {Link} from "react-router-dom";


function Header() {
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
                        {/*<ul className="menu-ul">*/}
                            {/*<li className="menu-li">Home</Link></li>*/}
                        {/*</ul>*/}
                        <Link className="btn btn-navbar" to="/login">Sign Up </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;