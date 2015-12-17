import React, { Component } from 'react';

import 'styles/components/Movie.scss';

class Movie extends Component {
  render() {
    return (
      <li className="movie">
        <img src={this.props.cover} />
      </li>
    );
  }
}

export default Movie;