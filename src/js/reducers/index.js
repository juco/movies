import { combineReducers } from 'redux';
import { REQUEST_RATINGS, CHANGE_FILTER, RESET_RATINGS
  , ADD_RATINGS } from 'constants';

const initialState = {
  isFetching: false,
  start: 0,
  perPage: 50,
  filter: 'all',
  items: []
};

function movies(state = initialState, action) {
  switch(action.type) {
    case REQUEST_RATINGS:
      return { ...state, isFetching: true };
    case RESET_RATINGS:
      return {
        ...state,
        start: 0,
        items: []
      }
    case ADD_RATINGS:
      return {
        ...state,
        isFetching: false,
        total: action.total,
        start: state.start + action.items.length,
        items: [...state.items, ...action.items]
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
