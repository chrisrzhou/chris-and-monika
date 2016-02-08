import React, { PropTypes } from 'react';
import 'font-awesome-webpack';

import About from './about/about.react';
import Footer from './footer/footer.react';
import Home from './home/home.react';
import Navbar from './navbar/navbar.react';
import RSVP from './rsvp/rsvp.react';
import Wedding from './wedding/wedding.react';
import './../css/app.less';

const App = (props) => {
  const { app } = props;
  return (
    <div>
      <Navbar />
        <div className="main">
          <Home home={app.home} />
          <About about={app.about} />
          <Wedding wedding={app.wedding} />
          <RSVP rsvp={app.rsvp} email={app.email} />
        </div>
      <Footer github={app.github} />
    </div>
  );
};

App.propTypes = {
  app: PropTypes.object.isRequired,
};

export default App;
