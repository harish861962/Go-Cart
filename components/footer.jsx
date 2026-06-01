import React from "react";

export default function Footer() {

  const products = [
    "Earphones",
    "Headphones",
    "Smartphones",
    "Laptops"
  ];

  const websiteLinks = [
    "Home",
    "Privacy Policy",
    "Become Plus Member",
    "Create Your Store"
  ];

  const contactData = [
    {
      icon: "bi bi-envelope",
      text: "harish@gmail.com"
    },

    {
      icon: "bi bi-telephone",
      text: "9876543210"
    },

    {
      icon: "bi bi-geo-alt",
      text: "Jaipur , IN"
    }
  ];

  return (
    <>
      <footer className="footer-container">

        <div className="footer-left">
            <h3 className="logo">
            go<span>cart.</span>
          </h3>

          <div className="footer-pra">
            <p>
            Welcome to gocart, your ultimate destination for the latest and
            smartest gadgets. From smartphones and smartwatches to essential
            accessories, we bring you the best in innovation — all in one place.
            </p>
          </div>  
          <div className="footer-icons">

    <a href="https://instagram.com" target="_blank">
  <i className="bi bi-instagram"></i></a>

    <a href="https://facebook.com" target="_blank">
  <i className="bi bi-facebook"></i></a>

    <a href="https://twitter.com" target="_blank">
  <i className="bi bi-twitter"></i></a>

    <a href="https://linkedin.com" target="_blank">
  <i className="bi bi-linkedin"></i></a>

          </div>
        </div>
    
    
<div className="footer-right">



        {/* PRODUCTS */}

        <div className="footer-links">

          <h5>PRODUCTS</h5>

          <ul>

            {products.map((item, index) => (

            <li key={index}><a href="#">{item}</a></li>

            ))}

          </ul>

        </div>

        {/* WEBSITE */}

        <div className="footer-links">

          <h5>WEBSITE?</h5>

          <ul>

            {websiteLinks.map((item, index) => (

             <li key={index}> <a href="#">{item}</a> </li>

            ))}

          </ul>

        </div>

        {/* CONTACT */}

        <div className="footer-links">

          <h5>CONTACT</h5>

          <ul>

            {contactData.map((item,index) => (


               <li key={index}>
    <i className={item.icon}></i>{item.text} </li>

                

            

            ))}

          </ul>

        </div>
        </div>


      </footer>
        <hr />
        <div className="footer-copyright">

        <h6>Copyright 2025 © gocart All Right Reserved.</h6>
        <h6>Designed and Developed By <span>Harish Saini</span> </h6>
        </div>

    </>
  );
}