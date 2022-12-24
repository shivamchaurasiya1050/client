import React, { useState } from "react";

 const Bgchange =()=>{
    const purple="#8e44ad";
    const click="Click Me"
    const [bg, setBg]=useState(purple);
    const [name,setName]=useState(click)
    const Ccolor=()=>{
        let newBg="#34495e";
        let newClick="OUCH!!:";
        setBg(newBg);
        setName(newClick);

        
        

    }
    

    return(
        <><div style={{backgroundColor:bg}}>
        <h1 ></h1>
        <button onClick={Ccolor}>{name}</button>
        </div>
        </>
    )
 }

 export default Bgchange;