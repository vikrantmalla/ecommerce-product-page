import React from "react";
import classes from "../UI/MobileMenu.module.scss";

const Menu = () => {
  return (
    <div className={classes.sidebar}>
      <ul>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
export default Menu;