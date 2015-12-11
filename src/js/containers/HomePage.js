import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRatings } from 'actions/movies';
import MovieList from 'components/MovieList';

class HomePage extends Component {
  componentDidMount() {
    console.log('props', this.props);
    const { dispatch } = this.props;
    dispatch(fetchRatings());
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch } = this.props;
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <MovieList movies={this.props.items} />
      </div>
    );
  }
}

function foobar(state) {
  console.log('state', state);
  const { movies } = state;
  const {
    isFetching,
    items
  } = movies || {
    isFetching: true,
    items: []
  };

  console.log('foobar', isFetching, items);
  return {
    isFetching,
    items
  }
}

export default connect(foobar)(HomePage);


//export default connect(
  //mapStateToProps,
  //{ fetchRatings },
//)(HomePage);

