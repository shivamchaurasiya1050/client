import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";

const Amazon =()=>{
    

        return (
            <>
          <Cards
            key={Sdata[1].id}
            imgsrc={Sdata[1].imgsrc}
            tittle={Sdata[1].tittle}
            sname={Sdata[1].sname}
            link={Sdata[1].link} 
           
            // key={Sdata[2].id}
            // imgsrc={Sdata[2].imgsrc}
            // tittle={Sdata[2].tittle}
            // sname={Sdata[2].sname}
            // link={Sdata[2].link} 
            
            // key={Sdata[3].id}
            // imgsrc={Sdata[3].imgsrc}
            // tittle={Sdata[3].tittle}
            // sname={Sdata[3].sname}
            // link={Sdata[3].link} 
            
            // key={Sdata[4].id}
            // imgsrc={Sdata[4].imgsrc}
            // tittle={Sdata[4].tittle}
            // sname={Sdata[4].sname}
            // link={Sdata[4].link} 
            />

            </>
        );
      }


export default Amazon;