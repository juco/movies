import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetRatings, nextRatings } from 'actions/movies';
import Header from 'components/Header';
import MovieList from 'components/MovieList';
import Paginator from 'components/Paginator';

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
        <Header text="Home" />
        <MovieList movies={this.props.items} loadMore={this.loadMore} />
        <Paginator loadMore={this.loadMore} isFetching={this.props.isFetching} />
      </div>
    );
  }
}

function mapStateToProps(state) {
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

export default connect(mapStateToProps)(HomePage);

