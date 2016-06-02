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
    const { isFetching } = this.state;

    return (
      <div className="paginator">
        { this.state.isFetching ? <Loader /> : '' }
      </div>
    );
  }
}

export default Paginator;
