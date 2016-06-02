import fetch from 'isomorphic-fetch';
import url from 'url';
import { API_PATH, REQUEST_RATINGS, START_CHANGED, CHANGE_FILTER,
  RESET_RATINGS, ADD_RATINGS, FILTER_ALL } from 'constants';

const URL_BASE = {
  protocol: 'http',
  hostname: 'localhost',
  port: 9393,
  query: {
    start: 0,
    filter: 'all'
  }
};

function fetchUrl(type, start = 0, filter = null) {
  return url.format({
    ...URL_BASE,
    pathname: type,
    query: {
      ...URL_BASE.query,
      start,
      filter
    }
  });
}

function requestMovies() {
  return {
    type: REQUEST_RATINGS
  };
}

function resetRatings() {
  return {
    type: RESET_RATINGS
  };
}

function addRatings(movies) {
  return {
    type: ADD_RATINGS,
    items: movies.items,
    total: movies.total,
    receivedAt: new Date()
  };
}

function filterChanged(filter) {
  return {
    type: CHANGE_FILTER,
    filter
  };
}

function shouldFetchMore(state) {
  const {
    total,
    isFetching,
    items
  } = state.movies;
  const noneLeft = items.length >= total;

  return !(isFetching || noneLeft);
}

export function fetchRatings() {
  return (dispatch, getState) => {
    const { start, filter } = getState().movies;

    if(!shouldFetchMore(getState())) return Promise.resolve();

    dispatch(requestMovies());

    return fetch(fetchUrl('ratings', start, filter))
      .then(res => res.json())
      .then(json => dispatch(addRatings(json)));
  };
}

export function changeFilter(nextFilter = FILTER_ALL.value) {
  return (dispatch, getState) => {
    dispatch(filterChanged(nextFilter));
    dispatch(resetRatings());
    dispatch(fetchRatings());
  };
}

