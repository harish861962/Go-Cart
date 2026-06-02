import { useState } from 'react'
import Hero from '../components/Hero'
import LatestProducts from "./components/LatestProducts";
import BestSellingProducts from "./components/BestSellingProducts";
import Navbar from "./components/Navbar";
import Productsdetails from '../components/ProductsDetails'
import Services from '../components/Services'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Login from '../pages/login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <LatestProducts/>
      <BestSellingProducts/>
      <Services/>
      <Newsletter/>
      <Footer/>
  
    </>
  )
}

export default App
