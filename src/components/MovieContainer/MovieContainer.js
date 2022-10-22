import React from "react";
import "./MovieContainer.css";
import MovieCard from "../MovieCard/MovieCard.js";
import { NavLink } from "react-router-dom";

function MovieContainer({ movies }) {
  const movieCards = movies.map((movie) => {
    return (
      <NavLink to={`/${movie.id}`} key={movie.id}>
        <MovieCard
          id={movie.id}
          posterPath={movie.poster_path}
          rating={movie.average_rating}
          title={movie.title}
        />
      </NavLink>
    );
  });

  return <section>{movieCards}</section>;
}

export default MovieContainer;
