import React from "react";
import "./SingleMovie.css";
// import "./assets/home.svg";

class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      error: "",
    };
  }

  componentDidMount() {
    fetch(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
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
        <img src={this.state.movie.backdrop_path} className="backdrop" />
        <div className="all-movie-details">
          <img src={this.state.movie.poster_path} className="single-poster" />
          <div className="movie-details">
            <h1 className="title">{this.state.movie.title}</h1>
            <h2 className="overview">{this.state.movie.overview}</h2>
            <h3 className="details">
              ⭐ Rating: {Number(this.state.movie.average_rating).toFixed(1)} |
              🎥 Runtime: {this.state.movie.runtime} | 📅 Release Date:{" "}
              {releaseDate}
            </h3>
          </div>
        </div>
        <button onClick={this.props.handleBackClick}>Back</button>
      </div>
    );
  }
}

export default SingleMovie;
