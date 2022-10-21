import React from "react";
import "./MovieCard.css";

function MovieCard({ id, title, posterPath }) {
  return (
    <article>
      <img src={posterPath} alt={`a poster of ${title}`} className="poster" />
    </article>
  );
}

export default MovieCard;
