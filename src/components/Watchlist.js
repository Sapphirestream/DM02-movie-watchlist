import React from "react";

import MovieCard from "./MovieCard";

const Watchlist = (props) => {
  const { list, addMovie, removeMovie } = props;

  const movieDisplay = list.map((movie) => {
    return (
      <MovieCard movie={movie} list={list} addMovie={addMovie} removeMovie={removeMovie} />
    );
  });

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
