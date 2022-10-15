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
      error: ''
    };
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if(!response.ok) {
          throw new Error(`${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        this.setState({
          movies: data.movies
        })
      })
      .catch(error => {
        this.setState({
          error: `Uh oh! That's a ${error.message}, please try again later!`
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
        {
          this.state.error && <h2>{this.state.error}</h2>
        }
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
