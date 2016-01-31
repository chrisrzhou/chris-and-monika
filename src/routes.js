import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';

const EmptySection = () => {
  return <h1>this is empty section</h1>;
};

export default (
  <Route component={App}>
    <Route path="/" component={EmptySection} />
  </Route>
);
