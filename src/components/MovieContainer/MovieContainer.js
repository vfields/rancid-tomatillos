import React from "react";
import "./MovieContainer.css";
import MovieCard from "../MovieCard/MovieCard.js";
import { NavLink } from "react-router-dom";

function MovieContainer({ movies, searchBar }) {
  let movieCards;

  if (!searchBar) {
    movieCards = movies.map((movie) => {
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
  } else {
    movieCards = movies.reduce((acc, movie) => {
      if (movie.title.toLowerCase().includes(searchBar.toLowerCase())) {
        acc.push(
          <NavLink to={`/${movie.id}`} key={movie.id}>
            <MovieCard
              id={movie.id}
              posterPath={movie.poster_path}
              rating={movie.average_rating}
              title={movie.title}
            />
          </NavLink>
        );
      }
      return acc;
    }, [])
  }

  const error = movieCards.length === 0 ? true : false;

  return (
    <div>
      {error && <div class="error-container"><p class="error">Sorry, that title doesn't exist! Try another title.</p></div>}
      <section>
        {movieCards}
      </section>
    </div>
  )
}

export default MovieContainer;
