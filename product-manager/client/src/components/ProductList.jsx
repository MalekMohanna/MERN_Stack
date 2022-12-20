import React from "react";
import { Link } from "react-router-dom";
const ProductList = (props) => {
return (
    <div>
        <h3>All products:</h3>
        <ul>
    {props.products.map((product, i) => (
        <li key={i}><Link to={'/products/'+product._id}>{product.title}</Link></li>
    ))}
    </ul>
    </div>
);
};

export default ProductList;
