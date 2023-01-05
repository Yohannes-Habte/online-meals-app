import React from "react";
import "./Stripe.scss";

const StripeSuccess = () => {
  return (
    <main className="success-payment-box">
      <section className="payment-box">
        <h2 className="payment-success-title"> Payment is Successful! </h2>
        <p className="payment-success-paragraph">
          We are now processing your meals order.
        </p>
      </section>
    </main>
  );
};

export default StripeSuccess;
