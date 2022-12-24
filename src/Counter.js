import React, { useState } from "react";
// import "./index.css";




const Counter = () => {

    const state = useState();
    const [count, setCount] = useState(0);
    const IncNum = () => {
        setCount(count + 1);

    };
    const DecNum = () => {
        if (count > 0) {

            setCount(count - 1);
        }
        
    }
    const Reset = () => {
        setCount(0);
    }
    return (
        <>
            <h1 className="headding"> {count} </h1>
            <button onClick={IncNum}>IncNum + </button>
            <button onClick={Reset}>Reset</button>
            <button onClick={DecNum}>DecNum - </button>
        </>

    )
}

export default Counter;


