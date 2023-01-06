import React from "react";

import MovieCard from "./MovieCard";

const Watchlist = (props) => {
  const { list, addMovie } = props;

  const movieDisplay = list.map((movie) => {
    return <MovieCard movie={movie} addMovie={addMovie} />;
  });

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
