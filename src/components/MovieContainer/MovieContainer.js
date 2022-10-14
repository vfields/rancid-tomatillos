import React from "react";
import "./MovieContainer.css";
import MovieCard from "../MovieCard/MovieCard.js";

function MovieContainer(props) {
  const movieCards = props.movies.map(movie => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        posterPath={movie.poster_path}
        title={movie.title}
      />
    )
  })

  return (
    <section>
      {movieCards}
    </section>
  )
}

export default MovieContainer;
