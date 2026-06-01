import React from "react";

export default function Services() {

  const serviceData = [
    {
      icon: "bi bi-send",
      title: "Free Shipping",
      desc: "Enjoy fast, free delivery on every order no conditions, just reliable doorstep.",
      bg: "#effdf6",
      border: "#b6e7ca",
      iconBg: "#14d866"
    },

    {
      icon: "bi bi-clock-history",
      title: "7 Days easy Return",
      desc: "Change your mind? No worries. Return any item within 7 days.",
      bg: "#fff8ef",
      border: "#f2c99e",
      iconBg: "#ff8a00"
    },

    {
      icon: "bi bi-headset",
      title: "24/7 Customer Support",
      desc: "We're here for you. Get expert help with our customer support.",
      bg: "#f9f7ff",
      border: "#d7c8ff",
      iconBg: "#9a74f5"
    }
  ];


  return (
    <>

    <div className="services-text">
        <h4>Our Specifications</h4>
        <p>We offer top-tier service and convenience to ensure your shopping experience is smooth, secure and completely hassle-free.</p>
    </div>
    
      <div className="services-container">

        {serviceData.map((item, index) => (

          <div
            className="service-card"
            key={index}
            style={{
              background: item.bg,
              border: `1px solid ${item.border}`
            }}
          >

            <div
              className="service-icon"
              style={{ background: item.iconBg }}
            >
              <i className={item.icon}></i>
            </div>

            <h5>{item.title}</h5>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </>
  );
}