import { useState } from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import LatestProducts from '../components/latestProducts'
import BestSellingProducts from '../components/bestSellingProducts'
import Productsdetails from '../components/productsdetails'
import Services from '../components/services'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
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
