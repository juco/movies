import React, { Component } from 'react';
import { fetchRatings } from 'actions/movies';

class Paginator extends Component {
  constructor() {
    super();
    this.state = { isFetching: true };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isFetching: nextProps.isFetching });
  }

  render() {
    const { isFetching } = this.state.isFetching;
    let button;

    if(this.state.isFetching) {
      button = <span>Loading...</span>;
    } else {
      button = <button onClick={this.props.loadMore}>Load more</button>
    }

    return button;
  }
}

export default Paginator;
