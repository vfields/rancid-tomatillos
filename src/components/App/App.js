import React from "react";
import "./App.css";
import Header from "../Header/Header";
import MovieContainer from "../MovieContainer/MovieContainer";
import SingleMovie from "../SingleMovie/SingleMovie";
import { getMovieData } from "./../../apiCalls";
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
    getMovieData()
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
        <Header />
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
