import React from 'react';

import About from './about/about.react';
import Footer from './footer/footer.react';
import Home from './home/home.react';
import Navbar from './navbar/navbar.react';
import RSVP from './rsvp/rsvp.react';
import Wedding from './wedding/wedding.react';
import './../css/app.less';

const App = (props) => {
  return (
    <div>
      <Navbar />
        <div className="main">
          <Home {...props} />
          <About {...props} />
          <Wedding {...props} />
          <RSVP {...props} />
        </div>
      <Footer />
    </div>
  );
};

export default App;
