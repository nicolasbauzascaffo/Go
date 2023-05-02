import React from "react";
import Premiere from "./premiere";
import "../styles/mainbox.css";
import Premieremovies from "./premieremovies";
import deadpool from "../images/deadpool.png";
import { Button } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Trailers from "./trailers";
import { Link } from "react-router-dom";
const Mainbox = () => {
  return (
    <div className="mainbox">
      <Premiere />
      <Premieremovies />
      <hr />
      <Trailers />
      <hr />
      <section className="register-link">
        <h2>You don't have premium yet?</h2>
        <p>Register right now and enjoy the benefits</p>
        <Link style={{textDecoration:'none'}} to="register">
          <Button
            variant="contained"
            color="success"
            sx={{
              marginTop: "10px",
              fontWeight: "bold",
              textDecoration: "none",
              fontSize:'12px'
            }}
            startIcon={<HowToRegIcon />}
          >
            Register
          </Button>
        </Link>
      </section>
      <hr />
    </div>
  );
};

export default Mainbox;
