import { combineReducers } from 'redux';
import { REQUEST_RATINGS, RECEIVED_RATINGS, RESET_RATINGS,
  START_CHANGED, CHANGE_FILTER } from 'constants';

const initialState = {
  isFetching: false,
  start: 0,
  filter: null,
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
    case START_CHANGED:
      return {
        ...state,
        start: action.start
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  movies
});

export default rootReducer;
