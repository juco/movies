import React, { Component } from 'react';
import { fetchRatings } from 'actions/movies';

class Paginator extends Component {
  render() {
    return (
      <button onClick={this.props.loadMore}>Load more</button>
    );
  }
}

export default Paginator;
