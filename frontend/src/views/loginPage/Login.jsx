import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.scss";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { myContext } from "../../App";
import { useContext } from "react";

const Login = () => {
  // Navigate to meals page
  const navigate = useNavigate();
  // State variables
  const { setUser, setLoggedIn, token } = useContext(myContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function that updates login data
  const updateData = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };

  // Function to submit logged in user
  const submitLoggedInUser = async (event) => {
    event.preventDefault();

    const loginUser = {
      email: email,
      password: password,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(loginUser),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/login",
      settings
    );
    const result = await response.json();

    try {
      if (response.ok) {
        // Set token expiry
        const now = new Date();
        // Expiry time is one hour
        const tokenExpiry = new Date(now.getTime() + 1000 * 60 * 60);
        setLoggedIn(true);
        setUser({
          id: result.data._id,
          info: result.data,
          expiry: tokenExpiry.toISOString(),
          token: result.token,
        });
        navigate("/meals");
        event.target.reset();
        
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="login">
      <section className="login-container">
        <h1 className="login-title"> Login </h1>
        <fieldset className="login-fieldset">
          <legend className="login-icon">
            <FaUserAlt className="icon" />
          </legend>

          <form onSubmit={submitLoggedInUser} action="" className="login-form">
            <div className="login-email">
              <label htmlFor="email"> Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={updateData}
                placeholder="Enter Email"
              />
            </div>
            <div className="login-password">
              <label htmlFor="password"> Password: </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={updateData}
                value={password}
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
