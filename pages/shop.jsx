import React from "react";
import LatestProducts from "../components/latestProducts";
import BestSellingProducts from "../components/bestSellingProducts";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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