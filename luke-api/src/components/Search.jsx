import React, { useState } from 'react'
import { navigate } from '@reach/router'
const Search = (props) => {
    const [searchId,setSearchId] = useState("");
    const [myOption,setMyOption] = useState("");

    const handleSubmit=(e)=>{
        console.log(myOption);
        e.preventDefault();
        props.values(searchId);
        (myOption === 'people') ? navigate('/people/'+searchId) : navigate('/planets/'+searchId);
        
    }
    const handleChange = (e)=>{
        setMyOption(e.target.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
        <label htmlFor="search">Search for: </label>
        <select name="myOption" id="search" value={myOption} onChange={handleChange}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
        </select>
        </div>
        <div>
            <label htmlFor="myId">ID : </label>
            <input type="text" id="myId" onChange={e=>setSearchId(e.target.value)} />
        </div>
        <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default Search