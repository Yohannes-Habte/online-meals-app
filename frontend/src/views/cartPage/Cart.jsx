import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { MdStackedLineChart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../App";
import "./Cart.scss";

const Cart = () => {
  // If user is not registered, direct to registration form
  const navigate = useNavigate();
  // State varibles
  const {
    user,
    cart,
    setCart,
    orders,
    setOrders,
    addToCart,
    removeFromCart,
    changeQuantity,
  } = useContext(myContext);
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState("");
  const [placedOrder, setPlacedOrder] = useState(false);
  const [sameAddress, setSameAddress] = useState(true);
  const [total, setTotal] = useState(0);

  //==============================================================
  // Function that calculate the total price of an order
  //==============================================================

  useEffect(() => {
    const totalOrderPrice = cart.reduce((accu, meal) => {
      accu = accu + meal.price * meal.quantity;
      return accu;
    }, 0);
    totalOrderPrice();
  }, [cart]);

  //==============================================================
  // Function that submit an order
  //==============================================================
  const submitOrder = async (event) => {
    event.preventDefault();
    if (!user) {
      navigate("/register");
    } else if (cart.length < 3) {
      alert("Minimum order is three meals!");
    } else {
      const newOrder = {
        meals: cart.map((item) => item._id),
        total: total,
        userId: user.id,
        deliveryAddress: {
          streetName: sameAddress
            ? user.info.streetName
            : event.target.street.value,
          houseNumber: sameAddress
            ? user.info.houseNumber
            : event.target.houseNo.value,
          zipCode: sameAddress
            ? user.info.zipCode
            : event.target.postalCode.value,
          cityName: sameAddress 
            ? user.info.cityName 
            : event.target.city.value,
          stateName: sameAddress
            ? user.info.stateName
            : event.target.state.value,
          countryName: sameAddress
            ? user.info.countryName
            : event.target.country.value,
        },
      };

      const settings = {
        method: "POST",
        body: JSON.stringify(newOrder),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        process.env.REACT_APP_SERVER_URL + "/orders",
        settings
      );
      const result = await response.json();

      try {
        if (response.ok) {
          setOrders([...orders, result.data._id]);
          setPlacedOrder(true);
        } else {
          throw new Error(result.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  //==============================================================
  // Function that that controls change address using checkbox
  //==============================================================

  const changeAddress = (event) => {
    setSameAddress(event.target.checked);
  };

  //==============================================================
  // Function that delete a single ordered meal
  //==============================================================

  const deleteSingleOrderedMeal = (meal) => {
    let updatedCart = cart.filter((item) => item._id !== meal._id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  //==============================================================
  // Function that handle stripe payment
  //==============================================================

  const stripe = async () => {
    const pay = {
      total: total,
    };

    const settings = {
      method: "POST",
      body: JSON.stringify(pay),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/payment",
      settings
    );
    const result = await response.json();

    try {
      if (response.ok) {
        setCart([]);
        window.location.href = result.url;
      } else {
        throw new Error(result.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="cart-page">
      {placedOrder ? (
        <section className="ordered-meals-summary-container">
          <h2 className="order-title"> Order Summary </h2>
          {cart.map((meal) => {
            return (
              <article className="ordered-meal">
                <figure>
                  <img src={meal.image} alt="" />
                </figure>
                <h4> {meal.title} </h4>
                <p> {meal.price} </p>
                <p> {meal.quantity} </p>
              </article>
            );
          })}

          {/* Customer Address */}
          <article className="customer-address">
            <h3> Customer Address </h3>
            <p> {user.info.streetName}</p>
            <p>{user.info.houseNumber}</p>
            <p>{user.info.zipCode}</p>
            <p>{user.info.cityName}</p>
            <p> {user.info.stateName}</p>
            <p>{user.info.countryName}</p>
            {/* Total Price */}
            <div>{cart.length > 0 && <h2> Total Price = ${total} </h2>}</div>
            {/* Proceed to Payment */}
            <button onClick={stripe} className="payment">
              Pay
            </button>
          </article>
        </section>
      ) : (
        <section className="cart-after-placing-order-container">
          {/* order amount verification */}
          <div className="meals-quantity-order-alert">
            {cart.length === 3
              ? null
              : "Please select three separate meals from the meal page"}
          </div>

          <h2 className="order-title"> Your Meals' Choice </h2>

          {/* ordered meals */}
          <div className="ordered-meals-containter">
            {cart.map((meal, index) => {
              return (
                <article key={index} className="ordered-meals">
                  <figure>
                    <img src={meal.image} alt="" />
                  </figure>
                  <h3> {meal.title} </h3>

                  {/* Add and reduce quantity */}
                  <div className="add-reduce-quantity">
                    <div className="quantity-btn">
                      <button onClick={() => addToCart(meal)}>+</button>
                    </div>

                    <div className="quantity-input">
                      <input
                        type="text"
                        onChange={(event) => changeQuantity(event, meal)}
                        value={meal.quantity}
                      />
                    </div>

                    <div className="quantity-btn">
                      <button onClick={() => removeFromCart(meal)}>-</button>
                    </div>

                    <div className="delete-single-order">
                      <span onClick={() => deleteSingleOrderedMeal(meal)}>
                        x
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Total Price of an order */}
          <hr />
          <div className="total-price">
            {cart.length > 0 && <h2> Total Price = ${total} </h2>}
          </div>

          {/* Customer Delivery addrress verification */}
          <section className="customer-delivery-address-confirmation">
            <h3> {message} </h3>

            {/* Customer Delivery addrress checkbox */}

            <article className="checkbox-container">
              <label htmlFor="" className="checkbox-and-paragraph">
                <p className="delivery-address-paragraph">
                  If delivery address is the same as registration address, click
                  coninue. Otherwise, pleas uncheck the box next to this
                  paragraph and then fill ou the new delivery address.
                </p>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    defaultChecked
                    onChange={changeAddress}
                  />
                </div>
              </label>
            </article>

            {/* New form for new Delivery addrress  */}

            <article className="new-delivery-address">
              {!sameAddress && (
                <form action="" className="new-delivery-address-form">
                  <h3 className="title"> New Delivery Address </h3>

                  <div className="labels-and-inputs-container">
                    <div className="label-input">
                      <div>
                        <label htmlFor="street"> Street Name </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          defaultValue={user.info.streetName}
                          name="street"
                          id="street"
                        />
                      </div>
                    </div>

                    <div className="label-input">
                      <div>
                        <label htmlFor="houseNo"> House Number </label>
                      </div>
                      <div>
                        <input
                          type="number"
                          defaultValue={user.info.houseNumber}
                          name="houseNo"
                          id="houseNo"
                        />
                      </div>
                    </div>

                    <div className="label-input">
                      <div>
                        <label htmlFor="postalCode"> Postal Code </label>
                      </div>
                      <div>
                        <input
                          type="number"
                          defaultValue={user.info.zipCode}
                          name="postalCode"
                          id="postalCode"
                        />
                      </div>
                    </div>

                    <div className="label-input">
                      <div>
                        <label htmlFor="city"> City Name </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          defaultValue={user.info.cityName}
                          name="city"
                          id="city"
                        />
                      </div>
                    </div>

                    <div className="label-input">
                      <div>
                        <label htmlFor="state"> State Name </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          defaultValue={user.info.stateName}
                          name="state"
                          id="state"
                        />
                      </div>
                    </div>

                    <div className="label-input">
                      <div>
                        <label htmlFor="country"> Country Name </label>
                      </div>
                      <div>
                        <input
                          type="text"
                          defaultValue={user.info.countryName}
                          name="country"
                          id="country"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    disabled={cart.length < 3}
                    className="new-delivery-address-btn"
                  >
                    Next
                  </button>
                </form>
              )}
            </article>

            <div>
              {sameAddress && (
                <div className="same-delivery-address">
                  <button
                    onClick={submitOrder}
                    disabled={cart.length < 3}
                    className="new-delivery-address-btn"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </section>
        </section>
      )}
    </main>
  );
};

export default Cart;
