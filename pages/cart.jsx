// import React from "react";
// import { useCart } from "react-use-cart";

// export default function Cart() {

//   const {
//     isEmpty,
//     items,
//     updateItemQuantity,
//     removeItem,
//     cartTotal
//   } = useCart();

//   if (isEmpty)
//     return (
//       <h2 style={{ textAlign: "center" }}>
//         Your Cart is Empty 😢
//       </h2>
//     );

//   return (

//     <div>

//       <h2>Cart Items</h2>

//       {
//         items.map((item)=>(

//           <div key={item.id}>

//             <img
//               src={item.image}
//               width={100}
//               alt=""
//             />

//             <h3>{item.name}</h3>

//             <p>₹{item.price}</p>

//             {/* DECREASE */}
//             <button
//               className="qty-btn"
//               onClick={() =>
//                 updateItemQuantity(
//                   item.id,
//                   item.quantity - 1
//                 )
//               }
//             >
//               -
//             </button>

//             <span>
//               {item.quantity}
//             </span>

//             {/* INCREASE */}
//             <button
//               className="qty-btn"
//               onClick={() =>
//                 updateItemQuantity(
//                   item.id,
//                   item.quantity + 1
//                 )
//               }
//             >
//               +
//             </button>

//             {/* ITEM TOTAL */}
//             <h4>
//               Total:
//               ₹{item.price * item.quantity}
//             </h4>

//             {/* REMOVE */}
//             <button
//               className="remove-btn"
//               onClick={() => removeItem(item.id)}
//             >
//               Remove
//             </button>

//             <hr />

//           </div>

//         ))
//       }

//       {/* GRAND TOTAL */}
//       <div className="cart-total">

//         <h2>
//           Grand Total: ₹{cartTotal}
//         </h2>

//       </div>

//     </div>

//   );

// }



import React from "react";
import { useCart } from "react-use-cart";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { toast } from "react-toastify";

export default function Cart() {

  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal
  } = useCart();

  // EMPTY CART
  if (isEmpty) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        Your Cart is Empty 😢
      </h2>
    );
  }

  return (
<>
<Navbar/>

    <div className="cart-page">

      <h1 className="cart-heading">
        Shopping Cart
      </h1>

      <div className="cart-wrapper">

        {/* LEFT SIDE */}
        <div className="cart-products">

          {
            items.map((item) => (

              <div className="cart-card" key={item.id}>

                <div className="cart-product">

                  <img src={item.image} alt="" />

                  <div className="product-content">

                    <h3>{item.name}</h3>

                    <p>${item.price}</p>

                    <div className="qty-box">

                      {/* DECREASE */}
                      <button
                        className="qty-btn"
                        onClick={() =>
                          updateItemQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                      >
                        -
                      </button>

                      <span className="qty-number">
                        {item.quantity}
                      </span>

                      {/* INCREASE */}
                      <button
                        className="qty-btn"
                        onClick={() =>
                          updateItemQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="price-box">

                  <h2 className="item-total">
                    ${item.price * item.quantity}
                  </h2>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))
          }

        </div>

        {/* SUMMARY */}
        <div className="cart-summary">

          <h2 className="summary-title">
            Order Summary
          </h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${cartTotal}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="summary-row">
            <span>Discount</span>
            <span>$0</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>${cartTotal}</span>
          </div>

          <button className="checkout-btn" onClick={(e)=>{toast.success("order placed")}}>
            Proceed to Checkout
          </button>

        </div>

      </div>

    </div>
    <Footer/>
</>
  );
}