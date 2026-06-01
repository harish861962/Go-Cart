import React from "react";

export default function Hero(){
return(
<>
 <div className="main-hero-section">

    <div className="left-section">

    <div className="hero-left-img">
    <img src="../assets/hero_model_img.png" alt="hero-model-img-1" />
    </div>

    <div className="hero-text">
    <input type="text" placeholder="Free Shipping on Orders Above $50!  >" />

        <h1>Gadgets you'll love. Prices you'll trust.</h1>
<p>Starts from <br />$4.90</p>

<button>Learn More</button>

    </div>
    </div>
    <div className="right-hero-section">

    <div className="right-section-box1">

<img src="../assets/hero_product_img1.png" alt="hero_product- earbuds-img" alt=""  width={150}/>

        <div className="right-section-text">
            
        <h3>Best <br /> products</h3>
        <button>View More <i className="bi bi-arrow-right"/></button>
        </div>

    </div>

    <div className="right-section-box2">

<img src="../assets/hero_product_img2.png" alt="hero_product- earbuds-img" alt=""  width={150}/>

        <div className="right-section-text">

        <h3>20% <br />discounts</h3>
        <button>View More <i className="bi bi-arrow-right"/></button>
        </div>

    </div>

    </div>

 </div>
    <marquee behavior="scroll" direction="right"  className="marquee-buttons"
      onMouseOver={(e) => e.target.stop()}
  onMouseOut={(e) => e.target.start()}>

        <button>Headphones</button>
        <button>Speakers</button>
        <button>Watch</button>
        <button>Earbuds</button>
        <button>Mouse</button>
        <button>Decoration</button>
        <button>Headphones</button>
        <button>Speakers</button>
        <button>Watch</button>
        <button>Earbuds</button>
        <button>Mouse</button>
        <button>Decoration</button>
        <button>Decoration</button>
        <button>Headphones</button>
        <button>Speakers</button>
        <button>Watch</button>
        <button>Earbuds</button>
        <button>Mouse</button>
        <button>Decoration</button>
        <button>Decoration</button>
        <button>Headphones</button>
        <button>Speakers</button>
        <button>Watch</button>
        <button>Earbuds</button>
        <button>Mouse</button>
        <button>Decoration</button>
        
       
        
    </marquee>
</>
)
}