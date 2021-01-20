import React, { useEffect, useState } from 'react'
import { Router,navigate,Link } from '@reach/router';

import axios from 'axios';
export default props => {

    const { id } = props;
    const [firstName, setFirstName] = useState('');
    const [errors, setErrors] = useState([]); 
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setFirstName(res.data.firstName);
                
            })
    }, [])
    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/people/' + id, {
            firstName,
        })
            .then(navigate(`/`))
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
   
    return (
        <div>
            <Link to = "/">
                home
            </Link> <br/>
            add a new author
            <form onSubmit={updatePerson}  >
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="firstName" 
                    value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
                </p>
    
                
                <input type="submit" />
               
            </form>
            <Link to = "/">
                <button>Cancel </button>
            </Link>
        </div>
    )
}