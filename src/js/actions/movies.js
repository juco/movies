import { API_PATH, REQUEST_RATINGS, RECEIVED_RATINGS } from 'constants';

function requestMovies() {
  return {
    type: REQUEST_RATINGS
  };
}

function receivedMovies(movies) {
  return {
    type: RECEIVED_RATINGS,
    items: movies,
    receivedAt: new Date()
  };
}

export function fetchRatings() {
  return (dispatch, getState) => {

    dispatch(requestMovies());

    return fetch(`${API_PATH}/ratings`)
      .then(res => res.json())
      .then(json => dispatch(receivedMovies(json)));
  };
}

