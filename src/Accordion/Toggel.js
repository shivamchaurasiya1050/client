import React from "react";
import { useState } from "react";
import  question  from './Question';

const Toggel = () => {
    const [data, setData] = useState(question);
    return (
        <>
            
            {
            data.map((curElem)=>{
                return curElem.id;
            })

        }
        </>

    )
}
export default Toggel;