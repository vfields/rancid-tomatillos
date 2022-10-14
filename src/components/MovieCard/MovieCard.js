import React from "react";
import "./MovieCard.css";

function MovieCard(props) {
  return (
    <article>
      <h1>{props.title}</h1>
      <img src={props.posterPath} className="poster" />
    </article>
  )
}

export default MovieCard;
