import React from "react";
import ReactStars from "react-stars";
import "./MovieCard.css";

function MovieCard({ id, title, posterPath, rating }) {
  return (
    <article className="card">
      <img src={posterPath} alt={`a poster of ${title}`} className="poster" />
      <div className="star-main-container">
        <ReactStars
          className="react-stars"
          count={5}
          value={rating / 2}
          size={15}
          color1={"#5c5c5c"}
          color2={"#ebe191"}
        />
      </div>
    </article>
  );
}

export default MovieCard;
