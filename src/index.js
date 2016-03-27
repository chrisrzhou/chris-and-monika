import {Provider} from 'react-redux';
import React from 'react';
import createStore from './store';
import {render} from 'react-dom';

import AppContainer from './containers/app.container.react';

const store = createStore();

const provider = (
  <Provider store={store} key="provider">
    <AppContainer />
  </Provider>
);

render(
  provider,
  document.getElementById('root'),
);
