import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { myContext } from "../../App";
import "./Register.scss";

const Register = () => {
  // State variables
  const { setUser, token } = useContext(myContext);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    telephone: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    streetName: "",
    houseNumber: "",
    zipCode: "",
    cityName: "",
    stateName: "",
    countryName: "",
  });
  const {
    firstName,
    lastName,
    gender,
    telephone,
    email,
    confirmEmail,
    password,
    confirmPassword,
    streetName,
    houseNumber,
    zipCode,
    cityName,
    stateName,
    countryName,
  } = userData;

  // Function that handle input data change
  const updateData = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  // Function to register a user
  const registerUser = async (event) => {
    event.preventDefault();

    const settings = {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/register",
      settings
    );
    const result = await response.json();

    try {
      if (response.ok) {
        // Set token expiry
        const now = new Date();
        const tokenExpiry = new Date(now.getTime() + 1000 * 60 * 60);
        // Local storage with key call "data" and value "token, id and expiry"
        localStorage.setItem(
          "data",
          JSON.stringify({
            token: result.token,
            id: result.id,
            expiry: tokenExpiry.toISOString(),
          })
        );
        // If the response is ok, dend data to backend
        setUser(result.token, result.user);
        event.target.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="register-page">
      <section className="registration-container">
        <h1 className="register-title">Create Account</h1>
        <p className="register-discount-paragraph">
          New users get 50% off! Today is the right moment to create a free
          account and order delicious and healthy meals. LisaMeals is always
          ready to fulfill your wish.
        </p>
        <div className="register-fieldset">
          <h2 className="register-heading"> Create Free User Account </h2>
          <form onSubmit={registerUser} action="" className="register-form">
            <div className="specific-personal-data">
              <div className="first-name-container">
                <label htmlFor="firstName"> First Name: </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={updateData}
                  placeholder="Enter First Name"
                />
              </div>

              <div className="last-name-container">
                <label htmlFor="lastName"> Last Name: </label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={updateData}
                  id="lastName"
                  placeholder="Enter Last Name"
                />
              </div>

              <div className="gender-container">
                <label htmlFor="Gender"> Gender: </label>
                <input
                  type="text"
                  name="gender"
                  value={gender}
                  onChange={updateData}
                  id="gender"
                  placeholder=" Enter Gender "
                />
              </div>

              <div className="telephone-container">
                <label htmlFor="telephone"> Telephone: </label>
                <input
                  type="number"
                  name="telephone"
                  value={telephone}
                  onChange={updateData}
                  id="telephone"
                  placeholder=" Enter Telephone Number"
                />
              </div>

              <div className="email-container">
                <label htmlFor="email"> Email: </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={updateData}
                  id="email"
                  placeholder="Enter Email"
                />
              </div>

              <div className="confirm-email-container">
                <label htmlFor="confirmEmail"> Confirm Email: </label>
                <input
                  type="email"
                  name="confirmEmail"
                  id="confirmEmail"
                  value={confirmEmail}
                  onChange={updateData}
                  placeholder="Enter Confirm Email"
                />
              </div>

              <div className="password-container">
                <label htmlFor="password"> Password: </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={updateData}
                  id="password"
                  placeholder="Enter Password"
                />
              </div>

              <div className="confirm-password-container">
                <label htmlFor="confirmPassword"> Confirm Password: </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={updateData}
                  placeholder=" Confirm Password"
                />
              </div>
            </div>

            <h3 className="form-sub-title"> Physical Address </h3>

            <div className="physical-address-container">
              <div className="streetName-container">
                <label htmlFor="streetName"> Street Name: </label>
                <input
                  type="text"
                  name="streetName"
                  id="streetName"
                  value={streetName}
                  onChange={updateData}
                  placeholder=" Enter Street Name"
                />
              </div>

              <div className="house-number-container">
                <label htmlFor="houseNumber"> House Number: </label>
                <input
                  type="number"
                  name="houseNumber"
                  value={houseNumber}
                  onChange={updateData}
                  id="houseNumber"
                  placeholder=" Enter House Number "
                />
              </div>

              <div className="zip-code-container">
                <label htmlFor="zipCode"> Zip Code: </label>
                <input
                  type="number"
                  name="zipCode"
                  value={zipCode}
                  onChange={updateData}
                  id="zipCode"
                  placeholder=" Enter Postal Code"
                />
              </div>

              <div className="city-name-container">
                <label htmlFor="cityName"> City Name: </label>
                <input
                  type="text"
                  name="cityName"
                  value={cityName}
                  onChange={updateData}
                  id="cityName"
                  placeholder=" Enter City Name "
                />
              </div>

              <div className="state-name-container">
                <label htmlFor="stateName"> State Name: </label>
                <input
                  type="text"
                  name="stateName"
                  id="stateName"
                  value={stateName}
                  onChange={updateData}
                  placeholder=" Enter State Name "
                />
              </div>

              <div className="country-name-container">
                <label htmlFor="countryName"> Country Name: </label>
                <input
                  type="text"
                  name="countryName"
                  id="countryName"
                  value={countryName}
                  onChange={updateData}
                  placeholder=" Enter Country Name "
                />
              </div>
            </div>

            <div className="checkbox-container">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                I accept <NavLink> Terms of Use </NavLink>{" "}
              </label>
            </div>

            <div className="register-btn-container">
              <button className="register-btn"> Register </button>
            </div>

            <div className="already-have-account-container">
              <p>Already have an account?</p>
              <NavLink to="/login"> Log In </NavLink>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;
