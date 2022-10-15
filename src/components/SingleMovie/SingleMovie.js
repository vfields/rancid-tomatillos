import React from "react";
import "./SingleMovie.css";
// import movieData from "../../mockData";
// import MovieCard from "../MovieCard/MovieCard.js";

class SingleMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    }
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.movieId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movie: data.movie
        })
      })
  }

  render() {
    console.log(this.state.movie)
    return (
      <div className="singleMovieBox">
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


  //to do convert to class component and change next line to api call
  // const movieDetails = movieData.movies.find(
  //   (movie) => movie.id === props.movieId
  // );
  // console.log({ movieDetails });

export default SingleMovie;
