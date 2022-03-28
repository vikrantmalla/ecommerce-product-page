import React, { useReducer } from 'react'
import reducer from "../reducers/cartReducer"

export const CartContext = React.createContext();

const initalState = {
  itemCount: 0,
  addedToCart: false,
  cartTotal: 0
}

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  // increment no
  const addItemHandler = () => {
    return dispatch({
      type: "ADD_ITEM"
    })
  };
  // decrement no
  const removeItemHandler = () => {
    return dispatch({
      type: "REMOVE_ITEM"
    })
  };
  //add to cart button
  const addToCartHandler = () => {
    return dispatch({
      type: "ADD_TO_CART"
    })
  };
  //remove items form cartmodal
  const deleteItemHandler = () => {
    return dispatch({
      type: "DELETE_FROM_CART"
    })
  };
  //checkout from cartmodal
  const checkoutHandler = () => {
    return dispatch({
      type: "CHECKOUT"
    })
  };


  const cartContext = {
    ...state, addItemHandler, removeItemHandler, addToCartHandler, deleteItemHandler, checkoutHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
