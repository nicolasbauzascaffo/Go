import axios from "axios";

const showMovie = (movieName) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieName}?api_key=c972f64134686f80683194b442901694`
  );
};

export default showMovie