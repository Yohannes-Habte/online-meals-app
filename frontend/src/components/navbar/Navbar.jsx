import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="navbar-logo">
        {" "}
        <NavLink to="/"> LisaMeals </NavLink>{" "}
      </h3>
      <ul className="navbar-ul">
        <li className="navbar-list">
          <NavLink to="/" style={({ isActive }) => ({
              color: isActive && "red", textDecoration: isActive && "underline",
              pointerEvents: isActive && "none",
            })}> Home </NavLink>
        </li>

        <li className="navbar-list">
          <NavLink to="/about" style={({ isActive }) => ({
              color: isActive && "red", textDecoration: isActive && "underline",
              pointerEvents: isActive && "none",
            })}> About </NavLink>
        </li>

        <li className="navbar-list">
          <NavLink to="/meals" style={({ isActive }) => ({
              color: isActive && "red", textDecoration: isActive && "underline",
              pointerEvents: isActive && "none",
            })}> Meals </NavLink>
        </li>

        <li className="navbar-list">
          <NavLink to="/cart" style={({ isActive }) => ({
              color: isActive && "red", textDecoration: isActive && "underline",
              pointerEvents: isActive && "none",
            })}> Cart </NavLink>
        </li>

        <li className="navbar-list">
          <NavLink to="/contact" style={({ isActive }) => ({
              color: isActive && "red", textDecoration: isActive && "underline",
              pointerEvents: isActive && "none",
            })}> Contact </NavLink>
        </li>
      </ul>

      <div className="navbar-login-and-register">
        <NavLink to="/login" style={({ isActive }) => ({
              color: isActive && "red", textDecoration: isActive && "underline",
              pointerEvents: isActive && "none",
            })}> Login </NavLink>
        <NavLink to="/register" style={({ isActive }) => ({
              color: isActive && "red", textDecoration: isActive && "underline",
              pointerEvents: isActive && "none",
            })}> Register </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
