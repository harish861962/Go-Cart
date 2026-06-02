import React from "react";
import LatestProducts from "../components/LatestProducts";
import BestSellingProducts from "../components/BestSellingProducts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Shop(){
return(
<>
<Navbar/>
<h5 style={{paddingTop:20, paddingLeft:40, paddingBottom:20}}>All Products</h5>
<LatestProducts showHeader={false} />
<BestSellingProducts showHeader={false}  />
<Footer/>
</>
)
}