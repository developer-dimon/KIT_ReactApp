import React from "react";
import Header from "./Header";
import {Outlet} from "react-router"
function Layout() {
    return (
        <>
            <Header/>
            {/*<ul className="circles">*/}
            {/*    <li></li>*/}
            {/*    <li></li>*/}
            {/*    <li></li>*/}
            {/*    <li></li>*/}
            {/*    <li></li>*/}
            {/*    <li></li>*/}
            {/*    <li></li>*/}
            {/*    <li></li>*/}
            {/*    <li></li>*/}
            {/*    <li></li>*/}
            {/*</ul>*/}
            <Outlet/>
            {/*<footer><p className="footer-p">©Dmitry_Krivoshein 2022</p></footer>*/}
        </>
    )
}
export default Layout;