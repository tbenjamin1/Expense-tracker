import React from "react";
import './Card.css'

function Card(props) {
  const classes = 'card '+ props.className;
  return (

    <div className="container">

<div className={classes}>{props.children}</div>;
  </div>
  )
  
  
  
}

export default Card;
