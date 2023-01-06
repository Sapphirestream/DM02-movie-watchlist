import React from "react";
import classes from "./MovieScreen.module.css";

import MovieCard from "./MovieCard";

const MovieScreen = (props) => {
  const { list, movieList, page, setPage, addMovie } = props;

  const movieDisplay = movieList.map((movie) => {
    return <MovieCard movie={movie} addMovie={addMovie} />;
  });

  return (
    <div className={classes.page}>
      <h1>Rebecca's Movie Theatre</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className={classes["movie-container"]}>{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
