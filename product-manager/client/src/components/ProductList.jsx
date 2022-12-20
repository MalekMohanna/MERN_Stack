import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
const ProductList = (props) => {
    const { removeFromDom } = props;
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
    }
return (
    <div>
        <h3>All products:</h3>
        <ul>
    {props.products.map((product, i) => (
        <li key={i}><Link to={'/products/'+product._id}>{product.title}</Link> <button onClick={(e)=>{deleteProduct(product._id)}} >Delete</button> </li>
    ))}
    </ul>
    </div>
);
};

export default ProductList;
