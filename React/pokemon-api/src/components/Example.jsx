import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Example = (props) => {
    // const [people, setPeople] = useState([]);
    
    const { pokemon, setPokemon } = props
    
    const onClick = e => {
        e.preventDefault()
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(response => {
            let results = response.data.results.map(p => p.name)
            setPokemon(results)
        })
    }

    return (
        <form >
            <button onClick={onClick} type="button" className="btn btn-warning btn-lg">Fetch Pokemon</button>
            {
                pokemon.map((name, i) => (
                    <p key={i}>{name}</p>
                ))
            }
        </form>
    );
}
export default Example