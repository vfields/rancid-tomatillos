import React from "react";
import "./App.css";
import movieData from "../../mockData";
import MovieContainer from "../MovieContainer/MovieContainer.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
    };
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        <MovieContainer
          movies={this.state.movies}
        />
      </main>
    );
  }
}

export default App;
