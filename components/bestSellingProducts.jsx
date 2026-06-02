import React, { useEffect, useState } from "react";
import ProductsHeader from "./ProductsHeader";

// import Productsheader from "Gocart\gocart\components\Productsheader.jsx";

import { useNavigate } from "react-router-dom";
import slugify from 'slugify';

export default function BestSellingProducts({ showHeader = true }) {
    
    const navigate = useNavigate();

    const [bestsellingprodt, setbestsellingprodt] = useState([]);

    const getbestprodts = async ()=>{

    const url = await fetch("http://localhost:4000/bestproducts");

         const data =  await url.json();

         
         setbestsellingprodt(data)
        
    };

    useEffect(()=>{
        getbestprodts();
    }, []);

    return (
        <>

            {
        showHeader && (

          <Productsheader
            name="Best"
            totalProducts={bestsellingprodt.length}
          />

        )
      }

       <div className="products-container">

    {
        bestsellingprodt.map((item) => (

            <div className="cards" key={item._id}
            onClick={() =>
    navigate(`/productsdetails/${item.slug}`)
  }
            >

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
                    <p>{item.name}</p>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    </div>

                    <p>${item.price}</p>

                </div>
                <div className="product-addtocart-btn">
                    {/* <button>Add to Cart</button> */}
                    </div>

            </div>
        ))
    }
</div>
        </>
    )
}