import React from "react";
import { useState } from "react";
import "./Auth.css";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // console.log(auth?.currentUser?.photoURL);

    return(
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        {/* Login Field: Email */}
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input
                                className="login__input"
                                placeholder="Email"
                                // onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        
                        {/* Login Field: Password */}
                        <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input
                            className="login__input"
                            placeholder="Password"
                            type="password"
                            // onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>

                        {/* "Don't yet have an account?*/}
                        <p class="account-question">
                        Don't have an account?
                        <br />
                        <br />
                        Use your Google account or sign-up<a href="/register"> here!</a>
                        </p>

                        {/* Buttons - Native Login */}

                        <button className="button login__submit" 
                        // onClick={signIn}
                        >
                        <span className="button__text">Login</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>

                        {/* Buttons - Social Login */}
                        <div className="social-login">
                            <div className="social-media">
                                <button className="social-icons" 
                                // onClick={signInWithGoogle}
                                >
                                    Google
                                </button>
                            </div>
                        </div>

                        </div>

                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>
                </div>
            </div>
    )
}