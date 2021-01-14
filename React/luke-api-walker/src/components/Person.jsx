import React, {useState, useEffect} from 'react'
import {Link} from '@reach/router'


const Person = props =>{
    const {name, height, mass, hair_color, skin_color} = props.person
    
    return (
        <div>
            <h2>{name} </h2>
            <ul>
                <li> Height: {height}cm</li>
                <li>Mass: {mass} kg</li>
                <li> Hair Color: {hair_color}</li>
                <li>Skin color: {skin_color}</li>
                <li>Home world:<Link to = {`/planets/${props.homeworld}`}>HomeworldId </Link></li>
                </ul>
            </div>
    )
}

export default Person