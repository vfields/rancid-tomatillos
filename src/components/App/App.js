import React from "react";
import "./App.css";
import movieData from "../../mockData";
import MovieContainer from "../MovieContainer/MovieContainer.js";
import SingleMovie from "../SingleMovie/SingleMovie";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      singleMovie: false,
    };
  }

  // showMovieDetails() {}
  // handlePosterClick

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        {!this.state.singleMovie && (
          <MovieContainer movies={this.state.movies} />
        )}
        {/* <MovieContainer movies={this.state.movies} /> */}
        {/* <SingleMovie /> */}
      </main>
    );
  }
}

export default App;
