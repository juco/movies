import { combineReducers } from 'redux';
import { REQUEST_RATINGS, RECEIVED_RATINGS } from 'constants';

const initialState = {
  isFetching: false,
  start: 0,
  items: [
    {
      id: 1,
      title: 'Example',
      year: '2001',
      rating: 5,
      is_movie: false,
      cover: 'foo.jpg',
      blurb: 'Some blurb',
      movie: true
    }
  ]
};

function movies(state = initialState, action) {
  switch(action.type) {
    case REQUEST_RATINGS:
      return { ...state, isFetching: true };
    case RECEIVED_RATINGS:
      return {
        ...state,
        isFetching: false,
        start: state.start + 50,
        items: [...state.items, ...action.items]
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  movies
});

export default rootReducer;
