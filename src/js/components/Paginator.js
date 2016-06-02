import React, { Component } from 'react';
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
        { isFetching ? <Loader /> : '' }
      </div>
    );
  }
}

export default Paginator;
