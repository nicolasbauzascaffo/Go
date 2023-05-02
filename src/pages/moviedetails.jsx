import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import showMovie from "../services/showmovie";
import "../styles/details.css";
import Rating from "@mui/material/Rating";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Moviedetails = () => {
  const [movie, setmovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    try {
      showMovie(movieId).then((response) => {
        if (response.status === 200) {
          setmovie(response.data);
          console.log(response);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div className="details">
      {movie ? (
        <section className="movie-information">
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="poster"
            onError={(e) => {
              e.target.src = "fallback-image-url";
            }}
          />
          <section className="info">
            <Link style={{textDecoration:'none'}} to="/movies">
              <Button
               sx={{textDecoration: "none",}}
                color="primary"
                variant="outlined"
                startIcon={<ArrowBackIcon />}
              >
                back
              </Button>
            </Link>
            <h2>{movie.title}</h2>
            {movie.production_companies[0]?.logo_path ? (
              <img
                style={{ width: "70px", height: "30px", backgroundColor:'white', padding:'5px', borderRadius:'5px' }}
                className="logo-company"
                src={`https://image.tmdb.org/t/p/w500/${movie.production_companies[0].logo_path}`}
              />
            ) : (
              <p></p>
            )}
            <p>{movie.overview}</p>
            <p>
              <AccessTimeIcon /> {movie.runtime} minutes
            </p>
            <p>
              <TheaterComedyIcon />
              {movie.genres.length > 0 ? movie.genres[0].name : "?"}
            </p>
            <p>
              <LocalMoviesIcon />
              {movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : "?"}
            </p>
            <Rating name="read-only" value={movie.vote_average / 2} readOnly />
            <Button
              className="btn"
              variant="contained"
              color="success"
              sx={{ fontWeight: "bold" }}
              startIcon={<PlayCircleFilledWhiteIcon />}
            >
              Play
            </Button>
          </section>
        </section>
      ) : (
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
            height: "auto",
            minHeight: "100vh",
          }}
        >
          <Link style={{textDecoration:'none'}} to="/movies">
            <Button
              sx={{textDecoration:'none'}}
              variant="outlined"
              color="error"
              endIcon={<LocalMoviesIcon />}
            >
              Back to Movies
            </Button>
          </Link>
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </section>
      )}
    </div>
  );
};

export default Moviedetails;
