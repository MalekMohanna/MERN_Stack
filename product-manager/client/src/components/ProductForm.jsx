import axios from 'axios';
import React, { useState } from 'react'

const ProductForm = (props) => {
    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const [description,setDiscription] = useState('');
    const Submithandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/',{
            title,
            price,
            description
        })
        .then(res=>console.log('Response: ',res))
        .catch(err=>console.log('There is error: ',err))
    setTitle('');
    setPrice('');
    setDiscription('');
    }
  return (
    <div>
        <form onSubmit={Submithandler}>
        <div>
            <label>Title : </label>
            <input type="text" onChange={e=>setTitle(e.target.value)} value={title} />
        </div>
        <div>
            <label>Price : </label>
            <input type="number" onChange={e=>setPrice(e.target.value)} value={price} />
        </div>
        <div>
            <label>Description : </label>
            <input type="text" onChange={e=>setDiscription(e.target.value)} value={description} />
        </div>
        <input type='submit' />
        </form>
    </div>
  )
}

export default ProductForm