import React from 'react';
import { createHistory } from 'history';
import { render } from 'react-dom';
import { Route, Router } from 'react-router';
import { Provider } from 'react-redux';

import createStore from './store';
import App from './containers/app.react';
import Navbar from './components/navbar/navbar.react';

const history = createHistory();
const store = createStore();

const routes = (
  <Route component={App}>
    <Route path="/" component={Navbar} />
  </Route>
);

const provider = (
  <Provider store={store} key="provider">
    <Router history={history} children={routes} />
  </Provider>
);

render(
  provider,
  document.getElementById('root'),
);
