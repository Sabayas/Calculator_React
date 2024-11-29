import { useState } from "react"
import React  from "react"



function calculator(){
  
    let [count , setCount] = useState();


    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increment}>Increment</button>
    </div>
}
export default calculator