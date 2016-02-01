import React from 'react';
import { createHistory } from 'history';
import { render } from 'react-dom';
import { Route, Router, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import createStore from './store';
import AppContainer from './containers/app.container.react';
import About from './components/about/about.react';
import Home from './components/home/home.react';
import Wedding from './components/wedding/wedding.react';
import RSVP from './components/rsvp/rsvp.react';

const history = createHistory();
const store = createStore();

const routes = (
  <Router>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={Home} />
      <Route path="about-us" component={About} />
      <Route path="wedding" component={Wedding} />
      <Route path="rsvp" component={RSVP} />
    </Route>
  </Router>
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
