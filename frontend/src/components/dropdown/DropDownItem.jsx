import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { myContext } from "../../App";
import { ContactHeaderDropDown } from "../../data/Data";
import "./DropdownItem.scss";

const DropDownItem = () => {
  // State variables
  const { click, setClick, handleClick } = useContext(myContext);

  // Function that handles the click on each category;
  const onClick = () => {
    setClick(false)
  }

  return (
    <section className="drop-down-container">
      <ul onClick={handleClick} className={click ? "banner-dropdown clicked" : "banner-dropdown"} >
        {ContactHeaderDropDown.map((item, index) => {
          return (
            <li key={index} className="list-item" >
              <NavLink to={item.path} onClick={onClick} className={item.className}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DropDownItem;
