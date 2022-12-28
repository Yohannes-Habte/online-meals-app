import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './views/aboutPage/About';
import Cart from './views/cartPage/Cart';
import ContactForm from './views/contactFormPage/ContactForm';
import Contact from './views/contactPage/Contact';
import Home from './views/homePage/Home';
import Login from './views/loginPage/Login';
import Meal from './views/mealPage/Meal';
import Register from './views/registerPage/Register';
export const myContext = React.createContext();

const App = () => {
  // State Variables
  const [user, setUser] = useState([]);
  const [meal, setMeal] = useState([]);
  const [click, setClick] = useState(false);

  //Function that handle "click" state variable
  const handleClick = () => {
    setClick(!click)
  }


  return (
    <myContext.Provider value={{user, setUser, meal, setMeal, click, setClick, handleClick}}>
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/meals' element={ <Meal /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/contact/service' element={ <ContactForm /> } />
          <Route path='/contact/food' element={ <ContactForm /> } />
          <Route path='/contact/other' element={ <ContactForm /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
    </myContext.Provider>
  )
}

export default App;