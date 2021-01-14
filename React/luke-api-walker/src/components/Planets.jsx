import React, {useState, useEffect} from 'react'
import {Link} from '@reach/router'


const Planets = props =>{
    const {name,climate, terrain, surface_water, population} = props.planet

    return (
        <div>
            <h2>{name} </h2>
            <ul>
                <li> Climate:{climate} </li>
                <li>Terrain: {terrain}</li>
                <li> Surface Water: {surface_water}</li>
                <li>Population: {population}</li>
                </ul>
            </div>
    )
}

export default Planets