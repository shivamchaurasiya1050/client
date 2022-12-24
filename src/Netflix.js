import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";


const Netflix =() =>{
    return(
        <Cards
      key={Sdata[6].id}
      imgsrc={Sdata[6].imgsrc}
      tittle={Sdata[6].tittle}
      sname={Sdata[6].sname}
      link={Sdata[6].link} />


    )
}

export default Netflix;