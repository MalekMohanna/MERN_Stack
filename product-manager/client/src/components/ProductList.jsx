import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
const ProductList = (props) => {
    const { removeFromDom } = props;
    
return (
    <div>
        <h3>All products:</h3>
        <ul>
    {props.products.map((product, i) => (
        <li key={i}><Link to={'/products/'+product._id}>{product.title}</Link> <DeleteButton successCallback={()=>removeFromDom(product._id)} productId={product._id} /> </li>
    ))}
    </ul>
    </div>
);
};

export default ProductList;
