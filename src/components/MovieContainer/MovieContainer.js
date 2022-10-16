import React from "react";
import "./MovieContainer.css";
import MovieCard from "../MovieCard/MovieCard.js";

function MovieContainer({ movies, handlePosterClick }) {
  const movieCards = movies.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        posterPath={movie.poster_path}
        title={movie.title}
        handlePosterClick={handlePosterClick}
      />
    );
  });

  return <section>{movieCards}</section>;
}

export default MovieContainer;
