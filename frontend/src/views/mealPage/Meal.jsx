import React from "react";
import { useContext } from "react";
import { myContext } from "../../App";
import "./Meal.scss";

const Meal = () => {
  const { meals } = useContext(myContext);
  return (
    <main className="meals-page">
      <h1 className="meals-title"> Meals page</h1>
      <section className="meals-container">
        {meals.map(({ image, title, price, description }, index) => {
          return (
            <article key={index} className="meal">
              <figure className="meal-image">
                <img src={image} alt="" />
              </figure>
              <div className="meal-title-price">
                <h3 className="meal-title">{title}</h3>
                <p className="meal-prices"> ${price} </p>
              </div>
              <p className="meal-description"> {description} </p>
              <button className="meal-btn">Add to Cart</button>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Meal;
