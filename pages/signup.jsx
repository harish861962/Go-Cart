// import React, { useState } from "react";

// export default function Signup() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:4000/signupUser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();
//     alert(data.message);
//   };

//   return (
//     <div>
//       <h2>Signup</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="Name"
//           onChange={handleChange}
//         />
//         <br />

//         <input
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />
//         <br />

//         <input
//           name="password"
//           placeholder="Password"
//           type="password"
//           onChange={handleChange}
//         />
//         <br />

//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }



import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (form.password !== form.confirmPassword) {
    toast.warn("Passwords do not match");
    return;
  }


  const res = await fetch("http://localhost:4000/signupUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (data.success) {
  toast.success(data.message);
} else {
  toast.error(data.message);
}

  // toast.success(`signup sucessfully`);

  

};

  return (
    <div className="signup-container">

      <div className="signup-left">
        <div className="overlay">
          <h1>Welcome To GoCart</h1>
          <p>
            Discover amazing products, exclusive deals,
            and a seamless shopping experience.
          </p>

          <div className="stats">
            <div>
              <h2>10K+</h2>
              <span>Products</span>
            </div>

            <div>
              <h2>5K+</h2>
              <span>Customers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="signup-right">

        <form className="signup-form" onSubmit={handleSubmit}>

          <h2>Create Account</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          <button type="submit">
            Create Account
          </button>

          <p>
            Already have an account?
            <a href="/login"> Login</a>
          </p>

        </form>

      </div>

    </div>
  );
}