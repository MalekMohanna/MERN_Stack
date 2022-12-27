import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Form = (props) => {
    const [name,setName] = useState('');
    const [position,setPosition] = useState('');
    const [errors,setErrors] = useState([]);
    const navigate = useNavigate();
    const handleSubmit=e=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/teams/new',{name:name,position:position})
        .then(res=>navigate('/'))
        .catch(err=>{console.error(err);
        const errorRespones = err.response.data.errors;
        const errorArr =[];
        for (const key of Object.keys(errorRespones)){
        errorArr.push(errorRespones[key].message)
        }
        setErrors(errorArr);
        })
    }
  return (
    <form onSubmit={handleSubmit}>
        <p style={{color:'red'}}>{errors.map((err, index) => <p key={index}>{err}</p>)}</p>
        <div>
            <label >Name :</label>
            <input type="text" onChange={e=>setName(e.target.value)} />
        </div>
        <div>
            <label >Position :</label>
            <input type="text" onChange={e=>setPosition(e.target.value)} />
        </div>
        <input type="submit" value="Submit" />
    </form>
  )
}

export default Form