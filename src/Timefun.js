import React, { useState } from "react";



const Timefun=()=>{
    let newTime=new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(newTime);
    const Crrtime=()=>{
        let newTime=new Date().toLocaleTimeString();
        setCtime(newTime);



    };
    setInterval(Crrtime,1000);
    return(
        
        <>
        <h1>{ctime}</h1>
        {/* <button onClick={Crrtime}>Set-time</button> */}
        
        </>
    )
}

export default Timefun;