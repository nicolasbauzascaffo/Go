import React from "react";
import { Link } from "react-router-dom";
import "../styles/filtered.css";

const Filtered = ({ movies }) => {
  const moviesWithPosters = movies.filter(
    (movie, index, self) =>
      index === self.findIndex((m) => m.id === movie.id) && movie.poster_path
  );

  return (
    <div className="filtered">
      <h1>Search results</h1>
      <section className="filtered-movie">
        {moviesWithPosters.map((movie, index) => (
          <section className="movie" key={index}>
            <Link to={`/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            </Link>
          </section>
        ))}
      </section>
    </div>
  );
};

export default Filtered;
