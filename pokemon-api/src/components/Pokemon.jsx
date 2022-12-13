import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Pokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);
    const [condition,setCondition] = useState(false);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response=>{setPokemons(response.data.results)})
    }, []);

    const getPoke=()=>{
        setCondition(!condition);
    }
  return (
    <div>
        <button id='my-button' onClick={getPoke}>Get pokemons</button>
        <ul>
    {condition && pokemons.length > 0 && pokemons.map((pokemon, index)=>{
        return (<li key={index}>{pokemon.name}</li>)
    })}
    </ul>
</div>
  )
}

export default Pokemon