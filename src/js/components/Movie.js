import React, { Component } from 'react';
import Rating from 'components/Rating';

import 'styles/components/Movie.scss';

class Movie extends Component {
  render() {
    const rating = parseInt(this.props.rating, 10);
    const styles = {
      backgroundImage: `url(${this.props.cover})`
    };

    return (
      <li className="movie-item">
        <div className="movie" style={styles}>
          <div className="movie-overlay">
            <p className="movie-title">{this.props.title}</p>
            <p className="movie-rating">
              <span className="digit">{this.props.rating}</span>
              <span className="star">&nbsp; &#9733;</span>
            </p>
            <a
              href={`http://imdb.com/${this.props.href}`}
              target="_blank">
              view on imdb
            </a>
          </div>
        </div>
        <Rating stars={rating} />
      </li>
    );
  }
}

export default Movie;
