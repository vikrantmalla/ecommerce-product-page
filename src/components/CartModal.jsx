import React, { useContext } from "react";
import classes from "./CartModal.module.scss";
import {CartContext} from "../context/CartContext"

const Cart = () => {
  const { cartTotal,deleteItemHandler,checkoutHandler } = useContext(CartContext);


  return (
    <div className={classes.cart_modal}>
      <header className={classes.header}>
        <h1>Cart</h1>
      </header>
      <main>
        {cartTotal === 0 ? (
          <p className={classes.cart_empty}>Your cart is empty.</p>
        ) : (
          <div className={classes.cart_filled}>
            <div className={classes.cart_filled_top}>
              <img
                className={classes.thumbnail}
                src="images/image-product-1-thumbnail.jpg"
                alt="product-thumbnail"
              />
              <div className={classes.details}>
                <p className={classes.details_heading}>Autumn Limited Edition...</p>
                <p>
                  $125.00 x {cartTotal}{" "}
                  <span>{`$${125 *cartTotal}.00`}</span>
                </p>
              </div>
             <img onClick={deleteItemHandler} src="../images/icon-delete.svg" alt="remove-icon"/>
            </div>
            <button onClick={checkoutHandler}  className={classes.checkout}>
              Checkout
            </button>
          </div>
        )}
      </main>
    </div>
  );
};
export default Cart