import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseURL = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseURL}/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(`${baseURL}/search/movie?query=${q}&api_key=${apiKey}&language=en-US&page=1&include_adult=false`);
  return search.data;
};
