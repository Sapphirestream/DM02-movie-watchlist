import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import axios from "axios";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);
  const [list, setList] = useState([
    { original_title: "Movie 1", id: 1 },
    { original_title: "Movie 2", id: 2 },
  ]);

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  const addMovie = (movie) => {
    setList((prevList) => {
      return [...prevList, movie];
    });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          page={page}
          setPage={setPage}
          movieList={movieList}
          list={list}
          addMovie={addMovie}
        />
        <Watchlist list={list} addMovie={addMovie} />
      </main>
    </div>
  );
}

export default App;
