import React from 'react'
import { Link } from '@reach/router';

const Dashboard = props => {
    
    const style = {
        color:props.color,
        background:props.background
    }

    return (
        <div>
            <p style = {style}>The word is: {props.str}</p>
            </div>
    )
}

export default Dashboard