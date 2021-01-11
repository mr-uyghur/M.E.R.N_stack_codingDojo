import React from 'react'
import { Link } from '@reach/router';

const Display = props => {

   if(typeof props.id === 'string'){
    return (
        <div>
            <p>The word is {props.id}</p>  
            </div>
    )
   }

   return (
    <div>
    <p>The number is {props.id}</p>  
    </div>
   )
}

export default Display