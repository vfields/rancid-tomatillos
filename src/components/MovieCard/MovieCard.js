import React from "react";
import "./MovieCard.css";

function MovieCard({ id, posterPath, handlePosterClick }) {
  return (
    <article onClick={() => handlePosterClick(id)}>
      <img src={posterPath} className="poster" />
    </article>
  );
}

export default MovieCard;
