import React from "react";
const Cards = (props) => {
    return (
        <div className='cards'>
            <div className='card'>
            <img src={props.imgsrc} alt='' className='card_img'/>
                <div className='card_info'>
                    <span className='card_category'>{props.sname}</span>
                    <h3 className='card_tittle'>{props.tittle} </h3>
                    <a href={props.link} target='_blank'>
                        <button>Watch Now</button>
                    </a>

                </div>

            </div>

        </div>
    )
}
export default Cards;