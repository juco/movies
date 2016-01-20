import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRatings, nextRatings, changeFilter } from 'actions/movies';
import Header from 'components/Header';
import MovieList from 'components/MovieList';
import Paginator from 'components/Paginator';
import TypeFilter from 'components/TypeFilter';

class HomePage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    this.loadMore = this.loadMore.bind(this);
    this.filterChanged = this.filterChanged.bind(this);

    dispatch(fetchRatings());
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
  }

  loadMore() {
    const { dispatch, start } = this.props;
    dispatch(nextRatings(start));
  }

  filterChanged(nextFilter) {
    const { dispatch } = this.props;
    dispatch(changeFilter(nextFilter));
  }

  render() {
    return (
      <div>
        <Header text="Home" />
        <TypeFilter filterChanged={this.filterChanged} />
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

