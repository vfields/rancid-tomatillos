import React from "react";
import { Link } from "react-router-dom";
import { getMovieData } from "./../../apiCalls";
import "./../../apiCalls";
import "./SingleMovie.css";

class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      error: "",
    };
  }

  componentDidMount() {
    getMovieData(this.props.movieId)
      .then((data) => {
        this.setState({
          movie: data.movie,
        });
      })
      .catch((error) => {
        this.setState({
          error: `Oops! That's a ${error.message}. Something went wrong, try again later!`,
        });
      });
  }

  render() {
    const date = String(this.state.movie.release_date).split("-");
    const releaseDate = [date[1], date[2], date[0]].join("/");
    return (
      <div className="singleMovieBox">
        {this.state.error && <h2>{this.state.error}</h2>}
        <img src={this.state.movie.backdrop_path} alt={`a backdrop poster of ${this.state.movie.title}`} className="backdrop" />
        <div className="all-movie-details">
          <img src={this.state.movie.poster_path} alt={`a poster of ${this.state.movie.title}`} className="single-poster" />
          <div className="movie-details">
            <h1 className="title">{this.state.movie.title}</h1>
            <h2 className="overview">{this.state.movie.overview}</h2>
            <h3 className="details">
              ⭐ Rating: {Number(this.state.movie.average_rating).toFixed(1)} |
              🎥 Runtime: {this.state.movie.runtime} | 📅 Release Date: {releaseDate}
            </h3>
          </div>
        </div>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

export default SingleMovie;
