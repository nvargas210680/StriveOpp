import React from "react";
import { useState, useRef } from "react";
import "./Auth.css";
import { useAuth } from "../../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

export const Auth = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hold on");

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      navigate("suggested-scholarship");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            {/* Login Field: Email */}
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                className="login__input"
                placeholder="Email"
                ref={emailRef}
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
                ref={passwordRef}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* "Don't yet have an account?*/}
            <p class="account-question">
              Don't have an account?
              <br />
              <br />
              Use your Google account or sign-up
              <Link to="/signup">Here!</Link>
            </p>

            {/* Buttons - Native Login */}

            <button
              disabled={loading}
              className="button login__submit"
              type="submit"
              // onClick={signIn}
            >
              <span className="button__text">Login</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
            <p>{error}</p>
          </form>

          {/* Buttons - Social Login */}
          <div className="social-login">
            <div className="social-media">
              <button
                className="social-icons"
                // onClick={signInWithGoogle}
              >
                Google
              </button>
            </div>
          </div>
        </div>
        <div className="w-100 text-center mt-3">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};
