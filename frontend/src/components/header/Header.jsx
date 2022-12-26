import React from 'react';
import { NavLink } from "react-router-dom";
import "./Header.scss";
import headerBanner from "../../assets/headerBanner.jpg";

const Header = () => {
  return (
    <header className='header'>
        <h1 className='header-title'> Your Organic Foods </h1>
        <figure className='header-image'>
            <img src={headerBanner} alt="Header Banner" />
        </figure>
        <NavLink to="/about"><button className='header-btn'>Get Started </button></NavLink>
    </header>
  )
}

export default Header;