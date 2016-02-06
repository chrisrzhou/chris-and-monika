import React from 'react';

import './navbar.less';

const Navbar = () => {
  return (
    <nav role="navigation">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#wedding">Wedding</a>
        </li>
        <li>
          <a href="#rsvp">RSVP</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
