import url from 'url';
import { API_PATH, REQUEST_RATINGS, START_CHANGED, CHANGE_FILTER
  , RESET_RATINGS, ADD_RATINGS } from 'constants';

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

export function fetchRatings() {
  return (dispatch, getState) => {
    let { start, filter } = getState().movies;

    if(getState().movies.isFetching) return Promise.resolve();

    dispatch(requestMovies());

    return fetch(fetchUrl('ratings', start, filter))
      .then(res => res.json())
      .then(json => dispatch(addRatings(json)));
  };
}

export function nextRatings() {
  return (dispatch, getState) => {
    let { start, perPage } = getState().movies;

    dispatch(fetchRatings());
  }
}

export function changeFilter(nextFilter = 'all') {
  return (dispatch, getState) => {
    dispatch(filterChanged(nextFilter));
    dispatch(resetRatings());
    dispatch(fetchRatings());
  };
}

