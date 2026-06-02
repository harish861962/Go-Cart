import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../components/Navbar.jsx';
import Productsdetails from '../components/ProductsDetails.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Shop from '../pages/shop.jsx';
import Cart from '../pages/cart.jsx';
import { CartProvider } from "react-use-cart";
import Login from '../pages/login.jsx';
import Signup from '../pages/signup.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>
  <ToastContainer position="top-center"/>
    
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart/>} />
      {/* <Route path="/app" element={<App/>} /> */}

      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path='/productsdetails/:slug' element={<Productsdetails/>}/>
    
    </Routes>
    
    
  </CartProvider>
  </BrowserRouter>
)
