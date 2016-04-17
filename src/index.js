import {Provider} from 'react-redux';
import React from 'react';
import createStore from './store';
import {render} from 'react-dom';

import App from './components/app.container.react';

const store = createStore();

const provider = (
  <Provider store={store} key="provider">
    <App />
  </Provider>
);

render(
  provider,
  document.getElementById('root'),
);
