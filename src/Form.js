import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: ''

    });
    // const [fullName, setfullName]=useState()
    // const [lastName, setlastName]=useState('');
    // const [lastNamenew,setlastNamenew]=useState()
    const inputEvent = (event) => {
        //    setName(event.target.value);
        // const value = event.target.value;
        // const name = event.target.name;
        const{value,name}=event.target;

        setName((preValue) => {
            return{

            ...preValue,
            [name]: value,
            }
            // if (name === "fname") {
            //     return {
            //         fname: value,
            //         lname: preValue.lname,

            //         email: preValue.email,
            //         phone: preValue.phone
            //     };

            // } else if (name === "lname") {
            //     return {
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phone: preValue.phone
            //     }
            // } else if (name === "email") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         phone: preValue.fname
            //     }
            // } else if (name === "phone") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: value
            //     }
            // }

        });

    };
    // const inputEventTwo=(event)=>{
    //     setlastName(event.target.value);
    // }

    const onSubmit = (event) => {
        event.preventDefault();
        alert("form submitted");
        // setfullName(name)
        // setlastNamenew(lastName )
    }
    return (
        <>


            <div className="main_div">
                <form onSubmit={onSubmit}>
                    <div>

                        <h1>Hello {name.fname} {name.lname}</h1>
                        <p>{name.email}</p>
                        <p>{name.phone}</p>
                        <input
                            type="text"
                            placeholder="Enter Your FristName:"
                            name="fname"
                            onChange={inputEvent}
                            value={name.fname} />

                        <input
                            type="text"
                            placeholder="Enter Your LastName:"
                            name="lname"
                            onChange={inputEvent}
                            value={name.lname} />


                        <input
                            type="text"
                            placeholder="Enter Your Email:"
                            name="email"
                            onChange={inputEvent}
                            value={name.email} />


                        <input
                            type="text"
                            placeholder="Enter Your Phone No. :"
                            name="phone"
                            onChange={inputEvent}
                            value={name.phone} />

                        <button type="submit">Submit Me </button>
                    </div>
                </form>
            </div>




        </>
    )
}

export default Form;