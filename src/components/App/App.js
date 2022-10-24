import React from "react";
import "./App.css";
import Header from "../Header/Header";
import MovieContainer from "../MovieContainer/MovieContainer";
import SingleMovie from "../SingleMovie/SingleMovie";
import SearchBar from "../SearchBar/SearchBar"
import { getMovieData } from "./../../apiCalls";
import { Switch, Route } from "react-router-dom";

import BadUrl from "../BadUrl/BadUrl"

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
        <Switch>
          <Route exact path="/">
            <SearchBar updateSearch={this.updateSearch} />
            {this.state.loading && <div className="loading-container"><span className="loading">Loading...</span></div>}
            {this.state.error && <div className="error-container"><span className="error">{this.state.error}</span></div>}
            <MovieContainer
              movies={this.state.movies}
              searchBar={this.state.searchBar}
              loading={this.state.loading}
            />
          </Route>

          <Route
            exact
            path="/movies/:movieId"
            render={({ match }) => {
              const movieToRender = this.state.movies.find(
                (movie) => movie.id === parseInt(match.params.movieId)
              );
              return <SingleMovie movieId={movieToRender.id} clearSearch={this.clearSearch} />;
            }}
          />

          <Route component={BadUrl} />
        </Switch>
      </main>
    );
  }
}

export default App;
