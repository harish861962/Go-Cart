import React from "react";
import { Link } from "react-router-dom";


export default function Productsheader( {name, totalProducts }){
return(
<>
<div className="products-heading">

    <h4>{name} Products</h4>
 <p>Showing {totalProducts} of 12 products  &nbsp;<Link to="/shop" >view more <i className="bi bi-arrow-right"></i></Link>
 </p>
      </div>
</>
)
} 