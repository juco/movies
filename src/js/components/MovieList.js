import React, { Component } from 'react';
import Movie from 'components/Movie';

import 'styles/components/MovieList.scss';

class MovieList extends Component {
  constructor(props) {
    super();
    this.loadMoreIfNeeded = this.loadMoreIfNeeded.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.loadMoreIfNeeded());
  }

  loadMoreIfNeeded() {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.props.loadMore();
    }
  }

  renderMovie(movie) {
    return <Movie key={movie.id} {...movie} />
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
