import {createStore} from 'redux';

import reducer from './reducers/reducer';

export default (state) => {
  return createStore(reducer, state);
};
