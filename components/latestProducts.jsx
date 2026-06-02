import React, { useEffect, useState } from "react";
import Productsheader from "./Productsheader";

import { useNavigate } from "react-router-dom";
import slugify from 'slugify';

export default function LatestProducts({ showHeader = true }) {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    
    const getProducts = async () => {

    const response = await fetch(
        "http://localhost:4000/products"
    );

    const data = await response.json();

    setProducts(data);

};



    useEffect(() => {

        getProducts();

    }, []);




    return (
        <>
         {
        showHeader && (

          <Productsheader
            name="Latest"
            totalProducts={products.length}
          />

        )
      }

        <div className="products-container"  >

    {
        products.map((item) => (

            <div className="cards" key={item._id} onClick={() =>
    navigate(`/productsdetails/${item.slug}`)
  } >

                 {/* IMAGE */}
                <div className="img-div">

                    <img
                        src={item.image}
                        alt=""
                    />

                </div>


                {/* NAME + PRICE */}
                <div className="product-info">

                    <div className="rating">
                    <h6>{item.name}</h6>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    </div>

                    <p>${item.price}</p>

                </div>
                {/* <div className="product-addtocart-btn">
                    <button>Add to Cart</button>
                    </div> */}

            </div>

        ))
    }

</div>

        </>
    );
}