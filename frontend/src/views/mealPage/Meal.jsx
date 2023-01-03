import React from "react";
import { useContext } from "react";
import { myContext } from "../../App";
import "./Meal.scss";

const Meal = () => {
  const { meals, addToCart, removeFromCart } = useContext(myContext);

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
              <button onClick={() => addToCart(meal)} className="meal-btn">Add to Cart</button>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Meal;
