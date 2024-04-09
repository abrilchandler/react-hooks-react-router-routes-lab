import React from "react";
import { directors } from "../data";

function Directors() {

const directorList = directors.map(director => {
  return (
    <article key={`${director.name}-2`}>
      <h1>{director.name}</h1>
      <ul>
        {director.movies.map(movie => {
          return <li key={`${movie}-2`}>{movie}</li> // movie.id didn't work because movie is a string here
        })}
      
      </ul>
    </article>
  )
})

  return (
    <div>
      <h1>Directors Page</h1>
      <h2>{directorList}</h2>
    </div>
  )
}

export default Directors;
