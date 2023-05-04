import * as React from 'react';
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import "../styles/movies.css";
import { TextField, InputAdornment, Button } from "@mui/material";
import Allmovies from "../components/allmovies";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
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
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Age</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </section>
      <Allmovies movies={movies} setmovies={setmovies} className="all-movies" />
    </div>
  );
};

export default Movies;
