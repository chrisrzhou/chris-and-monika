import React from 'react';

import './navbar.less';

const Navbar = () => {
  return (
		<nav role="navigation">
			<ul>
				<li>
          <a href="#">Home</a>
				</li>
				<li>
          <a href="#">About Us</a>
				</li>
				<li>
          <a href="#">Wedding</a>
				</li>
				<li>
          <a href="#">RSVP</a>
				</li>
			</ul>
		</nav>
  );
};

export default Navbar;
