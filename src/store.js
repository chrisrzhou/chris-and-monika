import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import rootReducer from './reducers/rootReducer';

const finalCreateStore = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware,
)(createStore);

const configureStore = (state) => {
  return finalCreateStore(rootReducer, state);
};

export default configureStore;
