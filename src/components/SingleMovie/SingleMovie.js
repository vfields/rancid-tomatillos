import React from "react";
import "./SingleMovie.css";
// import MovieCard from "../MovieCard/MovieCard.js";

function SingleMovie(props) {
  return <div className="singleMovieBox">I'm going to be a single movie</div>;
}

// function SingleMovie(props) {
//   const movieDetails = props.movies.map((movie) => {
//     return (
//       <MovieCard
//         key={movie.id}
//         id={movie.id}
//         posterPath={movie.poster_path}
//         backdropPath={movie.backdrop_path}
//         averageRating={movie.average_rating}
//         releaseDate={movie.release_date}
//         title={movie.title}
//       />
//     );
//   });

//   return <section>{movieDetails}</section>;
// }

export default SingleMovie;
