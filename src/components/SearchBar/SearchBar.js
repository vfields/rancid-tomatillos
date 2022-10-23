import React from 'react';
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      search: value
    });
    this.props.updateSearch(value);
  }

  render() {
    return (
      <form>
          <input
            type="text"
            name="search"
            value={this.state.search}
            placeholder="Search your favorite movie title!"
            onChange={this.handleChange}
          />
      </form>
    )
  }
}

export default SearchBar;
