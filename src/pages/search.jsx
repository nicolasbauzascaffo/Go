import React from "react";
import Allmovies from "../components/allmovies";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "../styles/search.css";
import Button from "@mui/material/Button";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import Filtered from "../components/filtered";

const Search = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchParams] = useSearchParams();
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=c972f64134686f80683194b442901694&language=en-MX&query=${searchParams.get(
            "keyword"
          )}`
        )
        .then((response) => {
          const keyword = searchParams.get("keyword").toLowerCase();
          const filteredMovies = response.data.results.filter((movie) =>
          movie.title.toLowerCase().replace(/-/g, "").includes(keyword)
        );        
          setmovies(filteredMovies);
        });
    } catch (error) {
      console.error(error);
    }
  }, [searchParams]);

  return (
    <div className="search">
      {movies.length === 0 && (
        <section
          style={{
            width: "100%",
            height: "auto",
            minHeight: "100vh",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop:'100px'
          }}
        >
          <Link to="/movies">
            <Button
              variant="outlined"
              color="error"
              endIcon={<LocalMoviesIcon />}
            >
              No results, back to Movies
            </Button>
          </Link>
        </section>
      )}
      {movies.length > 0 && <Filtered movies={movies} setmovies={setmovies} />}
    </div>
  );
};

export default Search;
