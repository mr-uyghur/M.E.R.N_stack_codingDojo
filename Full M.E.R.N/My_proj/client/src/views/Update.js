import React, { useEffect, useState } from 'react'
import { Router,navigate } from '@reach/router';
import { withRouter } from 'react-router';
import axios from 'axios';
export default props => {

    const { id } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setDescription(res.data.description);
            })
    }, [])
    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/people/' + id, {
            firstName,
            lastName,
            description
        })
            .then(navigate(`/product/${id}`));
    }
   
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updatePerson}  >
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="firstName" 
                    value={firstName} 
                    onChange={(e) => { setFirstName(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="lastName"
                    value={lastName} 
                    onChange={(e) => { setLastName(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="lastName"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                
                <input type="submit" />
               
            </form>
        </div>
    )
}