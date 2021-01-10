import React, { useEffect, useState } from 'react';



const Example = (props) => {
    const [people, setPeople] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <form onSubmit={handleClick}>

            <input type="submit" value="Fetch Pokemon" />

            {people.map((person, index) => {
                return (<div key={index}>{person.name} </div>)
            })}
        </form>
    );
}
export default Example