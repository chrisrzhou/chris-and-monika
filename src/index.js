import React from 'react';
import { createHistory } from 'history';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store';
import routes from './routes';

const history = createHistory();
const store = configureStore();

render(
  <Provider store={store} key="provider">
    <Router history={history} children={routes} />
  </Provider>,
  document.getElementById('root'),
);
