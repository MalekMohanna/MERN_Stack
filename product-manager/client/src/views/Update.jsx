import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductForm from '../components/ProductForm';
const Update = (props) => {
    const { id } = useParams();
    const [product,setProduct] = useState();
    const [loaded,setLoaded] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [id]);
    
    const updateProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => {console.log(res)})
            .catch(err => console.error(err));
        navigate('/products/');
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            {loaded &&( <ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDesc={product.description} />)}
        </div>
    )
}
    
export default Update;

