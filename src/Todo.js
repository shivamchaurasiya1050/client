import React, { useEffect, useState } from "react";
import Listtodo from "./Listtodo";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Clock from 'react-live-clock';
import axios from "axios"

const Todo = () => {
    const [inputlist, setInputList] = useState();
    const [Item, setItem] = useState([]);
    const [data,setData] =useState();
    useEffect(()=>{
        const getData =async ()=>{
            const res = await axios.get("http://localhost:8000/api");
            setData(res.data)
            
        }      
        getData();
    })

    const itemEvent = (event) => {
        setInputList(event.target.value)

    };
    const listOfItems = () => {
        setItem(oldItem => {
            return [...oldItem, inputlist]

        });
        setInputList('');

    };
    const deleteItem = (id) => {

        setItem((oldItem) => {
            return oldItem.filter((arrElem, index) => {
                return index !== id;
            });
        });

    };


    return (
        <>
        
            <div className="main_div">
            
                <div className="center_div">
                <Clock format={'HH:mm:ss'}  ticking={true}  />
                    <br />
                    <h1>ToDo list </h1>
                    <h1>{data}</h1>
                    <input
                        type='text' placeholder="Add  a Items"
                        value={inputlist}
                        onChange={itemEvent}
                    />
                    <button onClick={listOfItems}><LibraryAddIcon/></button>
                    <br />
                    <ul>
                        {/* <li> {inputlist} </li> */}
                        {Item.map((itemval, index) => {
                            return (
                                <Listtodo
                                    key={index}
                                    id={index}
                                    text={itemval}
                                    onSelect={deleteItem}

                                />
                            )

                        })}

                    </ul>


                </div>

            </div>
        </>
    )
}

export default Todo;