import React from "react";
import { actors } from "../data";

function Actors() {

  const actorList = actors.map(actor => {
    return (
      <article key={`${actor.name}-1`}>
        <h2>{actor.name}</h2>
        <ul>{actor.movies.map(movie => {
          return <li key={`${movie}-3`}>{movie}</li> // same here. movie is a string here. i added the -3 so we're sure it'll be unique compared to the other pages just in case
        })}</ul>
      </article>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      <li>{actorList}</li>
      
    </div>
  )
}

export default Actors;
