import React from "react";
import "./App.css";
// import movieData from "../../mockData";
import MovieContainer from "../MovieContainer/MovieContainer.js";
import SingleMovie from "../SingleMovie/SingleMovie";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovieId: null,
    };
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.movies
        })
      })
  }

  handlePosterClick = (movieId) => {
    console.log("I was clicked", movieId);

    this.setState({
      selectedMovieId: movieId,
    });
  };

  handleBackClick = () => {
    console.log("Hello");

    this.setState({ selectedMovieId: null });
  };

  render() {
    console.log(this.state.movies);
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        {this.state.selectedMovieId ? (
          <SingleMovie
            movieId={this.state.selectedMovieId}
            handleBackClick={this.handleBackClick}
          />
        ) : (
          <MovieContainer
            movies={this.state.movies}
            handlePosterClick={this.handlePosterClick}
          />
        )}
      </main>
    );
  }
}

export default App;
