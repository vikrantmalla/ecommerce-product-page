import React, { useState } from 'react'


export const CartContext = React.createContext();


const CartProvider = (props) => {
  const [itemCount, setItemCount] = useState(0);  
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

// increment no
  const addItemHandler = () => {
    setItemCount(itemCount + 1);

    if (itemCount >= 5) {
      setItemCount(5);
    }
  };
  // decrement no
  const removeItemHandler = () => {
    setItemCount(itemCount - 1);

    if (itemCount <= 0) {
      setItemCount(0);
    }
  };
  //add to cart button
  const addToCartHandler = () => {
    if (itemCount >= 1) {
      setAddedToCart(true);
    }
    setCartTotal(cartTotal + itemCount);
  };
  //remove items form cartmodal
  const deleteItemHandler = () => {
    setCartTotal(cartTotal - 1);
    if (cartTotal <= 1) {
      setAddedToCart(false);
    }
  };
  //checkout from cartmodal
  const checkoutHandler = () => {
    setCartTotal(0);
    setItemCount(0);
    setAddedToCart(false);
  };


  const cartContext = {
    itemCount, cartTotal, addItemHandler, removeItemHandler, addToCartHandler,  addedToCart, deleteItemHandler, checkoutHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
