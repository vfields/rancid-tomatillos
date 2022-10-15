import React from "react";
import "./SingleMovie.css";
import movieData from "../../mockData";
// import MovieCard from "../MovieCard/MovieCard.js";

function SingleMovie(props) {
  //to do convert to class component and change next line to api call
  const movieDetails = movieData.movies.find(
    (movie) => movie.id === props.movieId
  );
  console.log({ movieDetails });
  return (
    <div className="singleMovieBox">
      {/* <p>{props.movieId}</p> */}
      <img src={movieDetails.backdrop_path} className="backdrop" />
      <div className="all-movie-details">
        <img src={movieDetails.poster_path} className="single-poster" />
        <div className="movie-details">
          <h1>{movieDetails.title}</h1>
          <h2>Rating: {movieDetails.average_rating.toFixed(1)}</h2>
          <h2>
            Release Date: {movieDetails.release_date.split("-").join("/")}
          </h2>
        </div>
      </div>
      <button onClick={props.handleBackClick}>Back</button>
    </div>
  );
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
