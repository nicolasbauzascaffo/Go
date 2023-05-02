import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <section className="icon-section">
        <img src={logo} />
        <h2  lang="en" translate="no" >Go</h2>
      </section>
      <section style={{ display: "flex", gap: "20px" }}>
        <Link style={{textDecoration:'none'}} to="/login" className="link">
          Log in
        </Link>
        <Link style={{textDecoration:'none'}} to="/register" className="link">
          Register
        </Link>
        <Link style={{textDecoration:'none'}} to="/about" className="link">
          About
        </Link>
      </section>
      <p>© Go Copyright 2023</p>
    </div>
  );
};

export default Footer;
