import url from 'url';
import { API_PATH, REQUEST_RATINGS, RECEIVED_RATINGS,
  RESET_RATINGS } from 'constants';

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

function fetchRatings(start = 0, filter = null) {
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

    fetchRatings()
      .then(json => dispatch(receivedMovies(RESET_RATINGS, json)));
  };
}

export function nextRatings(start = 0) {
  return(dispatch, getState) => {
    if(getState().movies.isFetching) {
      return Promise.resolve();
    }

    dispatch(requestMovies());

    fetchRatings(start)
      .then(json => dispatch(receivedMovies(RECEIVED_RATINGS, json)));
  };
}

export function changeFilter(nextFilter = 'all') {
  // TODO support watchlist
  return(dispatch, getState) => {
    dispatch(requestMovies());

    fetchRatings(0, nextFilter)
      .then(json => dispatch(receivedMovies(RESET_RATINGS, json)));
  };
}

