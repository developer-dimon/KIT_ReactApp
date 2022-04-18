import React from "react";

function SignInPage() {
    return (
        <>
            <div className="container-login">
                <input type="checkbox" id="chk" aria-hidden="true"/>
                    <div className="signup">
                        <form method="POST">
                            <label className="label-login" htmlFor="chk" aria-hidden="true">Sign up</label>
                            <input className="input-login" type="text" name="txt" placeholder="User name" required=""/>
                                <input className="input-login"  type="email" name="email" placeholder="Email" required=""/>
                                    <input  className="input-login" type="password" name="pswd" placeholder="Password" required=""/>
                                        <button className="button-login">Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form>
                            <label className="label-login" htmlFor="chk" aria-hidden="true">Login</label>
                            <input className="input-login"  type="email" name="email" placeholder="Email" required=""/>
                                <input className="input-login"  type="password" name="pswd" placeholder="Password" required=""/>
                                    <button className="button-login">Login</button>
                        </form>
                    </div>
            </div>
        </>
    )
}
export default SignInPage;