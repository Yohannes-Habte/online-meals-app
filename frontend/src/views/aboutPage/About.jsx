import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import { AboutData } from "../../data/Data";
//import Accordion from "react-bootstrap/Accordion";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import "./About.scss";

const About = () => {
  // State variables
  const [openQuestions, setOpenQuestions] = useState(true);
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(true);
  const [stepThree, setStepThree] = useState(true);
  const [stepFour, setStepFour] = useState(true);
  const [stepFive, setStepFive] = useState(true);
  // Function that handle open questions and the steps
  const handleQuestions = () => {
    setOpenQuestions((previous) => !previous);
  };

  const handleStepOne = () => {
    setStepOne((previous) => !previous);
  };

  const handleStepTwo = () => {
    setStepTwo((previous) => !previous);
  };

  const handleStepThree = () => {
    setStepThree((previous) => !previous);
  };

  const handleStepFour = () => {
    setStepFour((previous) => !previous);
  };
  const handleStepFive = () => {
    setStepFive((previous) => !previous);
  };

  return (
    <main className="about-page">
      <div className="about-title">
        <h1 className="title">Mission</h1>
        <p className="mission-statement">
          The mission of Lisa Meals is to provide customers with healthy and
          affordable organic food to improve and promote public health. Every Weekend we update our menu! Don't forget to visit our Meals Page
          to discover new dishes from all around the world.
        </p>
        <h3 className="subTitle"> The Process of Online Food Ordering and Delivery </h3>
      </div>

      <section className="ordering-procedures">
        <h4
          className={stepOne ? "procedural-step" : "steps-bg"}
          onClick={handleStepOne}
        >
          Step One
          {stepOne ? (
            <MdOutlineKeyboardArrowDown className="step-icon" />
          ) : (
            <MdOutlineKeyboardArrowUp className="step-icon" />
          )}
        </h4>

        <article className={stepOne ? "hide" : "each-step"}>
          <h3>Customers on any food portal</h3>
          <p>
            First you need to create an account. After that, you log in and then
            you can browse the menu options on the meals page and place an
            order. You can choose the amount of food you want. Whatever you
            choose or order will be added to the delivery cart.
          </p>
        </article>

        <h4
          className={stepTwo ? "procedural-steps" : "steps-bg"}
          onClick={handleStepTwo}
        >
          Step Two
          {stepTwo ? (
            <MdOutlineKeyboardArrowDown className="step-icon" />
          ) : (
            <MdOutlineKeyboardArrowUp className="step-icon" />
          )}
        </h4>

        <article className={stepTwo ? "hide" : "each-step"}>
          <h3>Placing the order</h3>
          <p>
            Go to the shopping cart page and see what you have ordered. If you
            want to make changes, we will be happy to offer you what you want.
            Once you have finalize your order, make sure you have entered your
            current address to ensure faster delivery.
          </p>
        </article>

        <h4
          className={stepThree ? "procedural-steps" : "steps-bg"}
          onClick={handleStepThree}
        >
          Step Three
          {stepThree ? (
            <MdOutlineKeyboardArrowDown className="step-icon" />
          ) : (
            <MdOutlineKeyboardArrowUp className="step-icon" />
          )}
        </h4>

        <article className={stepThree ? "hide" : "each-step"}>
          <h3>Payment Method </h3>
          <p>
            For the convenience of customers, several flexible online payment
            methods are available, including Paypal, Amazon Pay, Google Pay,
            American Express, Apple Pay, Stripe, Visa Checkout and Masterpass.
          </p>
        </article>

        <h4
          className={stepFour ? "procedural-steps" : "steps-bg"}
          onClick={handleStepFour}
        >
          Step Four
          {stepFour ? (
            <MdOutlineKeyboardArrowDown className="step-icon" />
          ) : (
            <MdOutlineKeyboardArrowUp className="step-icon" />
          )}
        </h4>

        <article className={stepFour ? "hide" : "each-step"}>
          <h3>The online store owner receives the payment</h3>
          <p>
            The payment confirmation will be sent to your email. Thereafter,
            your order will be delivered to you immediately.
          </p>
        </article>

        <h4
          className={stepFive ? "last-procedural-step" : "steps-bg"}
          onClick={handleStepFive}
        >
          Step Five
          {stepFive ? (
            <MdOutlineKeyboardArrowDown className="step-icon" />
          ) : (
            <MdOutlineKeyboardArrowUp className="step-icon" />
          )}
        </h4>

        <article className={stepFive ? "hide" : "each-step"}>
          <h3>The customer receives the food delivery</h3>
          <p>
            Eventually, the customer receives the food delivery and enjoys it
            safely and intact. For more information, please contact us via{" "}
            <NavLink to="/contact">
              <button className="sept-five-btn">Contact Us</button>
            </NavLink>
            .
          </p>
        </article>
      </section>

      {/* Food Ordering and Delivery based on bootstrap */}
      {/*
      <Accordion className="accordion-bootstrap">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Step One</Accordion.Header>
          <Accordion.Body>
            <h3>Customers on any food portal</h3>
            <p>
              First you need to create an account. After that, you log in and
              then you can browse the menu options on the meals page and place
              an order. You can choose the amount of food you want. Whatever you
              choose or order will be added to the delivery cart.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Step Two</Accordion.Header>
          <Accordion.Body>
            <h3>Placing the order</h3>
            <p>
              Go to the shopping cart page and see what you have ordered. If you
              want to make changes, we will be happy to offer you what you want.
              Once you have finalize your order, make sure you have entered your
              current address to ensure faster delivery.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Step Three</Accordion.Header>
          <Accordion.Body>
            <h3>Payment by Customer </h3>
            <p>
              For the convenience of customers, several flexible online payment
              methods are available, including Paypal, Amazon Pay, Google Pay,
              American Express, Apple Pay, Stripe, Visa Checkout and Masterpass.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Step Four</Accordion.Header>
          <Accordion.Body>
            <h3>The online store owner receives the payment</h3>
            <p>
              The payment confirmation will be sent to your email. Thereafter,
              your order will be delivered to you immediately.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Step Five</Accordion.Header>
          <Accordion.Body>
            <h3>The customer receives the food delivery</h3>
            <p>
              Eventually, the customer receives the food delivery and enjoys it
              safely and intact. For more information, please contact us via{" "}
              <NavLink to="/contact">
                <button className="sept-five-btn">Contact Us</button>{" "}
              </NavLink>
              .
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    */}

      {/* 
      <div className="ordering-procedures">
        {AboutData.map(({ button, title, paragraph }, index) => {
          return (
            <article key={index} className="ordering-step">
              <button> {button} </button>
              <h3> {title} </h3>
              <p> {paragraph} </p>
            </article>
          );
        })}
      </div> 
      */}

      {/* Frequently Asked Questions */}

      <article onClick={handleQuestions} className="handle-questions-span">
        <h2>Frequently Asked Questions</h2>
        {openQuestions ? (
          <MdOutlineKeyboardArrowDown className="icon" />
        ) : (
          <MdOutlineKeyboardArrowUp className="icon" />
        )}
      </article>

      <div className={openQuestions ? "hide" : "frequently-asked-questions"}>
        <div className="question-answer">
          <p>
            <strong>How often and in what amount can I place an order? </strong>
          </p>
          <p>Awesome! At any time with the amount you want.</p>
        </div>

        <div className="question-answer">
          <p>
            <strong>
              How do you keep the food safe and fresh for consumption?{" "}
            </strong>
          </p>
          <p>
            Great Question! We carefully hand pack all ingredients with special
            cold packs and insulation to keep your food cool and fresh until you
            get home.
          </p>
        </div>

        <div className="question-answer">
          <p>
            <strong>How could I contact you easier and faster? </strong>
          </p>
          <p>
            We value your comment. Please contact us using
            <NavLink to="/contact">
              <button className="question-answer-btn">Contact Us!</button>
            </NavLink>
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
