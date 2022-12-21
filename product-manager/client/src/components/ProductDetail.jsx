import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DeleteButton from './DeleteButton';
const ProductDetail = (props) => {
    const [product,setProduct] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/' +id)
        .then(res=> setProduct(res.data))
        .catch(err=>console.error(err));
    })
    const redirect=()=>{
        navigate('/products');
    }
  return (
    <div>
        <h1>Title : {product.title}</h1>
        <h1>Price : {product.price}</h1>
        <h1>Description : {product.description}</h1>
        <Link to='/products/'>All products</Link>
        <br />
        <Link to={'/products/'+product._id+'/edit'}>Edit product</Link>
        <br />
        <DeleteButton successCallback={redirect} productId={product._id}/>
        </div>
  )
}

export default ProductDetail