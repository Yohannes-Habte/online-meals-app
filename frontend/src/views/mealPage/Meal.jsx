import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../App";
import "./Meal.scss";

const Meal = () => {
  // Navigate to login if the user is not logged in
  const navigate = useNavigate();
  const { meals, cart, setCart, loggedIn } = useContext(myContext);

  const addToCart = (clickedMeal) => {
    let foundMeal = cart.find((elem) => elem._id === clickedMeal._id);

    if (!loggedIn) {
      alert("Please login");
      navigate("/login");
    } else {
      if (foundMeal) {
        foundMeal.quantity += 1;
        setCart([...cart]);
      } else {
        if (cart.length + 1 > 3) {
          alert("Reached Maximum Quantity of Meals");
          return;
        }
        setCart([...cart, { ...clickedMeal, quantity: 1 }]);
      }
    }
  };

  return (
    <main className="meals-page">
      <h1 className="meals-title"> Meals page</h1>
      <section className="meals-container">
        {meals.map((meal, index) => {
          return (
            <article key={index} className="meal">
              <figure className="meal-image">
                <img src={meal.image} alt="" />
              </figure>
              <div className="meal-title-price">
                <h3 className="meal-title">{meal.title}</h3>
                <p className="meal-prices"> ${meal.price} </p>
              </div>
              <p className="meal-description"> {meal.description} </p>
              <button onClick={() => addToCart(meal)} className="meal-btn">
                Add to Cart
              </button>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Meal;
