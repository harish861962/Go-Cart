// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import "./Login.css";

// export default function Login() {

//   const [Email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");

//   const [showForgot, setShowForgot] = useState(false);


//   const islogin = async (e)=>{
// e.preventDefault();

// const url = await fetch("http://localhost:4000/login",

//   {
//     method:"POST",
//      headers: {
//         "Content-Type": "application/json"
//       },

//       body: JSON.stringify({
//         email:Email,
//         password:Password

//       })
//   }
// )

// const  data = await url.json();
// console.log(data);

// }
  


//   return (
//     <div className="login-container">

//       {/* LEFT SIDE */}
//       <div className="login-left-section">

//         <div className="blur blur1"></div>
//         <div className="blur blur2"></div>

//         <div className="content">
//           <h1>
//             Welcome Back <br /> To GoCart
//           </h1>

//           <p>
//             Shop premium gadgets, fashion, and lifestyle products with
//             a smooth shopping experience.
//           </p>

//           <div className="features">

//             <div className="feature-box">
//               <h2>10K+</h2>
//               <span>Products</span>
//             </div>

//             <div className="feature-box">
//               <h2>24/7</h2>
//               <span>Support</span>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="right-section">

//         <div className="form-box">

//           {/* LOGIN FORM */}

//           {!showForgot ? (

//             <>
//               <h2>Login</h2>

              

//               <form method="post" onSubmit={islogin} >

//                 <div className="input-box">
//                   <label htmlFor="email">Email</label>
//                   <input
//                     type="email"
//                     placeholder="Enter your email" id="email"
//                     onChange={(e)=>{setEmail(e.target.value)}}
//                   />
//                 </div>

//                 <div className="input-box">
//                   <label htmlFor="password" >Password</label>
//                   <input
//                     type="password"
//                     placeholder="Enter password" id="password"
//                     onChange={(e)=>{setPassword(e.target.value)}}
//                   />
//                 </div>

//                 <div className="options">

//                   <div>
//                     <input type="checkbox" id="remember" /> 
//               <label htmlFor="remember"> Remember me </label>
//                   </div>

//                   <button
//                     type="button"
//                     className="forgot-btn"
//                     onClick={() => setShowForgot(true)}
//                   >
//                     Forgot Password?
//                   </button>

//                 </div>

//                 <button type="submit" className="login-btn">
//                   Login
//                 </button>

//               </form>

//               <div className="divider">
//                 <span>OR</span>
//               </div>

//               <button className="google-btn">
//                 Continue with Google
//               </button>

//               <p className="signup-text">
//                 Don’t have an account?
//                 <Link to="/signup" >Sign Up</Link> 
//               </p>
//             </>

//           ) : (

//             /* FORGOT PASSWORD */

//             <>

//               <h2>Forgot Password</h2>

//               <p className="sub-text">
//                 Enter your email to reset password
//               </p>

//               <form>

//                 <div className="input-box">
//                   <label>Email Address</label>

//                   <input
//                     type="email"
//                     placeholder="Enter registered email"
//                   />
//                 </div>

//                 <button className="reset-btn">
//                   Send Reset Link
//                 </button>

//               </form>

//               <button
//                 className="back-btn"
//                 onClick={() => setShowForgot(false)}
//               >
//                 ← Back To Login
//               </button>

//             </>

//           )}

//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };

 const handleSubmit = async (e) => {

  e.preventDefault();

  const res = await fetch(
    "http://localhost:4000/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    }
  );

  const data = await res.json();

   if (data.success) {

    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    toast.success(data.message);

    navigate("/");

  } else {
    toast.error(data.message);
  }

};


  return (
    <div className="login-container">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="overlay">

          <h1>Welcome Back To GoCart</h1>

          <p>
            Sign in to access your orders,
            wishlist, exclusive deals and
            continue shopping with ease.
          </p>

          <div className="stats">

            <div>
              <h2>10K+</h2>
              <span>Products</span>
            </div>

            <div>
              <h2>24/7</h2>
              <span>Support</span>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="login-right">

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <h2>Login Account</h2>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <div className="options">

            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="/">
              Forgot Password?
            </a>

          </div>

          <button type="submit">
            Login
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button
            type="button"
            className="google-btn"
          >
            Continue with Google
          </button>

          <p>
            Don't have an account?
            <a href="/signup"> Sign Up</a>
          </p>

        </form>

      </div>

    </div>
  );
}