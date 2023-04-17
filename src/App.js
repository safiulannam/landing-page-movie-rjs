import "./App.css";
import { getMovieList, searchMovie } from "./Api";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

const App = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovie(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovie.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">{movie.title}</div>
          <img className="movie-img" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
          <div className="movie-date">Release : {movie.release_date}</div>
          <div className="movie-rate">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovie(query.results);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ITC MOVIE MANIA MANTAP</h1>
        <input className="search" type="text" placeholder="Cari film kesayangan elu" onChange={({ target }) => search(target.value)} />
        <div className="movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
