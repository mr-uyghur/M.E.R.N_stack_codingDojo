import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const Example = (props) => {
    
    const { pokemon, setPokemon } = props
    

    const useDidMountEffect = (func, deps) => {
        const didMount = useRef(false);
    
        useEffect(() => {
            if (didMount.current) func();
            else didMount.current = true;
        }, deps);
    }

    const [clicked, setClicked] = useState(false)

    useDidMountEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => { let results = response.data.results.map( p => p.name) 
                setPokemon(results) })
    }, [ clicked]);

    const onClick = e => {
        clicked?
        setClicked(false):
        setClicked(true)
    }

    return (
        <form >
            <button onClick={ onClick } type="button" className="btn btn-warning btn-lg">Fetch Pokemon</button>
            {    
                pokemon.map( (name, i)=> (
                    <p key={ i }>{ name }</p>
                ))
            }

        </form>
    );
}
export default Example