import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/allmovies.css";
import getAllMovies from "../services/allmovies";
import CircularProgress from "@mui/material/CircularProgress";

const Allmovies = () => {
  const [movies, setmovies] = useState([]);
  const [page, setpage] = useState(1);
  useEffect(() => {
    try {
      getAllMovies(page).then((response) => {
        if (response.status === 200) {
          setmovies((prev) => [...prev, ...response.data.results]);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  const handleScroll = () => {
    let scroll = document.documentElement.scrollTop + window.innerHeight;
    let docheight = document.documentElement.offsetHeight;
    if (scroll < docheight) {
      setpage((page) => page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const moviesWithPosters = movies.filter(
    (movie, index, self) =>
      index === self.findIndex((m) => m.id === movie.id) && movie.poster_path
  );

  return (
    <div className="all-movies">
      <section className="posters">
        {moviesWithPosters.map((movie, index) => (
          <section className="movie" key={index}>
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
      </section>
    </div>
  );
};

export default Allmovies;
