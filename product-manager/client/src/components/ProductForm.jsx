import React, { useState } from 'react'

const ProductForm = (props) => {
    const {onSubmitProp,initialPrice,initialTitle,initialDesc} = props;
    const [title,setTitle] = useState(initialTitle);
    const [price,setPrice] = useState(initialPrice);
    const [description,setDiscription] = useState(initialDesc);
    const Submithandler=(e)=>{
        e.preventDefault();
        onSubmitProp({title,price,description});
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