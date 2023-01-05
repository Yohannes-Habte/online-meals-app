<section className="cart-container">
        <h1 className="cart-title"> Order Summary </h1>
        {cart.length > 0 ? (
          <div className="ordered-meals">
            {cart.map((meal, index) => {
              return (
                <article key={index} className="ordered-meal">
                  <figure className="cart-meal-image">
                    <img src={meal.image} alt="" />
                  </figure>
                  <div className="cart-meal-title-price">
                    <h3 className="cart-meal-title"> {meal.title} </h3>
                    <p className="cart-meal-price"> ${meal.price} </p>
                  </div>
                  <div className="cart-btns-quantity">
                    <button className="cart-btn">-</button>
                    <span>quantity</span>
                    <button className="cart-btn">+</button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <article className="cart-without-order">
            <h1 className="cart-title">
              Welcome to Order Delicious and Healthy Food
            </h1>
            <p>
              Enjoy cooking fresh meals at home and free yourself from the
              stress of grocery shopping. Get the best fresh ingredients and
              delicious recipes delivered to your door at your convenience. Free
              Nationwide Delivery. 100% Fresh Ingredients.
            </p>
          </article>
        )}
      </section>