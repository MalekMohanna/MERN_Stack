import React, { useEffect, useState } from 'react'

const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [condition,setCondition] = useState(false);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPokemons(response.results))
    }, []);

    const getPoke=()=>{
        setCondition(!condition);
    }
  return (
    <div>
        <button onClick={getPoke}>Get pokemons</button>
        <ul>
    {condition && pokemons.length > 0 && pokemons.map((pokemon, index)=>{
        return (<li key={index}>{pokemon.name}</li>)
    })}
    </ul>
</div>
  )
}

export default Pokemon