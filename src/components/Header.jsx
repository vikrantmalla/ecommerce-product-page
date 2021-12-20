import React, { useState, useContext } from "react";
import classes from "./Header.module.scss";
import MobileMenu from "./UI/MobileMenu";
import Backdrop from "./UI/Backdrop";
import CartModal from "./CartModal";
import { CartContext } from "../context/CartContext";

const Header = () => {
  //mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //cart state
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { addedToCart, cartTotal } = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const cartHandler = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  return (
    <header>
      {isMenuOpen && (
        <>
          <img className={classes.menu_clicked} src="images/icon-close.svg" onClick={toggleMenu} alt="close-icon"/>
          <MobileMenu />
          <Backdrop onClose={toggleMenu} />
        </>
      )}
      {!isMenuOpen && (
        <img className={classes.menu} onClick={toggleMenu} src="images/icon-menu.svg" alt="menu-icon" />
      )}
      <div className={classes.headerItem1}>
        <img className="logo" src="images/logo.svg" alt="Sneakers Logo" />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        {isCartOpen && <CartModal />}

        <div className={classes.headerItem2}>
          <div className={classes.shoppingCart}>
            <img className={classes.cart} onClick={cartHandler} src="images/icon-cart.svg" alt="cart-icon" />
            {addedToCart && (
              <span className={classes.badge}>{cartTotal}</span>
            )}
          </div>
          <img className={classes.avatar} src="images/image-avatar.png" alt="user-avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;