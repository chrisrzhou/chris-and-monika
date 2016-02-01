import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers/reducer';

const finalCreateStore = applyMiddleware(
  thunkMiddleware,
)(createStore);

export default (state) => {
  return finalCreateStore(reducer, state);
};
