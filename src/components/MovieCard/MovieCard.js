import React from "react";
import "./MovieCard.css";

function MovieCard(props) {
  const onPosterClick = () => {
    props.handlePosterClick(props.id);
  };
  return (
    <article onClick={onPosterClick}>
      {/* <h1>{props.title}</h1> */}
      <img src={props.posterPath} className="poster" />
    </article>
  );
}

export default MovieCard;
