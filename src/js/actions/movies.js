import { API_PATH, REQUEST_RATINGS, RECEIVED_RATINGS,
  RESET_RATINGS } from 'constants';

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

export function resetRatings() {
  console.log('reset');
  return (dispatch, getState) => {
    dispatch(requestMovies());

    fetchRatings()
      .then(json => dispatch(receivedMovies(RESET_RATINGS, json)));
  };
}

export function nextRatings(start = 0) {
  return (dispatch, getState) => {
    if(getState().movies.isFetching) {
      return Promise.resolve();
    }

    dispatch(requestMovies());

    fetchRatings(start)
      .then(json => dispatch(receivedMovies(RECEIVED_RATINGS, json)));
  };
}

function fetchRatings(start = 0) {
  return fetch(`${API_PATH}/ratings?start=${start}`)
    .then(res => res.json())
}

