import React, {useState} from 'react';
import './App.css';
import Discount from './discount.js';
import Discount2 from './Discount2.js';
import discountContext from './DiscountContext';


function App() {
  let [discount, setDiscount] = useState(2500)
  let [Discounted, setDiscounted] = useState(true)
  let discountState = useState(1)

  return (
    <discountContext.Provider value={discountState}>
      <div className={`App box ${Discounted ? 'bag' : '' }`}>
        <h1>Simple React Increment</h1>
        <button onClick={()=>setDiscount(discount + 100)}>Increase discount</button>
        <button onClick={()=>setDiscount(discount - 100)}>Decrease discount</button>
        <button onClick={()=>setDiscounted(!Discounted)}>basit?</button>
        <Discount originalPrice='Rs.5000' discountPrice={discount} discountPercentage='50%' />
        <Discount2 />
      </div>
    </discountContext.Provider>
  );  
}

export default App;
