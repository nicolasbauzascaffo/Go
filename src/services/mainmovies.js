import axios from "axios";

const getMainmovies = () => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=c972f64134686f80683194b442901694&language=en-MX&page=1`
  );
};

export default getMainmovies