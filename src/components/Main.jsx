import React, { useContext, useState } from "react";
import classes from './Main.module.scss'
import LightboxModal from "./UI/LightboxModal";
import {CartContext} from "../context/CartContext"

const Main = () => {

    const [image, setImage] = useState(classes.container);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
    const {  itemCount,addItemHandler, removeItemHandler, addToCartHandler, } = useContext(CartContext);
  
    const nextImgHandler = () => {
      if (image === classes.container) {
        setImage(classes.container_two);
      } else if (image === classes.container_two) {
        setImage(classes.container_three);
      } else if (image === classes.container_three) {
        setImage(classes.container_four);
      }
    };
  
    const prevImgHandler = () => {
      if (image === classes.container_four) {
        setImage(classes.container_three);
      } else if (image === classes.container_three) {
        setImage(classes.container_two);
      } else if (image === classes.container_two) {
        setImage(classes.container);
      }
    };
  
    const thumbnailOneHandler = () => {
      setImage(classes.container);
    };
  
    const thumbnailTwoHandler = () => {
      setImage(classes.container_two);
    };
  
    const thumbnailThreeHandler = () => {
      setImage(classes.container_three);
    };
  
    const thumbnailFourHandler = () => {
      setImage(classes.container_four);
    };
  
    const lightboxHandler = () => {
      setIsLightboxOpen((prevState) => !prevState);
    };
  
    return (
      <main>
        <div className={classes.mobile_container}>
          <div className={`${image}`}>
            <img src="images/icon-previous.svg" onClick={prevImgHandler} className={classes.prev} alt="previous" />
            <img src="images/icon-next.svg" onClick={nextImgHandler} className={classes.next} alt="next" />
          </div>
        </div>
  
        {isLightboxOpen && (
          <>
            <img src="images/icon-close.svg" onClick={lightboxHandler} className={classes.lightbox_close} alt="close"/>
            <LightboxModal />
          </>
        )}
        <div className={classes.container_thumbnails}>
          <div onClick={lightboxHandler} className={`${image}`}>
          <img src="images/icon-previous.svg" onClick={prevImgHandler} className={classes.prev} alt="previous" />
            <img src="images/icon-next.svg" onClick={nextImgHandler} className={classes.prev} alt="next" />
          </div>
  
          <div className={classes.thumbnails}>
            <div
              onClick={thumbnailOneHandler}
              className={`${classes.thumbnail_one}  ${
                image === classes.container && classes.thumbnail_active
              }`}
            ></div>
            <div
              onClick={thumbnailTwoHandler}
              className={`${classes.thumbnail_two}  ${
                image === classes.container_two && classes.thumbnail_active
              }`}
            ></div>
            <div
              onClick={thumbnailThreeHandler}
              className={`${classes.thumbnail_three}  ${
                image === classes.container_three && classes.thumbnail_active
              }`}
            ></div>
            <div
              onClick={thumbnailFourHandler}
              className={`${classes.thumbnail_four}  ${
                image === classes.container_four && classes.thumbnail_active
              }`}
            ></div>
          </div>
        </div>
  
        <section>
          <h1>Sneaker Company</h1>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        <div className={classes.price}>
            <h3>
              $125.00 <span>50%</span>
            </h3>
            <h4>$250.00</h4>
          </div>
          <div className={classes.number_add}>
            <div className={classes.number}>
              <button onClick={removeItemHandler}>
                <img src="images/icon-minus.svg" alt="minus-icon" />
              </button>
              { itemCount }
              <button onClick={addItemHandler}>
                <img src="images/icon-plus.svg" alt="plus-icon" />
              </button>
            </div>
            <button className={classes.add} onClick={addToCartHandler}>
              <img src="../images/icon-cart2.svg" alt="cart2-icon" /> Add to cart
            </button>
          </div>
        </section>
      </main>
    );
  };
  
  export default Main;
