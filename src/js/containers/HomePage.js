import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRatings } from 'actions/movies';
import MovieList from 'components/MovieList';
import Paginator from 'components/paginator';

class HomePage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    this.loadMore = this.loadMore.bind(this);
    dispatch(fetchRatings());
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
  }

  loadMore() {
    const { dispatch, start } = this.props;
    dispatch(fetchRatings(start));
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <MovieList movies={this.props.items} />
        <Paginator loadMore={this.loadMore} />
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

