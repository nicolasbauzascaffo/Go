import React from "react";
import { useEffect, useState } from "react";
import getMainmovies from "../services/mainmovies";
import { Link } from "react-router-dom";
import "../styles/premieremovies.css";
import CircularProgress from "@mui/material/CircularProgress";

const Premieremovies = () => {
  const [premiere, setpremiere] = useState([]);

  useEffect(() => {
    try {
      getMainmovies().then((response) => {
        if (response.status === 200) {
          setpremiere(response.data.results);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="premiere-movies">
      {premiere.map((movie, index) => (
        <section className="movie-info" key={index}>
          <Link to={`/${movie.id}`}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            ) : (
              <CircularProgress />
            )}
          </Link>
        </section>
      ))}
    </div>
  );
};

export default Premieremovies;
