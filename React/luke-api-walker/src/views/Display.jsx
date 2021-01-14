import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import WrongDroids from '../components/WrongDroids'
import Person from '../components/Person'
import Planets from '../components/Planets'
import Films from '../components/Films'
import Species from '../components/Species'
import Starships from '../components/Starships'

const Display = props=>{
    const {category, id} = props
    const [error, setError] = useState(false)
    const [data, setData] = useState({})
    const [homeWorldId, setHomeWorldId] = useState(null)
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response =>{
            // const {name, height, mass, hair_color, skin_color} = response.data;
            // setData({name, height, mass, hair_color, skin_color});
            setData(response.data)
            setError(false)
            if(category.toLowerCase() === 'people'){
                setHomeWorldId(response.data.homeworld.slice(29).slice(0,-1))
            }
        })
        .catch(err => setError(true)) ; 
    },[category, id])

    return(
        <div>
            {
                error?
                <WrongDroids /> : category.toLowerCase() === "people" ? 
                <Person  person = {data} homeWorldId = {homeWorldId}/> : category.toLowerCase() === 'planets' ?
                <Planets planet={data}/> : category.toLowerCase() === 'films' ?
                <Films film = {data}/> : category.toLowerCase() === 'species' ?
                <Species species = {data}/> : category.toLowerCase() === 'starships'?
                <Starships starships = {data}/> : ''
                
            }
            
            </div>
    )
}

export default Display