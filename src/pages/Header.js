import React from "react";
import {Link} from "react-router-dom";


function Header(){
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
                   <h3 className="navbar-title">Random Users</h3>
                    <ul className="menu-ul">
                        <li className="menu-li"><Link className="menu-a" to="/">Home</Link></li>
                        <li className="menu-li"><Link className="menu-a" to="/about">About</Link></li>
                        <li className="menu-li"><Link className="menu-a" to="/docs">Docs</Link></li>
                    </ul>

                    {/*<div className="btn-group" role="group" aria-label="Basic example">*/}
                    {/*    <a className="btn btn-outline-secondary" href=""></a>*/}
                    {/*    <a className="btn btn-outline-secondary" href="">Выход </a>*/}
                    {/*</div>*/}

                    <div className="btn-group" role="group" aria-label="Basic example">
                        <Link className="btn btn-navbar" to="/login">Sign In </Link>
                        <Link className="btn btn-navbar" to="/registration">Sign Up </Link>
                    </div>

                </div>
            </div>
        </header>
        </>
    )
}

export default Header;