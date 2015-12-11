import React, { Component } from 'react';

class MovieList extends Component {
  constructor(props) {
    super();
  }

  renderMovie(movie) {
    return <li key={movie.id}>{movie.title}</li>;
  }

  render() {
    return (
      <ul className="movie-list">
        {this.props.movies.map((movie) => this.renderMovie(movie))}
      </ul>
    );
  }
}

export default MovieList;
