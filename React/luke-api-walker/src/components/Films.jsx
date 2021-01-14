import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'


const Films = props => {
    const { title, director, opening_crawl } = props.film
    
    return (
        <div>
            <h2>{title} </h2>
            <ul>
                <li> Director: {director}</li>

                <li>
                    {opening_crawl}
                </li>

            </ul>
        </div>
    )
}

export default Films