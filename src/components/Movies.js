import React from "react";
import { movies } from "../data";

function Movies() {

  const movieList = movies.map(movie => {
    return (
    <div key={`${movie.id}-${movie.title}`}>
    <h2>{movie.title}</h2>
    <p>{movie.time}</p>
    <li>{movie.genres}</li>
    </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      <h2>{movieList}</h2>
    </div>
  )
}

export default Movies;
