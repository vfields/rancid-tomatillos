import React from "react";
import "./App.css";
import MovieContainer from "../MovieContainer/MovieContainer.js";
import SingleMovie from "../SingleMovie/SingleMovie";
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: "",
    };
  }

  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          movies: data.movies,
        });
      })
      .catch((error) => {
        this.setState({
          error: `Uh oh! That's a ${error.message}, please try again later!`,
        });
      });
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos</h1>
        {this.state.error && <h2>{this.state.error}</h2>}

        <Route exact path="/">
          <MovieContainer movies={this.state.movies} />
        </Route>

        <Route
          exact
          path="/:movieId"
          render={({ match }) => {
            const movieToRender = this.state.movies.find(
              (movie) => movie.id === parseInt(match.params.movieId)
            );
            return <SingleMovie movieId={movieToRender.id} />;
          }}
        />
      </main>
    );
  }
}

export default App;
