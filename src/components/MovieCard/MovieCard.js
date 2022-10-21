import React from "react";
import "./MovieCard.css";

function MovieCard({ id, title, posterPath }) {
  return (
    <article className="card">
      <img src={posterPath} alt={`a poster of ${title}`} className="poster" />
    </article>
  );
}

export default MovieCard;
