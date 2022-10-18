import React from "react";
import "./MovieCard.css";

function MovieCard({ id, posterPath }) {
  return (
    <article>
      <img src={posterPath} className="poster" />
    </article>
  );
}

export default MovieCard;
