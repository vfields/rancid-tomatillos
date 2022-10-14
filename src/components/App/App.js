import React from "react";
import "./App.css";
import movieData from "../../mockData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
    };
  }

  render() {
    return <h1>Rancid Tomatillos</h1>;
  }
}

export default App;
