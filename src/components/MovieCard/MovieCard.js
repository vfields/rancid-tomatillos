import React from "react";
import "./MovieCard.css";

function MovieCard(props) {
  const onPosterClick = () => {
    props.handlePosterClick(props.id);
  };
  return (
    <article onClick={onPosterClick}>
      <img src={props.posterPath} className="poster" />
    </article>
  );
}

export default MovieCard;
