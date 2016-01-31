import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import reducer from './reducers/reducer';

const finalCreateStore = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware,
)(createStore);

export default (state) => {
  return finalCreateStore(reducer, state);
};
