import React, {useReducer} from 'react';
import counterReducer from './DiscountReducer';



function Discount2(props) {
    let [state, dispatch] = useReducer(counterReducer, 1)

    return(
        <div>
            <h1>Discount Increment using Reducer</h1>
            <h1>Reducer Discount Value: {state}</h1>
            <button onClick={()=>dispatch('INCREMENT')}>Reducer Increment</button>
        </div>
    )
}

export default Discount2;