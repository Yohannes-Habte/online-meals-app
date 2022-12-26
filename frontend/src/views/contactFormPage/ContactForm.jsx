import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import "./ContactForm.scss";
import { useContext } from "react";
import { myContext } from "../../App";

const ContactForm = () => {
     // State variables
     const { click, setClick, handleClick } = useContext(myContext);
  return (
    <main className="contact-form-page">
      <section className="contact-form-page-container">
        <h1 className="contact-form-title"> We Would Love to Hear From You </h1>
        <article className="article-of-form">
          <h3>Drop us a message below</h3>
          <form action="" className="contact-form">
            <div className="user-data">
              <div className="input">
                <input
                  type="text"
                  name="fistName"
                  id="fistName"
                  placeholder="Enter Your First Name"
                />
              </div>

              <div className="input">
                <input
                  type="text"
                  name="lasttName"
                  id="lasttName"
                  placeholder="Enter Your Last Name"
                />
              </div>

              <div className="input">
                <input
                  type="mail"
                  name="mail"
                  id="mail"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="input">
                <input type="file" name="attach" />
              </div>
            </div>

            <div className="text-message">
              <textarea
                name="text"
                id="text"
                cols="56"
                rows="6"
                placeholder="We value your message"
              />
            </div>
          </form>
        </article>

        <article className="fast-contact-tools">
          <h3> Would you like a prompt reply? </h3>
          <div className="contact-tools">
            <FiPhoneCall className="contact-form-icon" />
            <p>
              <a href="tel:+4917581005650"> Call us now </a>
            </p>
          </div>
          <div className="contact-tools">
            <MdEmail className="contact-form-icon" />
            <p>
              <a href="mailto:uelandrae@gmail.com"> Email Us </a>
            </p>
          </div>
          <div className="contact-tools">
            <FaTwitterSquare className="contact-form-icon" />
            <p>
              <a href="twitter"> Tweet us </a>
            </p>
          </div>
          <div className="contact-tools">
            <MdLocationOn className="contact-form-icon" />
            <p>
              <a href="#"> Straße 31, 4657 Hamburg, Germany</a>
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ContactForm;
