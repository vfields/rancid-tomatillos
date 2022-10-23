import React from "react";
import "./App.css";
import Header from "../Header/Header";
import MovieContainer from "../MovieContainer/MovieContainer";
import SingleMovie from "../SingleMovie/SingleMovie";
import SearchBar from "../SearchBar/SearchBar"
import { getMovieData } from "./../../apiCalls";
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      movies: [],
      error: "",
      searchBar: ""
    };
  }

  componentDidMount() {
    this.setState({ loading: true })
    getMovieData()
      .then((data) => {
        this.setState({
          loading: false,
          movies: data.movies,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          error: `Uh oh! That's a ${error.message}, please try again later!`,
        });
      });
  }

  updateSearch = (value) => {
    this.setState({
      searchBar: value
    });
  }

  clearSearch = () => {
    this.setState({
      searchBar: ''
    })
  }

  render() {
    return (
      <main>
        <Header />
        {this.state.error && <h2>{this.state.error}</h2>}
        <Route exact path="/">
          <SearchBar updateSearch={this.updateSearch} />
          <MovieContainer
            movies={this.state.movies}
            searchBar={this.state.searchBar}
            loading={this.state.loading}
          />
        </Route>

        <Route
          exact
          path="/:movieId"
          render={({ match }) => {
            const movieToRender = this.state.movies.find(
              (movie) => movie.id === parseInt(match.params.movieId)
            );
            return <SingleMovie movieId={movieToRender.id} clearSearch={this.clearSearch} />;
          }}
        />
      </main>
    );
  }
}

export default App;
