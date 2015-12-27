import React, { Component } from 'react';
import Rating from 'components/Rating';

import 'styles/components/Movie.scss';

class Movie extends Component {
  render() {
    //let rating = Math.floor(parseInt(this.props.rating, 10) / 2);
    let rating = parseInt(this.props.rating, 10);
    return (
      <li className="movie">
        <img className="movie-image" src={this.props.cover} />
        <Rating stars={rating} />
      </li>
    );
  }
}

export default Movie;
