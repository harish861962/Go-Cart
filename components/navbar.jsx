import React, { useEffect, useState } from "react";
import { Link, Links  } from 'react-router-dom';
import {useCart} from "react-use-cart"

export default function Navbar(){


    const menuItems = [
  {
    name: "Home",
    path: "/"
  },

  {
    name: "Shop",
    path: "/shop"
  },

  {
    name: "About us",
    path: "/about"
  },

  {
    name: "Contact",
    path: "/contact"
  }
];

     const [showMenu , setshowMenu] = useState(false)

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const [showSearch, setShowSearch] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));
    const handleUserMenu = (e) => {

  if (e.target.value === "logout") {
    localStorage.removeItem("user");
    window.location.reload();
  }

};

const {totalItems} = useCart();

 // get products db

 useEffect(() => {

  fetch("http://localhost:4000/bestproducts")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    })
    .catch((err) => {
      console.log(err);
    });

}, []);


   // SEARCH FILTER


  const filteredProducts = search ? products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())) : [];


return(
<>
<div className="main-div">
    <div className="logo"><h2>go<span>cart.</span></h2>
    <p className="logo-plus">plus</p>
    </div>

<div className="search-product">
    <i className="bi bi-search"></i>
    <input 
    onFocus={() => setShowSearch(true)}
    type="text" placeholder="Search Products" 
    value={search}
    onChange={(e) => setSearch(e.target.value)} />
    </div>



  {/* PRODUCTS */}
     
     {showSearch && search.trim() !== "" && (
              <div className="srcproduct">
                {filteredProducts.length === 0 ? (
                  <p>Product not found</p>
                ) : (
                  <div className="srcproduct-grid">
                    {filteredProducts.map((prodts, index) => (
                      <div className="srcproduct-cards" key={index}>

                          <Link className="link-h4" to={`/productsdetails/${prodts.name}`} ><h4>{prodts.name}</h4></Link>
                          <h5>${prodts.price}</h5>
                        
                        
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
 
      



    <ul className="menu-items">
        {menuItems.map((item,index)=>(
          
             <li  key={index}>
              <Link to={item.path} className="nav-link">
        {item.name}
      </Link>
             </li>
              
        ))}
    </ul>

    
    
    <div className="nav-buttons">

      <Link to="/cart"> <button className="cart-btn"> 
            <i className="bi bi-cart"></i>cart
        </button>
        </Link>

        { totalItems > 0 && (
              <span className="cart-badge">
                {totalItems}
              </span>
              
            )}

        {
  user ? (
    // <p><i class="bi bi-person-fill"></i>{user.name}</p>
    <select
  className="user-select"
  onChange={handleUserMenu}
>
  <option>
    👤 {user.name}
  </option>

  <option value="logout">
    🚪 Logout
  </option>
</select>
  ) : (
  <Link to="/login"><button className="nav-login-btn">login</button> </Link>

  )
}
        

    </div>



</div>
</>
)
}