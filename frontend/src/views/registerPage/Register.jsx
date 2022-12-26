import React from "react";
import { NavLink } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <main className="register-page">
      <h1 className="register-title">Create Account</h1>
      <div className="register-fieldset">
        <h2 className="register-heading">Create Account</h2>
        <form action="" className="register-form">
          <div className="name-email-password">
            <div className="first-name-container">
              <label htmlFor="firstName"> First Name: </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter First Name"
              />
            </div>

            <div className="last-name-container">
              <label htmlFor="lastName"> Last Name: </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter Last Name"
              />
            </div>

            <div className="email-container">
              <label htmlFor="email"> Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
              />
            </div>

            <div className="password-container">
              <label htmlFor="password"> Password: </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
            </div>
          </div>

          <div className="physical-address-container">
            <label htmlFor="address"> Physical Address: </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter Current Address"
            />
          </div>

          <div className="checkbox-container">
            <input type="checkbox" name="" id="" />
            <label htmlFor=""> I accept  <NavLink> Terms of Use </NavLink> </label>
          </div>

          <div className="register-btn-container">
            <button className="register-btn"> Sign Up </button>
          </div>

          <div className="already-have-account-container">
            <p>Already have an account?</p>
            <NavLink to="/login"> Log In </NavLink>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
