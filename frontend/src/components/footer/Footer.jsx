import React from "react";
import { NavLink } from "react-router-dom";
import { FooterData } from "../../data/Data";
import "./Footer.scss";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections-container">
        {FooterData.map(({ title, item1, item2, item3 }, index) => { 
          return (
            <section key={index} className="footer-section">
              <h2 className="footer-title"> {title} </h2>
              <ul className="footer-list-items">
                <li className="list-item"> {item1} </li>
                <li className="list-item"> {item2} </li>
                <li className="list-item"> {item3} </li>
              </ul>
            </section>
          );
        })}
      </div>

      <div className="footer-copyright">
        <p className="compyright">
          &copy; 2022 Lisa Organic Meals. All rights reserved!
        </p>
        <figure className="footer-logo">
          <NavLink to="/">
            <img src={logo} alt="Logo of Organic Lisa Meals" />
          </NavLink>
        </figure>
      </div>
    </footer>
  );
};

export default Footer;
