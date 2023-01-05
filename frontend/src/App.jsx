import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./views/aboutPage/About";
import Cart from "./views/cartPage/Cart";
import ContactForm from "./views/contactFormPage/ContactForm";
import Contact from "./views/contactPage/Contact";
import Home from "./views/homePage/Home";
import Login from "./views/loginPage/Login";
import Meal from "./views/mealPage/Meal";
import Register from "./views/registerPage/Register";
import StripeCancel from "./views/stripePage/StripeCancel";
import StripeSuccess from "./views/stripePage/StripeSuccess";
export const myContext = React.createContext();

const App = () => {
  // Local storage for user data and cart items respectively
  const userData = JSON.parse(localStorage.getItem("data")) || null;
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  // State Variables
  const [user, setUser] = useState([userData]);
  const [meals, setMeals] = useState([]);
  const [cart, setCart] = useState([cartItems]);
  const [orders, setOrders] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [click, setClick] = useState(false);

 // Function that handles the user data
 useEffect(() => {
  const fetchUserData = async () => {
    const data = JSON.parse(localStorage.getItem("data"));

    if(data) {
      const settings = {
        method: "POST",
        headers: {
          token: data.token,
        }
      }

      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/register", settings);
      const result = await response.json();

      try{
        if(response.ok) {
          const now = new Date();
          const tokenExpiry = new Date(now.getTime() + 1000 * 60 * 60);
          setLoggedIn(true);
          setUser({
            id: result.data._id,
            info: result.data,
            expiry: tokenExpiry.toISOString(),
            token: result.token,
          });
          setToken(result.token);
        } else {
          throw new Error(result.message);
        }
      }catch(err){
        console.log(err);
      }
    };
  };
  fetchUserData();
 }, [])

  // Function to fetch meals data from the backend and display in the frontend
  useEffect(() => {
    const fetchMealsData = async () => {
      const response = await fetch(process.env.REACT_APP_SERVER_URL + "/users/verifyToken");
      const result = await response.json();

      try {
        if (response.ok) {
          setMeals(result);
        } else {
          throw new Error(result.message);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchMealsData();
  }, []);

  // useEffect that will be used to store user data and cart data in the local storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(user));
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [user, cart])

   //Function that handle "click" state variable
   const handleClick = () => {
    setClick(!click);
  };

  // =======================================================================
  // Function to add order to the cart
  // ========================================================================
  const addToCart = (clickedMeal) => {
    const foundMeal = meals.find((meal) => meal._id === clickedMeal._id);

    if (foundMeal) {
      const preCheck = foundMeal.quantity + 1;
      if (preCheck <= 5) {
        foundMeal.quantity = foundMeal.quantity + 1;
        setCart([...cart]);
      } else {
        alert("Maximum order for one type of meal is five!");
      }
    } else {
      if (cart.length + 1 > 3) {
        alert("Reached Maximum Quantity of Meals");
        return;
      }
      setCart([...cart, { ...clickedMeal, quantity: 1 }]);
    }
  };

  // =======================================================================
  // Function to remove from cart
  // ========================================================================
  const removeFromCart = (clickedMeal) => {
    const foundMeal = meals.find((meal) => meal._id === clickedMeal._id);
    if (foundMeal) {
      const preCheck = foundMeal.quantity - 1;
      if (preCheck > 0) {
        foundMeal.quantity = foundMeal.quantity - 1;
      }
      setCart([...cart]);
    } else {
      alert("Minimum Quantity is 1");
    }
  };

  // =======================================================================
  // Function to Change Quantity order in the cart page
  //========================================================================
  const changeQuantity = (event, clickedMeal) => {
    const foundMeal = cart.find((meal) => meal._id === clickedMeal._id);
    foundMeal.quantity = Number(event.target.value);
    setCart([...cart]);
  };

  return (
    <myContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setLoggedIn,
        meals,
        setMeals,
        cart,
        setCart,
        orders,
        setOrders,
        click,
        setClick,
        handleClick,
        addToCart,
        removeFromCart,
        changeQuantity,
        token,
        setToken,
      }}
    >
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/meals" element={<Meal />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/testimonials" element={<ContactForm />} />
            <Route path="/contact/foods" element={<ContactForm />} />
            <Route path="/contact/others" element={<ContactForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/stripe-success" element={<StripeSuccess />} />
            <Route path="/stripe-cancel" element={<StripeCancel />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </myContext.Provider>
  );
};

export default App;
