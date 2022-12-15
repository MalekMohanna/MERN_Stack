import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Planets = (props) => {
  const [starwars, setStarwars] = useState({});
  useEffect(() => {
      axios.get('https://swapi.dev/api/planets/'+props.planetid+'/').then(response=>{setStarwars(response.data)})
  }, []);
  return (
    <div>
      <h1>{starwars.name}</h1>
      <h3>Climate: {starwars.climate}</h3>
      <h3>Terrain: {starwars.terrain}</h3>
      <h3>Surface water: {starwars.surface_water===1?'True':'False'}</h3>
      <h3>Population : {starwars.population}</h3>
      </div>
  )
}

export default Planets