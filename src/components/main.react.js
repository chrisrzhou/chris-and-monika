import React, { PropTypes } from 'react';

import Navbar from './navbar/navbar.react';
import Footer from './footer/footer.react';

const Main = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Main;
