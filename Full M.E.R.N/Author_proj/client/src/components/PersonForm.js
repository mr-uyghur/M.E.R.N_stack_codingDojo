import React, { useState } from 'react'
import { Router,Link,navigate } from '@reach/router';
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [firstName, setFirstName] = useState(""); 
   
    const [errors, setErrors] = useState([]); 
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            firstName,
            
        })
            .then(res=>{
                console.log(res);
            setFirstName(res.data);
            navigate('/');
            }
            )
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }) 
    }
    //onChange to update firstName and lastName
    return (
        <div>
            <Link to = "/">
                home
            </Link>
           
        <form onSubmit={onSubmitHandler}>
             {errors.map((err, index) => <p key={index}>{err}</p>)}
            
            <fieldset>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
            </p>
            </fieldset>
          
            <input type="Submit" value="Create"/>
            
            
        </form>
        <Link to = "/">
                <button>Cancel </button>
            </Link>
        </div>
    )
}