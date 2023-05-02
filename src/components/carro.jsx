import React from "react";
import batman from "../images/the-batman-2022-blue-us.jpg";
import avatar from "../images/avatar.jpg";
import jw from "../images/jw.jpg";
import '../styles/carrousel.css'
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";

const Carrousel = () => {
  return (
    <Carousel className="carrousel">
      <Carousel.Item>
        <img className="d-block w-100" src={batman} alt="First slide" />
        <Carousel.Caption>
          <h4>The Batman</h4>
          <Link style={{ textDecoration: "none" }}  to='/414906' >
            <Button
              variant="contained"
              color="success"
              sx={{
                textDecoration: "none",
                marginTop: "10px",
                fontWeight: "bold",
                height: "24px",
                fontSize: "10px",
              }}
              startIcon={<InfoIcon />}
            >
              Info
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={jw} alt="Second slide" />

        <Carousel.Caption>
          <h4>John Wick IV</h4>
          <Link style={{ textDecoration: "none" }} to='/603692' >
            <Button
              variant="contained"
              color="success"
              sx={{
                textDecoration: "none",
                marginTop: "10px",
                fontWeight: "bold",
                height: "24px",
                fontSize: "10px",
              }}
              startIcon={<InfoIcon />}
            >
              Info
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={avatar} alt="Third slide" />

        <Carousel.Caption>
          <h4>Avatar II</h4>
          <Link style={{ textDecoration: "none" }} to='/76600' >
            <Button
              variant="contained"
              color="success"
              sx={{
                textDecoration: "none",
                marginTop: "10px",
                fontWeight: "bold",
                height: "24px",
                fontSize: "10px",
              }}
              startIcon={<InfoIcon />}
            >
              Info
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
