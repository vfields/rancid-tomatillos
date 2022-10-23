import React from "react";
import "./MovieContainer.css";
import MovieCard from "../MovieCard/MovieCard.js";
import { NavLink } from "react-router-dom";

function MovieContainer({ movies, searchBar, loading }) {
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

  let error = movieCards.length === 0 ? true : false;

  if (loading && error) {
    error = false;
  }

  return (
    <div>
      {error && <div className="error-container"><span className="error">Sorry, that title doesn't exist! Try another title.</span></div>}
      <section>
        {movieCards}
      </section>
    </div>
  )
}

export default MovieContainer;
