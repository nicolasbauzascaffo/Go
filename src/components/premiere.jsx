import React from "react";
import logo from "../images/logo.png";
import "../styles/premiere.css";

const Premiere = () => {
  return (
    <div className="premiere">
      <hr />
      <section className="logo-page">
        <img src={logo} />
        <h4>Go</h4>
      </section>
      <hr />
      <p>Enjoy our Premium Movies section now for free</p>
    </div>
  );
};

export default Premiere;
