import React, { useState } from 'react'
import Backdrop from './Backdrop'
import classes from '../UI/LightboxModal.module.scss'
const Lightbox = () => {
  const [Img, setImg] = useState(classes.container);

  const nextImgHandler = () => {
    if (Img === classes.container) {
      setImg(classes.container_two);
    } else if (Img === classes.container_two) {
      setImg(classes.container_three);
    } else if (Img === classes.container_three) {
      setImg(classes.container_four);
    }
  };

  const prevImgHandler = () => {
    if (Img === classes.container_four) {
      setImg(classes.container_three);
    } else if (Img === classes.container_three) {
      setImg(classes.container_two);
    } else if (Img === classes.container_two) {
      setImg(classes.container);
    }
  };

  return (
    <>
      <Backdrop />
      <div className={classes.lightbox}>
        <div className={`${Img}`}>
          <img src="images/icon-previous.svg" onClick={prevImgHandler} className={classes.prev} alt="previous" />
          <img src="images/icon-next.svg" onClick={nextImgHandler} className={classes.next} alt="next" />
        </div>

        <div className={classes.lightbox_thumbnails}>
          <div
            className={`${classes.lightbox_thumbnail_one}  ${Img === classes.container && classes.lightbox_thumbnail_active}`}>
          </div>
          <div
            className={`${classes.lightbox_thumbnail_two}  ${Img === classes.container_two && classes.lightbox_thumbnail_active}`}>
          </div>
          <div
            className={`${classes.lightbox_thumbnail_three}  ${Img === classes.container_three && classes.lightbox_thumbnail_active}`}>
          </div>
          <div
            className={`${classes.lightbox_thumbnail_four}  ${Img === classes.container_four && classes.lightbox_thumbnail_active}`}>
          </div>
        </div>
      </div>
    </>
  )
}
export default Lightbox;
