import axios from 'axios';
import React, { useEffect, useState } from 'react'

const People = (props) => {
  const [starwars, setStarwars] = useState({});
  useEffect(() => {
      axios.get('https://swapi.dev/api/people/'+props.peopleid+'/').then(response=>{setStarwars(response.data)})
  }, []);

  return (
    <div>
      <h1>{starwars.name}</h1>
      <h3>Height : {starwars.height} cm</h3>
      <h3>Mass : {starwars.mass} kg</h3>
      <h3>Hair color : {starwars.hair_color}</h3>
      <h3>Sking color : {starwars.skin_color}</h3>
      
      </div>
  )
}

export default People