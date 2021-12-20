import React from "react";
import "../UI/Backdrop.scss";

const Background = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};
export default Background;
