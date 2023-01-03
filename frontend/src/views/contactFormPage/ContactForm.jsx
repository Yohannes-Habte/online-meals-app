import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import "./ContactForm.scss";
import { useState } from "react";
import { useEffect } from "react";

const ContactForm = () => {
  // State variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [testimonials, setTestimonials] = useState([]);

  // Function that shows all the testimonials on the browser(frontend)
  useEffect(() => {
    const fetichTestimonials = async () => {
      const response = await fetch(
        process.env.REACT_APP_SERVER_URL + "/contact/testimonials"
      );
      const result = await response.json();
      try {
        if (response.ok) {
          setTestimonials(result.testimonials);
        } else {
          throw new Error(result.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetichTestimonials();
  }, []);
  // Function that handle input change
  const handleChange = (event) => {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "image":
        setImage(event.target.value);
        break;
      case "message":
        setMessage(event.target.value);
        break;
      default:
        break;
    }
  };

  // Function to reset input data
  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setImage("");
    setMessage("");
  };

  // Function to submit testimonial
  const submitTestimonial = async (event) => {
    event.preventDefault();

    const settings = {
      method: "POST",
      body: new FormData(event.target), // formData, json data, graph ql
    };

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/contact/testimonials",
      settings
    );
    const result = await response.json();

    try {
      if (response.ok) {
        setTestimonials([...testimonials, result.testimonial]);
        reset();
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="contact-form-page">
      <section className="contact-form-communication-tools-container">
        <h1 className="contact-form-title"> We Would Love to Hear From You </h1>
        <article className="form-container">
          <h3> Drop us a message below </h3>

          <form
            onSubmit={submitTestimonial}
            encType="multipart/form-data"
            className="contact-form"
          >
            <div className="user-data">
              <div className="input">
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={firstName}
                  placeholder="First Name"
                />
              </div>

              <div className="input">
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  value={lastName}
                  placeholder="Last Name"
                />
              </div>

              <div className="input">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  placeholder="Email"
                />
              </div>

              <div className="input">
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  value={image}
                />
              </div>
            </div>

            <div className="text-message">
              <textarea
                name="message"
                value={message}
                onChange={handleChange}
                cols="56"
                rows="6"
                placeholder="We value your message"
              />
            </div>
            <button className="contact-form-btn">Submit</button>
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

      {/* Testimonals displayed on the browser section */}
      <section className="testimonails-section">
        <h2 className="testimonials-title"> Testimonials from the Customers </h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => {
            return (
              <div key={index} className="testimonial">
                <figure className="testimonial-image">
                  <img src={testimonial.image} alt="Testimonial images" />
                </figure>
                <p className="testimonial-paragraph"> {testimonial.message} </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default ContactForm;
