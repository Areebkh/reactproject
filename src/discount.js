
import React, { useState, useContext, useReducer } from "react";
import discountContext from "./DiscountContext";

function Discount(props) {
  
    let discountValue = useContext(discountContext)
    return(
        <div>
            <h1>Original Price was: {props.originalPrice}</h1>
            <h1>Discount Price is: Rs.{props.discountPrice}</h1>
            <h1>Discount offered is: {props.discountPercentage}</h1>
            <h1>Increment using useContext.</h1>
            <h2>discountContext value is: {discountValue}</h2>
            <button onClick={()=>{discountValue[1](++discountValue[0])}}>Context Increment</button>
        </div>
    );
    }

export default Discount;

