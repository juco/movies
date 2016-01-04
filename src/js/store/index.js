import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Logger from 'middleware/Logger';
import rootReducer from 'reducers';


const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  Logger
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

export default store;
