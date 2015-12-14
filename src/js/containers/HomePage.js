import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetRatings, nextRatings } from 'actions/movies';
import MovieList from 'components/MovieList';
import Paginator from 'components/paginator';

class HomePage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    this.loadMore = this.loadMore.bind(this);
    dispatch(resetRatings());
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
  }

  loadMore() {
    const { dispatch, start } = this.props;
    dispatch(nextRatings(start));
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <MovieList movies={this.props.items} />
        <Paginator loadMore={this.loadMore} isFetching={this.props.isFetching} />
      </div>
    );
  }
}

function foobar(state) {
  const { movies } = state;
  const {
    isFetching,
    start,
    items
  } = movies || {
    isFetching: true,
    start: 0,
    items: []
  };

  return {
    isFetching,
    start,
    items
  }
}

export default connect(foobar)(HomePage);


//export default connect(
  //mapStateToProps,
  //{ fetchRatings },
//)(HomePage);

