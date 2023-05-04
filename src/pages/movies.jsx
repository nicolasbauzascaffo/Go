import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import "../styles/movies.css";
import { TextField, InputAdornment, Button } from "@mui/material";
import Allmovies from "../components/allmovies";

const Movies = () => {
  const [movies, setmovies] = useState([]);
  const navigate = useNavigate();
  const [keyword, setkeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setkeyword("");
    e.target.reset();
    navigate(`/search?keyword=${keyword}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="movies">
      <section className="search-section">
        <h1>Enjoy now</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            value={keyword}
            onChange={(e) => setkeyword(e.target.value)}
            variant="filled"
            label="Search"
            sx={{
              fontWeight: "bold",
              backgroundColor: "white",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    disabled={keyword === ""}
                    type="submit"
                    sx={{
                      width: "100%",
                    }}
                  >
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </section>
      <Allmovies movies={movies} setmovies={setmovies} className="all-movies" />
    </div>
  );
};

export default Movies;
