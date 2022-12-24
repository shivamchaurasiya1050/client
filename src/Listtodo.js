import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const Listtodo = (props) => {

    return (
        <>
            <div className="todo_style">
            
                {/* <i class="fa fa-times" aria-hidden="true" */}
                <DeleteForeverIcon  className="fa fa-times" 
                    onClick={() => {props.onSelect(props.id);}} />
                <li> {props.text} </li>
            </div>
        </>
    )
}
export default Listtodo;