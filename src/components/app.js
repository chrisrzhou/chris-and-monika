import React from 'react';
import 'font-awesome-webpack';

import About from './about/about';
import Footer from './footer/footer';
import Home from './home/home';
import Navbar from './navbar/navbar';
import Registry from './registry/registry';
import RSVP from './rsvp/rsvp';
import Wedding from './wedding/wedding';
import './../css/app.less';

const App = () => {
  return (
    <div>
      <Navbar />
        <div className="main">
          <Home />
          <About />
          <Wedding />
          <RSVP />
          <Registry />
        </div>
      <Footer />
    </div>
  );
};

export default App;
