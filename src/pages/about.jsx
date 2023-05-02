import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import photo from "../images/photo-about.png";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <section className="about">
        <img className="avatar" alt="" src={photo} />
        <section
          style={{ gap: "10px", display: "flex", flexDirection: "column" }}
        >
          <h1 className="title">About the Project</h1>
          <p>
            Hello, my name is Nicolás Bauzá, I am 29 years old and I am from
            Montevideo - Uruguay. This App was made with React.js and carried
            out consuming the information from the TMDB Movies API with axios.
            Contains paguination with React-Router-Dom; movie filtering can be
            done and it also contains registration and login forms made with the
            Formik library. At the same time, trailers can be played in the Home section.
          </p>
          <section style={{ gap: "10px", display: "flex" }}>
            <Link style={{textDecoration:'none'}} to="https://www.linkedin.com/in/nicol%C3%A1s-bauz%C3%A1-48a8a0244/">
              <Button
                sx={{textDecoration: "none",}}
                variant="contained"
                color="primary"
                startIcon={<LinkedInIcon />}
              >
                LinkedIn
              </Button>
            </Link>
            <Link style={{textDecoration:'none'}} to="https://github.com/nicolasbauzascaffo?tab=repositories">
              <Button
               sx={{textDecoration: "none",}}
                variant="contained"
                color="primary"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>
            </Link>
          </section>
          <section>
            <img className="logo" alt="" />
            <p>© Go Copyright 2023</p>
          </section>
        </section>
      </section>
    </div>
  );
};

export default About;
