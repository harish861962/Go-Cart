import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "./navbar";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";



export default function Productsdetails() {
  const [showReview, setShowReview] = useState(true);


  const reviews = [
  {
    id: 1,
    userName: "Kristin Watson",
    date: "Sat Jul 19 2025",
    rating: 5,
    stars: "★★★★★",
    review:
      "I was a bit skeptical at first, but this product turned out to be even better than I imagined. The quality feels premium, it's easy to use, and it delivers exactly what was promised. I've already recommended it to friends and will definitely purchase again in the future.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },

  {
    id: 2,
    userName: "James Anderson",
    date: "Mon Aug 04 2025",
    rating: 4,
    stars: "★★★★☆",
    review:
      "The product arrived on time and the packaging was excellent. Performance is smooth and reliable. Definitely worth the money.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },

  {
    id: 3,
    userName: "Sophia Miller",
    date: "Tue Sep 02 2025",
    rating: 5,
    stars: "★★★★★",
    review:
      "Absolutely loved this product. The build quality is amazing and it exceeded my expectations in every way.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  },

  {
    id: 4,
    userName: "Michael Brown",
    date: "Fri Oct 10 2025",
    rating: 4,
    stars: "★★★★☆",
    review:
      "Very user-friendly and stylish design. Customer support was also very responsive when I had questions.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },

  {
    id: 5,
    userName: "Emily Johnson",
    date: "Wed Nov 12 2025",
    rating: 5,
    stars: "★★★★★",
    review:
      "One of the best purchases I've made recently. Works perfectly and feels like a premium product.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  }
];

  // const { name } = useParams();
const { slug } = useParams();
const { addItem } = useCart();

  const [product, setProduct] = useState(null);
const [relatedProducts, setRelatedProducts] = useState([]);
  // 
  
useEffect(() => {

  const getProduct = async () => {

    // latest products 
    let res = await fetch(`http://localhost:4000/products/${slug}`);
    let data = await res.json();

    // best products
    if (data === null) {

      res = await fetch(`http://localhost:4000/bestproducts/${slug}`);
      data = await res.json();

    }
    data.id = data._id;

    setProduct(data);

     // ALL PRODUCTS

    const alldataUrl = await fetch("http://localhost:4000/products");
    const allData = await alldataUrl.json();

    const bestUrl = await fetch("http://localhost:4000/bestproducts");
const bestData = await bestUrl.json();

// DONO DATA COMBINE
const allProducts = [...allData, ...bestData];

    // FILTER RELATED PRODUCTS
    const filtered = allProducts.filter(
      (item) => item.slug !== slug
    );
const filterdata = filtered.filter(
    (item) => item.price > 79
  );

    setRelatedProducts(filterdata);

  };

  getProduct();

}, [slug]);


  if (product === null) {
    return <h2>Loading...</h2>;
  }

  
  

  return (
    <>
    <Navbar/>

      
          
      <div className="product-details-container">

        {/* LEFT SIDE */}

        <div className="product-left">

          <div className="small-images">

            <div className="small-img-box">
              <img src={product.image} alt="" />
            </div>

          </div>

          <div className="big-image">

            <img src={product.image} alt="" />

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="product-right">

          {/* <p className="product-path">
            Home / Products / {product.name}
          </p> */}

          <h3>{product.name}</h3>

          <div className="product-rating">

            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>

            <span>6 Reviews</span>

          </div>

          <div className="price-box">

            <h6>${product.price}</h6>

            <del>$60</del>

          </div>

          <p className="save-text">
            <i className="bi bi-tag"></i>
            Save 52% right now
          </p>

          <button onClick={()=>{addItem(product),
            toast.success("added to cart")}
          } className="cart-btn-details">
            Add to Cart
          </button>

          <hr />

          <div className="product-features">

            <p>
              <i className="bi bi-globe"></i>
              Free shipping worldwide
            </p>

            <p>
              <i className="bi bi-credit-card"></i>
              100% Secured Payment
            </p>

            <p>
              <i className="bi bi-person"></i>
              Trusted by top brands
            </p>

          </div>

        </div>
        {/* </div> */}

        {/* relatedProducts  */}


{/* {
  relatedProducts.map((p)=>(
    <div className="relatedprdots-cards">
      <div className="related-card">
    <img src={p.image}  alt="" />
    <p key={p._id}>{p.name}</p>
    <h6>{p.price}</h6>
    </div>
    </div>
    
  ))
} */}


      </div>

      {/* DESCRIPTION */}

      <div className="description-section">

        <div className="tabs">

          {/* <h4>Description</h4> */}
         <a onClick={() => setShowReview(true)} href="#reviews-page"><h6 id="reviews-page">Description</h6></a> 

         <a onClick={() => setShowReview(false)} href="#reviews-page"><h6 id="reviews-page">Reviews</h6></a> 
          

        </div>
 {
        showReview ? (
        <p>
          {product.name}with a sleek design. It's perfect for any room.
          It's made of high-quality materials and comes with lifetime warranty.
        </p>
        ):(
  reviews.map((item,id)=>(
      <div className="reviews-div" key={id}>

        <div className="reviews-card">

{/* left div img  */}

<div className="reviews-img">

        <img src={item.img} width={50} alt="" />
        
        </div>

{/* right content */}

      <div className="reviews-content">

        <p className="stars">{item.stars}</p>

        <p className="reviews-p">
          {item.review}
        </p>

        <p className="review-username">{item.userName}</p>

        <p className="review-date">
          {item.date}
        </p>

      </div>


        </div>

        
      </div>
          )) 
        )
      }
      
      </div>
      <Footer/>
    </>
  );
}