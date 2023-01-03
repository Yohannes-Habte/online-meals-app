import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.scss";
import { FaUserAlt } from "react-icons/fa";

const Login = () => {
  // Navigation
  const navigation = useNavigate();
  return (
    <main className="login">
      <section className="login-container">
        <h1 className="login-title"> Login </h1>
        <fieldset className="login-fieldset">
          <legend className="login-icon">
            <FaUserAlt className="icon" />
          </legend>

          <form action="" className="login-form">
            <div className="login-email">
              <label htmlFor="email"> Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="login-password">
              <label htmlFor="password"> Password: </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="keep-login-and-forget-password">
              <div className="checkbox-keep-signed-in">
                <input type="checkbox" name="keepMe" id="keepMe" />
                <label htmlFor="keepMe">Keep me signed in</label>
              </div>
              <p className="forget-password">
                <a href="#"> Forget your password? </a>
              </p>
            </div>
            <button className="login-btn">Log In</button>
          </form>
          <div className="if-no-account">
            <p>Don't have an account?</p>
            <NavLink to="/register">Sign Up</NavLink>
          </div>
        </fieldset>
      </section>
    </main>
  );
};

export default Login;
