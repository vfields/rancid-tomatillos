import React from "react";
import { Link } from "react-router-dom";
import { getMovieData, getMovieVideoData } from "./../../apiCalls";
import { ReactComponent as Logo } from "../../assets/exit.svg";
import ReactStars from "react-stars";
import Trailer from "../Trailer/Trailer";
import MicroModal from "react-micro-modal";
import "./../../apiCalls";
import "./SingleMovie.css";

class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movie: {},
      error: "",
      trailer: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    getMovieData(this.props.movieId)
      .then((data) => {
        this.setState({
          loading: false,
          movie: data.movie,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: `Oops! That's a ${error.message}. Something went wrong, try again later!`,
        });
      });

    getMovieVideoData(this.props.movieId)
      .then((data) => {
        this.setState({
          trailer: data.videos.find((video) => video.type === "Trailer"),
        });
      })
      .catch((error) => {
        this.setState({
          error: `Oops! That's a ${error.message}. Something went wrong, try again later!`,
        });
      });
    this.props.clearSearch();
  }

  render() {
    const date = String(this.state.movie.release_date).split("-");
    const releaseDate = [date[1], date[2], date[0]].join("/");
    const genres = String(this.state.movie.genres).split(",");
    const displayedGenres = genres.join(" | ");
    return (
      <div className="singleMovieBox">
        {this.state.loading && (
          <span className="loading">{this.state.loading}</span>
        )}
        {this.state.error && <span className="error">{this.state.error}</span>}
        <MicroModal
          trigger={(open) => (
            <img
              onClick={open}
              src={this.state.movie.backdrop_path}
              alt={`a backdrop poster of ${this.state.movie.title}`}
              className="backdrop"
            />
          )}
        >
          {(close) => (
            <div className="modal">
              <div>
                <Trailer
                  trailer={this.state.trailer ? this.state.trailer.key : "None"}
                />
              </div>
              <button className="close-button" onClick={close}>
                Close!
              </button>
            </div>
          )}
        </MicroModal>
        <div className="all-movie-details">
          <img
            src={this.state.movie.poster_path}
            alt={`a poster of ${this.state.movie.title}`}
            className="single-poster"
          />
          <div className="movie-details">
            <h1 className="title">{this.state.movie.title}</h1>
            <h2 className="overview">{this.state.movie.overview}</h2>
            <div className="star-container">
              <ReactStars
                className="react-stars"
                count={5}
                value={this.state.movie.average_rating / 2}
                size={15}
                color1={"#5c5c5c"}
                color2={"#e2b837"}
              />
            </div>
            <h3 className="details">
              🎥 Runtime: {this.state.movie.runtime} mins | 📅 Release Date:{" "}
              {releaseDate}
            </h3>
            <h3 className="display-genre">{displayedGenres}</h3>
          </div>
        </div>
        <Link to="/">
          <button className="exit-button">
            <Logo className="logo" />
          </button>
        </Link>
      </div>
    );
  }
}

export default SingleMovie;
