import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import contactUs from "../../assets/contactUs.jpg";
import mixed from "../../assets/mixed.jpg";
import meatMeal from "../../assets/meatMeal.jpg";
import veganMeal from "../../assets/veganMeal.jpg";
import { useContext } from "react";
import { myContext } from "../../App";
import DropDownItem from "../../components/dropdown/DropDownItem";
import "./Contact.scss";

const Contact = () => {
  // State variables
  const { click, setClick, handleClick } = useContext(myContext);
  const [dropDown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-banner">
        <h1 className="contact-title">Contact Us </h1>
        <figure className="contact-image">
          <img src={contactUs} alt="Contact Person" />
        </figure>
        {/* 
      <form action="" className='contact-category'>
        <h4 className='category-title'>How can we help you?</h4>
        <select name="" id="" className='category-select'>
          <option value="default">Please select a category</option>
          <option value="meal"> <NavLink to="/contactForm"> Food Related Question </NavLink> </option>
          <option value="service"> <NavLink to="/contactForm"> Service Delivery Question </NavLink> </option>
          <option value="meal"> <NavLink to="/contactForm"> Other Question </NavLink> </option>
        </select>
      </form> 
      */}
      
        <ul
          className="contact-category"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <li className="category-heading"> Please select a category 🔽 </li>
          {dropDown && <DropDownItem />}
        </ul>
      </section>

      <section className="contact-popular-dishes">
        <h2 className="popular-dishes-title">
          We would be happy to hear you and serve you delicious dishes
        </h2>
        <figure className="popular-dishes">
          <img src={mixed} alt="Fish Dish" />
          <img src={meatMeal} alt="Traditional Dish" />
          <img src={veganMeal} alt="Vegan Dish" />
        </figure>
      </section>
    </main>
  );
};

export default Contact;
