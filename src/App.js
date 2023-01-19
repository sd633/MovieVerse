import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

import searchButton from "./searchButton.png"
import MovieCard from "./MovieCard";
// 5b979977

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=5b979977';



const App = () => {

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState();

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);
  return (
    <div className="app">
      <h1>MovieVerse</h1>

      <div className="search">
        <input placeholder="Search movies" value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchButton}
          alt="Search icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }


    </div>

  );
}

export default App;
