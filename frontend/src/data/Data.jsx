import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMail, MdPhoneInTalk, MdOutlineMessage } from "react-icons/md";
import { FaLinkedin,  FaYoutube,  FaFacebookSquare } from "react-icons/fa";

//=======================================================
// About Page Data
//=======================================================

export const AboutData = [
  {
    button: <button>Step One</button>,
    title: <h3>Customers on any food portal</h3>,
    paragraph: (
      <p>
        First you need to create an account. After that, you log in and then you
        can browse the menu options on the meals page and place an order. You
        can choose the amount of food you want. Whatever you choose or order
        will be added to the delivery cart.
      </p>
    ),
  },

  {
    button: <button>Step Two</button>,
    title: <h3>Placing the order</h3>,
    paragraph: (
      <p>
        Go to the shopping cart page and see what you have ordered. If you want
        to make changes, we will be happy to offer you what you want. Once you
        have finalize your order, make sure you have entered your current
        address to ensure faster delivery.
      </p>
    ),
  },

  {
    button: <button>Step Three</button>,
    title: <h3>Payment Method </h3>,
    paragraph: (
      <p>
        For the convenience of customers, several flexible online payment
        methods are available, including Paypal, Amazon Pay, Google Pay,
        American Express, Apple Pay, Stripe, Visa Checkout and Masterpass.
      </p>
    ),
  },

  {
    button: <button>Step Four</button>,
    title: <h3>The online store owner receives the payment</h3>,
    paragraph: (
      <p>
        The payment confirmation will be sent to your email. Thereafter, your
        order will be delivered to you immediately.
      </p>
    ),
  },

  {
    button: <button>Step Five</button>,
    title: <h3>The customer receives the food delivery</h3>,
    paragraph: (
      <p>
        Eventually, the customer receives the food delivery and enjoys it safely
        and intact. For more information, please contact us via{" "}
        <NavLink to="/contact">
          <button>Message Us</button>{" "}
        </NavLink>
        .
      </p>
    ),
  },
];

//=======================================================
// Contact Page Select Options
//=======================================================

export const ContactHeaderDropDown = [
  {
    title: "Service Delivery Questions",
    path: "service",
    className: "dropdown-link",
  },

  {
    title: "Food Related Questions",
    path: "food",
    className: "dropdown-link",
  },

  {
    title: "Other Questions",
    path: "other",
    className: "dropdown-link",
  },
];

//=======================================================
// Footer Component Data
//=======================================================
export const FooterData = [
  {
    title: "Sitemap",
    item1: <NavLink to="/about"> About </NavLink>,
    item2: <NavLink to="/meals"> Meals </NavLink>,
    item3: <NavLink to="/services"> Services </NavLink>
  },

  {
    title: "Company",
    item1: <NavLink to="/team"> Our Team </NavLink>,
    item2: <NavLink to="/projects"> Projects </NavLink>,
    item3: <NavLink to="/clients"> Clients </NavLink>,
  },

  {
    title: "Social",
    item1: <a href="https://www.linkedin.com/in/yohannes-habtemariam"> <FaLinkedin className="footer-icon"/> LinkedIn </a>,
    item2: <a href="https://www.facebook.com/profile.php?id=100009710022882"> <FaFacebookSquare className="footer-icon"/> Facebook </a>,
    item3: <a href="https://www.youtube.com/@lisaConsult"> <FaYoutube className="footer-icon"/> YouTube </a>
  },

  {
    title: "Contact",
    item1: <a href="mailto:uelandrae@gmail.com"> <MdOutlineMail className="footer-icon"/> Email Us </a>,
    item2: <a href="tel:+4917681005650"> <MdPhoneInTalk className="footer-icon"/> Call Us</a>,
    item3: <NavLink to="/contact"> <MdOutlineMessage className="footer-icon" /> Message Us </NavLink> 
  },
]