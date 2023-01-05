import React from "react";
import "./Stripe.scss";

const StripeCancel = () => {
  return (
    <section className="payment-box">
      <h2 className="payment-cancel-title"> Payment Cancelled! </h2>
      <p className="payment-cancel-paragraph">
        Please check your account and then try again.
      </p>
      <p className="payment-cancel-paragraph">
        Contact our customer service team if your have any questions.
      </p>
      <p></p>
    </section>
  );
};

export default StripeCancel;
