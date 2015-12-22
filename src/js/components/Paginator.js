import React, { Component } from 'react';
import { fetchRatings } from 'actions/movies';
import Loader from 'components/Loader';

import 'styles/components/paginator.scss';

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
      button = <Loader />
    } else {
      button = (
        <button
          className='loadMore'
          onClick={this.props.loadMore}>
          Load more
        </button>
      );
    }

    return button;
  }
}

export default Paginator;
