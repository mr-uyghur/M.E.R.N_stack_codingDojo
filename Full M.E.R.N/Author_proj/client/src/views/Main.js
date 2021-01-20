

import React, { useEffect, useState } from 'react'
import { Router,Link } from '@reach/router';
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const [person, setPerson] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => {
                setPeople(res.data);
                setLoaded(true);
            });
    }, []);


    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }

    return (
        <div>
            <Link to="/new">
                <a> Create new</a>
            </Link>


            {loaded && <PersonList people={people} removeFromDom={removeFromDom}  /> }
            
        </div>
    )
}
