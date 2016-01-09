import url from 'url';
import { API_PATH, REQUEST_RATINGS, RECEIVED_RATINGS,
  RESET_RATINGS, START_CHANGED, CHANGE_FILTER } from 'constants';

const URL_BASE = {
  protocol: 'http',
  hostname: 'localhost',
  port: 9393,
  query: {
    start: 0,
    filter: undefined
  }
};

function requestMovies() {
  return {
    type: REQUEST_RATINGS
  };
}

function receivedMovies(action, movies) {
  return {
    type: action,
    items: movies.items,
    receivedAt: new Date()
  };
}

function startChanged(start) {
  return {
    type: START_CHANGED,
    start
  };
}

function filterChanged(filter) {
  return {
    type: CHANGE_FILTER,
    filter
  };
}

function fetchRatings(state) {
  const { start, filter } = state.movies;
  return fetch(fetchUrl('ratings', start, filter))
    .then(res => res.json())
}

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

export function resetRatings() {
  return(dispatch, getState) => {
    dispatch(requestMovies());

    fetchRatings(getState())
      .then(json => dispatch(receivedMovies(RESET_RATINGS, json)));
  };
}

export function nextRatings(start = 0) {
  return(dispatch, getState) => {
    if(getState().movies.isFetching) {
      return Promise.resolve();
    }

    dispatch(requestMovies());
    dispatch(startChanged(start));
    //dispatch(fetchRatings(getState()));

    fetchRatings(getState())
      .then(json => dispatch(receivedMovies(RECEIVED_RATINGS, json)));
  };
}

export function changeFilter(nextFilter = 'all') {
  return (dispatch, getState) => {
    dispatch(filterChanged(nextFilter));
    dispatch(resetRatings());
  };
}

