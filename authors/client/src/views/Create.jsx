import React from 'react'
import Form from '../components/Form'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
const Create = (props) => {
  const [errors,setErrors] = useState([]);
    const navigate = useNavigate();
    const createAuthor = author =>{
        axios.post('http://localhost:8000/api/authors/new',author)
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
    <Form onSubmitProp={createAuthor} initialName='' errors={errors}/>
  )
}

export default Create