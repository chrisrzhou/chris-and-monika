import React, {PropTypes} from 'react';
import 'font-awesome-webpack';

import About from './about/about.react';
import Footer from './footer/footer.react';
import Home from './home/home.react';
import Navbar from './navbar/navbar.react';
import RSVP from './rsvp/rsvp.react';
import Wedding from './wedding/wedding.react';
import './../css/app.less';


const App = (props) => {
  const {data} = props;
  const {home, about, wedding, rsvp, email, github} = data;
  return (
    <div>
      <Navbar />
        <div className="main">
          <Home home={home} />
          <About about={about} />
          <Wedding wedding={wedding} />
          <RSVP rsvp={rsvp} email={email} />
        </div>
      <Footer github={github} />
    </div>
  );
};

App.propTypes = {
  data: PropTypes.object.isRequired,
};

export default App;
