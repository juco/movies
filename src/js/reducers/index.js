import { combineReducers } from 'redux';
import { REQUEST_RATINGS, RECEIVED_RATINGS, RESET_RATINGS } from 'constants';

const initialState = {
  isFetching: false,
  start: 0,
  items: []
};

function movies(state = initialState, action) {
  switch(action.type) {
    case REQUEST_RATINGS:
      return { ...state, isFetching: true };
    case RESET_RATINGS:
      return {
        ...state,
        isFetching: false,
        start: state.start + 50,
        items: action.items
      };
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
