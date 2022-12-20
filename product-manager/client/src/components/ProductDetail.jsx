import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const ProductDetail = (props) => {
    const [product,setProduct] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/' +id)
        .then(res=> setProduct(res.data))
        .catch(err=>console.error(err));
    })
  return (
    <div>
        <h1>Title : {product.title}</h1>
        <h1>Price : {product.price}</h1>
        <h1>Description : {product.description}</h1>
        <Link to='/products/'>All products</Link>
        </div>
  )
}

export default ProductDetail