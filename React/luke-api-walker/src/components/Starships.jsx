import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'


const Starships = props => {
    const { name ,model, manufacturer, crew, hyperdrive_rating  }  = props.starships

    return (
        <div>
            <h2> {name}</h2>
            <ul>
                <li> Model: {model}</li>
                <li>Manufacturer: {manufacturer}</li>
                <li> Crew: {crew}</li>
                <li>Hyperdrive Rating: {hyperdrive_rating}</li>
            </ul>
        </div>
    )
}

export default Starships 