import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import WrongDroids from '../components/WrongDroids'

const Display = props=>{
    const {category, id} = props
    const [error, setError] = useState(false)
    const [data, setData] = useState({})

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response =>{
            // const {name, height, mass, hairColor, skinColor} = response.data;
            setData(response.data);
            setError(false)
        })
        .catch(err => setError(true)) ; 
    },)

    return(
        <div>
            {
                error?
                <WrongDroids /> : ''
            }
            
            </div>
    )
}

export default Display