import React from "react";

import MovieCard from "./MovieCard";

const MovieScreen = (props) => {
  const { list, movieList, page, setPage, addMovie, removeMovie } = props;

  const movieDisplay = movieList.map((movie) => {
    return (
      <MovieCard
        movie={movie}
        list={list}
        addMovie={addMovie}
        removeMovie={removeMovie}
      />
    );
  });

  const increment = () => {
    setPage((prevState) => {
      return prevState + 1;
    });
  };

  const decrement = () => {
    setPage((prevState) => {
      return prevState - 1;
    });
  };

  return (
    <div className={"page"}>
      <h1>Rebecca's Movie Theatre</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className={"btn-container"}>
        <button onClick={page != 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className={"movie-container"}>{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
