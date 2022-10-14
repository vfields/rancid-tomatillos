import React from "react";
import "./MovieContainer.css";
import MovieCard from "../MovieCard/MovieCard.js";

function MovieContainer(props) {
  const movieCards = props.movies.map(movie => {
    return (
      <MovieCard />
    )
  })

  return (
    <p>I am a container</p>
  )
}

export default MovieContainer;
