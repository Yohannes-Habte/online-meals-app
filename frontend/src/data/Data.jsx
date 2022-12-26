import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
    title: "Service Delivery Question",
    path: "service",
    className: "dropdown-link",
  },

  {
    title: "Food Related Question",
    path: "food",
    className: "dropdown-link",
  },

  {
    title: "Other Question",
    path: "other",
    className: "dropdown-link",
  },
];
