import React from "react";
import "./SingleMovie.css";

class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      error: ''
    }
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`)
      .then(response => {
        if(!response.ok) {
          throw new Error(`${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        this.setState({
          movie: data.movie
        })
      })
      .catch(error => {
        this.setState({
          error: `Oops! That's a ${error.message}. Something went wrong, try again later!`
        })
      })
  }

  render() {
    return (
      <div className="singleMovieBox">
      {this.state.error && <h2>{this.state.error}</h2>}
        <img src={this.state.movie.backdrop_path} className="backdrop" />
        <div className="all-movie-details">
          <img src={this.state.movie.poster_path} className="single-poster" />
          <div className="movie-details">
            <h1>{this.state.movie.title}</h1>
            <h2>Rating: {this.state.movie.average_rating}</h2>
            <h2>
              Release Date: {this.state.movie.release_date}
            </h2>
          </div>
        </div>
        <button onClick={this.props.handleBackClick}>Back</button>
      </div>
    );
  }

}

export default SingleMovie;
