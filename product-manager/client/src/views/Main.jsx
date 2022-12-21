import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
  const [products,setProducts] = useState([]);
  const [loaded,setLoaded] = useState(false);
  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId));
}
  useEffect(()=>{
    axios.get('http://localhost:8000/api/products/')
    .then(res=>{
      setProducts(res.data);
      setLoaded(true);
    })
    .catch(err=>console.error(err));
  },[])

  const createProduct = product =>{
    axios.post('http://localhost:8000/api/products/new',product)
    .then(res=>{setProducts([...products, res.data])})
    .catch(err=>console.error(err))
  }
    
  return (
    <div>
      <h1>Product Manager</h1>
      <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDesc=""  />
      <hr/>
      {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
    </div>
  )
}

export default Main