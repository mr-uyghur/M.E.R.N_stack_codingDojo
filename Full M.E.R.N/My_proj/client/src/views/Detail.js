import React, { useEffect, useState } from 'react'
import { Router,Link } from '@reach/router';
import axios from 'axios';
export default props => {
    const [person, setPerson] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson(res.data))
    }, [])
    return (
        <div>
            <h1> {person.firstName}</h1>
            <p> {person.lastName}$</p>
            <p>{person.description}</p>
            <Link to={"/people/" + person._id + "/edit"}>
              <button>  Edit </button>
            </Link>
        </div>

    )
}