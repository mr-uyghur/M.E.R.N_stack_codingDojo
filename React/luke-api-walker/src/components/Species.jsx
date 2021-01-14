import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'


const Species = props => {
    const { name, avg_height, classification, eye_colors, hair_colors } = props.species

    return (
        <div>
            <h2>{name} </h2>
            <ul>
                <li> Average height: {avg_height}cm</li>
                <li>classification: {classification}</li>
                <li> Eye Colors:{eye_colors}</li>
                <li> Hair Colors: {hair_colors}</li>
            </ul>
        </div>
    )
}

export default Species